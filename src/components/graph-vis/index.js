import React, { Component } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { GeoJSSceneManager } from '../../geojs-scene-manager';
import Store from '../../store';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import { debounce } from 'lodash-es';


@observer
class GraphVisComponent extends Component {
  static contextType = Store;

  visElement;
  scene = new GeoJSSceneManager({
    onZoomChanged: (val) => this.context.zoom = val,
    picked: (node, position) => {
      this.context.selectNode(node, position);
    },
    hovered: (node, position, radius) => {
      this.context.hovered = { node, position, radius };
    },
    hoveredLine: (node1, node2, position) => {
      this.context.hoveredLine = { node1, node2, position };
    }
  });

  dragging = {
    status: false,
    start: {x: 0, y: 0}
  }
  ro;

  autoRunListeners = [];

  clearSceneListener() {
    this.autoRunListeners.forEach((v) => v());
    this.autoRunListeners = [];
  }

  initSceneListener() {
    // delete old ones
    this.clearSceneListener();

    const store = this.context;

    const setAndObserve = (f) => {
      this.autoRunListeners.push(autorun(f));
    };
    setAndObserve(() => {
      this.scene.zoom = store.zoom;
    });
    setAndObserve(() => {
      this.scene.expand(store.spacing);
    });
    setAndObserve(() => {
      this.scene.hideAfter(store.year);
      this.scene.setNodeSize(store.nodeSizer.scale);
    });
    setAndObserve(() => {
      this.scene.setLinkOpacity(store.opacity);
    });
    setAndObserve(() => {
      const obj = this.scene.pickName(store.search);
      if (obj) {
        this.scene.display(store.search, true);
      } else {
        store.selected = null;
      }
    });
    setAndObserve(() => {
      if (store.selected == null) {
        this.scene.undisplay();
      } else {
        this.scene.display(store.selected.name);
      }
    });
    setAndObserve(() => {
      this.scene.linksVisible(store.showLinks);
    });
    setAndObserve(() => {
      this.scene.setNightMode(store.nightMode);
    });

    setAndObserve(() => {
      this.scene.setNodeColor(store.nodeColorer.scale);
    });
  }

  componentDidMount() {
    this.scene.parent = this.visElement;
    // debounce resize to await the animatiion
    this.ro = new ResizeObserver(debounce(() => {
      this.scene.resize();
    }, 200));

    this.ro.observe(this.visElement);

    if (this.scene.initScene()) {
      // set defaults
      this.initSceneListener();
    }
  }

  componentWillUnmount() {
    if (this.ro) {
      this.ro.unobserve(this.visElement);
    }

    this.clearSceneListener();
    this.scene.clear();
    this.scene.parent = null;
  }

  onVisDrag = (event) => {
    event.preventDefault();
    this.dragging.status = true;
    this.dragging.start = {x: event.clientX, y: event.clientY};

    const linksOn = this.context.showLinks;
    if (linksOn) {
      this.scene.linksVisible(false);
    }

    const mouseMoveListener = (e) => {
      this.onDrag(e);
    };

    const mouseUpListener = () => {
      window.removeEventListener('mousemove', mouseMoveListener);
      window.removeEventListener('mouseup', mouseUpListener);

      if (linksOn) {
        this.scene.linksVisible(true);
      }

      setTimeout(() => {this.dragging.status = false;}, 50);
    };

    window.addEventListener('mousemove', mouseMoveListener);
    window.addEventListener('mouseup', mouseUpListener);
  }

  onDrag = (e) => {
    if (!this.dragging.status) {
      return;
    }
    const dx = e.clientX - this.dragging.start.x;
    const dy = e.clientY - this.dragging.start.y;
    this.scene.moveCamera(dx, dy);
    this.dragging.start = {x: e.clientX, y: e.clientY};
  }

  render() {
    const store = this.context;

    if (this.scene.dp !== store.data) {
      // data has changed
      this.scene.clear();
      this.scene.dp = store.data;
      if (this.scene.initScene()) {
        // set defaults
        this.initSceneListener();
      }
    }

    return (<div
          style={{width: '100%', height: '100%'}}
          ref={ref => {this.visElement = ref}}
          draggable
          onDragStart={this.onVisDrag}
    />);
  }
}

export default GraphVisComponent;
