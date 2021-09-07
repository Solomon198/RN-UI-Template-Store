/**
 * `placeholder` *string* - place holder of search header component
 */
interface HeaderComponents {
  placeholder?: string;
}

/**
 * - `item` *any* - the item to be defined
 * - `onPress` *any* - when item is pressed
 * - `onLongPress` *any* - when item is longed press
 */
interface ListItemComponentProps {
  item: any;
  onPress?: (item: any) => void;
  onLongPress?: (item: any) => void;
}

interface FlatListProps {
  /**
   * Rendered in between each item, but not at the top or bottom
   */
  ItemSeparatorComponent?: React.ComponentType<any> | null | undefined;

  /**
   * Rendered when the list is empty.
   */
  ListEmptyComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  /**
   * Rendered at the very end of the list.
   */
  ListFooterComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  /**
   * Styling for internal View for ListFooterComponent
   */
  ListFooterComponentStyle?: any | undefined;

  /**
   * Rendered at the very beginning of the list.
   */
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  /**
   * Styling for internal View for ListHeaderComponent
   */
  ListHeaderComponentStyle?: any | undefined;

  /**
   * Optional custom style for multi-item rows generated when numColumns > 1
   */
  columnWrapperStyle?: any | undefined;

  /**
   * Determines when the keyboard should stay visible after a tap.
   * - 'never' (the default), tapping outside of the focused text input when the keyboard is up dismisses the keyboard. When this happens, children won't receive the tap.
   * - 'always', the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.
   * - 'handled', the keyboard will not dismiss automatically when the tap was handled by a children, (or captured by an ancestor).
   * - false, deprecated, use 'never' instead
   * - true, deprecated, use 'always' instead
   */
  keyboardShouldPersistTaps?:
    | boolean
    | 'always'
    | 'never'
    | 'handled'
    | undefined;

  /**
   * For simplicity, data is just a plain array. If you want to use something else,
   * like an immutable list, use the underlying VirtualizedList directly.
   */
  data: ReadonlyArray<any> | null | undefined;

  /**
   * A marker property for telling the list to re-render (since it implements PureComponent).
   * If any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the `data` prop,
   * stick it here and treat it immutably.
   */
  extraData?: any;

  /**
   * `getItemLayout` is an optional optimization that lets us skip measurement of dynamic
   * content if you know the height of items a priori. getItemLayout is the most efficient,
   * and is easy to use if you have fixed height items, for example:
   * ```
   * getItemLayout={(data, index) => (
   *   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
   * )}
   * ```
   * Remember to include separator length (height or width) in your offset calculation if you specify
   * `ItemSeparatorComponent`.
   */
  getItemLayout?:
    | ((
        data: Array<any> | null | undefined,
        index: number,
      ) => {length: number; offset: number; index: number})
    | undefined;

  /**
   * If true, renders items next to each other horizontally instead of stacked vertically.
   */
  horizontal?: boolean | null | undefined;

  /**
   * How many items to render in the initial batch
   */
  initialNumToRender?: number | undefined;

  /**
   * Instead of starting at the top with the first item, start at initialScrollIndex
   */
  initialScrollIndex?: number | null | undefined;

  /**
   * Used to extract a unique key for a given item at the specified index. Key is used for caching
   * and as the react key to track item re-ordering. The default extractor checks `item.key`, then
   * falls back to using the index, like React does.
   */
  keyExtractor?: ((item: any, index: number) => string) | undefined;

  /**
   * Uses legacy MetroListView instead of default VirtualizedSectionList
   */
  legacyImplementation?: boolean | undefined;

  /**
   * Multiple columns can only be rendered with `horizontal={false}` and will zig-zag like a `flexWrap` layout.
   * Items should all be the same height - masonry layouts are not supported.
   */
  numColumns?: number | undefined;

  /**
   * Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
   */
  onEndReached?: ((info: {distanceFromEnd: number}) => void) | null | undefined;

  /**
   * How far from the end (in units of visible length of the list) the bottom edge of the
   * list must be from the end of the content to trigger the `onEndReached` callback.
   * Thus a value of 0.5 will trigger `onEndReached` when the end of the content is
   * within half the visible length of the list.
   */
  onEndReachedThreshold?: number | null | undefined;

  /**
   * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality.
   * Make sure to also set the refreshing prop correctly.
   */
  onRefresh?: (() => void) | null | undefined;

  /**
   * Called when the viewability of rows changes, as defined by the `viewablePercentThreshold` prop.
   */
  onViewableItemsChanged?:
    | ((info: {viewableItems: Array<any>; changed: Array<any>}) => void)
    | null
    | undefined;

  /**
   * Set this true while waiting for new data from a refresh.
   */
  refreshing?: boolean | null | undefined;

  /**
   * Takes an item from data and renders it into the list. Typical usage:
   * ```
   * _renderItem = ({item}) => (
   *   <TouchableOpacity onPress={() => this._onPress(item)}>
   *     <Text>{item.title}</Text>
   *   <TouchableOpacity/>
   * );
   * ...
   * <FlatList data={[{title: 'Title Text', key: 'item1'}]} renderItem={this._renderItem} />
   * ```
   * Provides additional metadata like `index` if you need it.
   */
  renderItem: (item: any) => JSX.Element | null | undefined;

  /**
   * See `ViewabilityHelper` for flow type and further documentation.
   */
  viewabilityConfig?: any;

  /**
   * Note: may have bugs (missing content) in some circumstances - use at your own risk.
   *
   * This may improve scroll performance for large lists.
   */
  removeClippedSubviews?: boolean | undefined;

  /**
   * Fades out the edges of the the scroll content.
   *
   * If the value is greater than 0, the fading edges will be set accordingly
   * to the current scroll direction and position,
   * indicating if there is more content to show.
   *
   * The default value is 0.
   * @platform android
   */
  fadingEdgeLength?: number | undefined;
}
