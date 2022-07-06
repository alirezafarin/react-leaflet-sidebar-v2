export interface V2SidebarConfigsType {
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

export interface V2SidebarPanelType {
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

export type V2SidebarPanelsType = V2SidebarPanelType[];
