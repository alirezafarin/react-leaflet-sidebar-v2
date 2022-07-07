# react-leaflet-sidebar-v2

This is a react hook for the [leaflet-sidebar-v2](https://www.npmjs.com/package/leaflet-sidebar-v2) package.\
It works with react-leaflet library.\
You can easily use this hook to add a sidebar to your react-leaflet map.

## Demo View

![Logo](./leaflet-sidebar-v2.gif)

## Demo Link

[Demo](https://shiny-star-0148.on.fleek.co)

## Usage/Examples

```javascript
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Fragment } from "react";
import { useV2Sidebar, V2SidebarPanelsType } from "react-leaflet-sidebar-v2";

function App() {
  return (
    <MapContainer
      className="map-container"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Sidebar />
    </MapContainer>
  );
}

function Sidebar() {
  const map = useMap();
  const panels: V2SidebarPanelsType = [
    {
      id: "userInfo",
      tab: '<i style="font-size: large" class="fa fa-user"></i>',
      pane: "User Info Tab Content",
      title: "Your Profile",
      position: "top",
    },
    {
      id: "settings",
      tab: '<i style="font-size: large" class="fa fa-gear"></i>',
      pane: "Settings Tab Content",
      title: "Settings Tab",
      position: "top",
    },
    {
      id: "github",
      tab: '<i style="font-size: large" class="fa fa-github"></i>',
      pane: "Github Tab Content",
      title: "Github Info",
      position: "bottom",
    },
  ];
  useV2Sidebar(map, panels);

  return <Fragment></Fragment>;
}
```

## Types

```typescript
interface V2SidebarConfigsType {
  /**
   * - whether to maintain the centered map point when opening the sidebar
   */
  autopan: boolean;
  /**
   * - whether to add a close button to the panes
   */
  closeButton: boolean;
  /**
   * - the DOM container or #ID of a predefined sidebar container that should be used
   */
  container: string;
  /**
   * - left or right
   */
  position: "left" | "right";
}

interface V2SidebarPanelType {
  /**
   * - UID, used to access the panel
   */
  id: string;
  /**
   * - content can be passed as HTML string,
   */
  tab: string;
  /**
   * - DOM elements can be passed, too
   */
  pane: string;
  /**
   * - an optional pane header
   */
  title: string;
  /**
   * - optional vertical alignment, top or bottom
   */
  position: "top" | "bottom";
}

type V2SidebarPanelsType = V2SidebarPanelType[];
```
