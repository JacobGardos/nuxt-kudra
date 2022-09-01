declare module "vuetify/lib" {
  import { DefineComponent } from "vue/types/v3-define-component";
  import { DataOptions, DataTableHeader } from "vuetify";

  export type GlobalComponent<Props = {}, Slots = {}> = DefineComponent<Props, { $scopedSlots: Slots }>;
  export type Slotted<T extends object | undefined = undefined> = (_: T) => any;
  export type srcObject = any;
  export type VueComponent = any;
  export type eventHandler = any;
  export type VTimestamp = any;

  export interface VAppProps {
    /**
     * Sets the DOM id on the component
     * @default 'app'
     * @see https://vuetifyjs.com/api/v-app#props-id
     */
    id?: string;
  }

  export interface VAppSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-app#slots-default
     */
    default: Slotted;
  }

  const VApp: GlobalComponent<VAppProps, VAppSlots>;

  export interface VAppBarProps {
    /**
     * Applies position: absolute to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-absolute
     */
    absolute?: boolean;
    /**
     * Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-app
     */
    app?: boolean;
    /**
     * Aligns the component towards the bottom.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-bottom
     */
    bottom?: boolean;
    /**
     * Designates that the application's `v-navigation-drawer` that is positioned on the left is below the app-bar.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-clipped-left
     */
    clippedLeft?: boolean;
    /**
     * Designates that the application's `v-navigation-drawer` that is positioned on the right is below the app-bar.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-clipped-right
     */
    clippedRight?: boolean;
    /**
     * Puts the toolbar into a collapsed state reducing its maximum width.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-collapse
     */
    collapse?: boolean;
    /**
     * Puts the app-bar into a collapsed state when scrolling.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-collapse-on-scroll
     */
    collapseOnScroll?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop).
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-dense
     */
    dense?: boolean;
    /**
     * Elevates the app-bar when scrolling.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-elevate-on-scroll
     */
    elevateOnScroll?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-elevation
     */
    elevation?: number | string;
    /**
     * Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-extended
     */
    extended?: boolean;
    /**
     * Specify an explicit height for the `extension` slot.
     * @default 48
     * @see https://vuetifyjs.com/api/v-app-bar#props-extension-height
     */
    extensionHeight?: number | string;
    /**
     * When using the **src** prop or `img` slot, will fade the image when scrolling.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-fade-img-on-scroll
     */
    fadeImgOnScroll?: boolean;
    /**
     * Applies **position: fixed** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-fixed
     */
    fixed?: boolean;
    /**
     * Removes the toolbar's box-shadow.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-flat
     */
    flat?: boolean;
    /**
     * Applies **display: inline-flex** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-floating
     */
    floating?: boolean;
    /**
     * Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-height
     */
    height?: number | string;
    /**
     * Hides the app-bar when scrolling. Will still show the `extension` slot.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-hide-on-scroll
     */
    hideOnScroll?: boolean;
    /**
     * Hides the app-bar when scrolling down and displays it when scrolling up.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-inverted-scroll
     */
    invertedScroll?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-min-width
     */
    minWidth?: number | string;
    /**
     * Removes elevation (box-shadow) and adds a *thin* border.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-outlined
     */
    outlined?: boolean;
    /**
     * Increases the height of the toolbar content to 128px.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-prominent
     */
    prominent?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Hides the app-bar when scrolling. Will **NOT** show the `extension` slot.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-scroll-off-screen
     */
    scrollOffScreen?: boolean;
    /**
     * Designates the element to target for scrolling events. Uses `window` by default.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-scroll-target
     */
    scrollTarget?: string;
    /**
     * The amount of scroll distance down before **hide-on-scroll** activates.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-scroll-threshold
     */
    scrollThreshold?: string | number;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-shaped
     */
    shaped?: boolean;
    /**
     * Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop).
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-short
     */
    short?: boolean;
    /**
     * Shrinks a **prominent** toolbar to a **dense** or **short** (default) one when scrolling.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-shrink-on-scroll
     */
    shrinkOnScroll?: boolean;
    /**
     * Image source. See `v-img` for details
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-src
     */
    src?: string | object;
    /**
     * Specify a custom tag used on the root element.
     * @default 'header'
     * @see https://vuetifyjs.com/api/v-app-bar#props-tag
     */
    tag?: string;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-app-bar#props-tile
     */
    tile?: boolean;
    /**
     * Controls whether the component is visible or hidden.
     * @default true
     * @see https://vuetifyjs.com/api/v-app-bar#props-value
     */
    value?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-app-bar#props-width
     */
    width?: number | string;
  }

  export interface VAppBarSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-app-bar#slots-default
     */
    default: Slotted;
    /**
     * Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead.
     * @see https://vuetifyjs.com/api/v-app-bar#slots-extension
     */
    extension: Slotted;
    /**
     * Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`.
     * @see https://vuetifyjs.com/api/v-app-bar#slots-img
     */
    img: Slotted<VAppBarimg>;
  }

  export interface VAppBarimg {
    /** */
    props: { height: string; src: string | srcObject };
  }

  const VAppBar: GlobalComponent<VAppBarProps, VAppBarSlots>;

  export interface VAppBarNavIconProps {}

  export interface VAppBarNavIconSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-app-bar-nav-icon#slots-default
     */
    default: Slotted;
  }

  const VAppBarNavIcon: GlobalComponent<VAppBarNavIconProps, VAppBarNavIconSlots>;

  export interface VAppBarTitleProps {}

  export interface VAppBarTitleSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-app-bar-title#slots-default
     */
    default: Slotted;
  }

  const VAppBarTitle: GlobalComponent<VAppBarTitleProps, VAppBarTitleSlots>;

  export interface VAlertProps {
    /**
     * Puts a border on the alert. Accepts **top** \| **right** \| **bottom** \| **left**.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-border
     */
    border?: string;
    /**
     * Change the default icon used for **dismissible** alerts.
     * @default '$cancel'
     * @see https://vuetifyjs.com/api/v-alert#props-close-icon
     */
    closeIcon?: string;
    /**
     * Text used for *aria-label* on **dismissible** alerts. Can also be customizing globally in [Internationalization](/customization/internationalization).
     * @default '$vuetify.close'
     * @see https://vuetifyjs.com/api/v-alert#props-close-label
     */
    closeLabel?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-color
     */
    color?: string;
    /**
     * Applies the defined **color** to the alert's border.
     * @default false
     * @see https://vuetifyjs.com/api/v-alert#props-colored-border
     */
    coloredBorder?: boolean;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-alert#props-dark
     */
    dark?: boolean;
    /**
     * Decreases component's height.
     * @default false
     * @see https://vuetifyjs.com/api/v-alert#props-dense
     */
    dense?: boolean;
    /**
     * Adds a close icon that can hide the alert.
     * @default false
     * @see https://vuetifyjs.com/api/v-alert#props-dismissible
     */
    dismissible?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-elevation
     */
    elevation?: number | string;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-height
     */
    height?: number | string;
    /**
     * Designates a specific icon.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-icon
     */
    icon?: boolean | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-alert#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-min-width
     */
    minWidth?: number | string;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-origin
     */
    origin?: string;
    /**
     * Makes the background transparent and applies a thin border.
     * @default false
     * @see https://vuetifyjs.com/api/v-alert#props-outlined
     */
    outlined?: boolean;
    /**
     * Displays a larger vertically centered icon to draw more attention.
     * @default false
     * @see https://vuetifyjs.com/api/v-alert#props-prominent
     */
    prominent?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-alert#props-shaped
     */
    shaped?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-alert#props-tag
     */
    tag?: string;
    /**
     * Applies the defined **color** to text and a low opacity background of the same.
     * @default false
     * @see https://vuetifyjs.com/api/v-alert#props-text
     */
    text?: boolean;
    /**
     * Removes the component's border-radius.
     * @default false
     * @see https://vuetifyjs.com/api/v-alert#props-tile
     */
    tile?: boolean;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-transition
     */
    transition?: string;
    /**
     * Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and has a pre-defined icon.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-type
     */
    type?: string;
    /**
     * Controls whether the component is visible or hidden.
     * @default true
     * @see https://vuetifyjs.com/api/v-alert#props-value
     */
    value?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-alert#props-width
     */
    width?: number | string;
  }

  export interface VAlertSlots {
    /**
     * Slot for icon at end of alert.
     * @see https://vuetifyjs.com/api/v-alert#slots-append
     */
    append: Slotted;
    /**
     * Slot for icon used in **dismissible** prop.
     * @see https://vuetifyjs.com/api/v-alert#slots-close
     */
    close: Slotted<VAlertclose>;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-alert#slots-default
     */
    default: Slotted;
    /**
     * Slot for icon at beginning of alert.
     * @see https://vuetifyjs.com/api/v-alert#slots-prepend
     */
    prepend: Slotted;
  }

  export interface VAlertclose {
    /** */
    toggle: Function;
  }

  const VAlert: GlobalComponent<VAlertProps, VAlertSlots>;

  export interface VAutocompleteProps {
    /**
     * Allow the menu to overflow off the screen
     * @default true
     * @see https://vuetifyjs.com/api/v-autocomplete#props-allow-overflow
     */
    allowOverflow?: boolean;
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default '$dropdown'
     * @see https://vuetifyjs.com/api/v-autocomplete#props-append-icon
     */
    appendIcon?: string;
    /**
     * Appends an icon to the outside the component's input, uses same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-append-outer-icon
     */
    appendOuterIcon?: string;
    /**
     * Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-attach
     */
    attach?: any;
    /**
     * When searching, will always highlight the first option
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-auto-select-first
     */
    autoSelectFirst?: boolean;
    /**
     * Enables autofocus
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-autofocus
     */
    autofocus?: boolean;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-background-color
     */
    backgroundColor?: string;
    /**
     * Keeps a local _unique_ copy of all items that have been passed through the **items** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-cache-items
     */
    cacheItems?: boolean;
    /**
     * Changes display of selections to chips
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-chips
     */
    chips?: boolean;
    /**
     * Applied when using **clearable** and the input is dirty
     * @default '$clear'
     * @see https://vuetifyjs.com/api/v-autocomplete#props-clear-icon
     */
    clearIcon?: string;
    /**
     * Add input clear functionality, default icon is Material Design Icons **mdi-clear**
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-clearable
     */
    clearable?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-color
     */
    color?: string;
    /**
     * Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-counter
     */
    counter?: boolean | number | string;
    /**
     * @default null
     * @see https://vuetifyjs.com/api/v-autocomplete#props-counter-value
     */
    counterValue?: Function;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-dark
     */
    dark?: boolean;
    /**
     * Adds a remove icon to selected chips
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-deletable-chips
     */
    deletableChips?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-dense
     */
    dense?: boolean;
    /**
     * Disables keyboard lookup
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-disable-lookup
     */
    disableLookup?: boolean;
    /**
     * Disables the input
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-eager
     */
    eager?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-autocomplete#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-autocomplete#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Applies the alternate filled input style
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-filled
     */
    filled?: boolean;
    /**
     * The filtering algorithm used when searching. [example](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VAutocomplete/VAutocomplete.ts#L40)
     * @default (item, queryText, itemText) => {}
     * @see https://vuetifyjs.com/api/v-autocomplete#props-filter
     */
    filter?: Function;
    /**
     * Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-flat
     */
    flat?: boolean;
    /**
     * Designates input type as full-width
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-full-width
     */
    fullWidth?: boolean;
    /**
     * Sets the height of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-height
     */
    height?: number | string;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-hide-no-data
     */
    hideNoData?: boolean;
    /**
     * Do not display in the select menu items that are already selected
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-hide-selected
     */
    hideSelected?: boolean;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-id
     */
    id?: string;
    /**
     * Sets color of selected items
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-autocomplete#props-item-color
     */
    itemColor?: string;
    /**
     * Set property of **items**'s disabled value
     * @default disabled
     * @see https://vuetifyjs.com/api/v-autocomplete#props-item-disabled
     */
    itemDisabled?: string | any[] | Function;
    /**
     * Set property of **items**'s text value
     * @default text
     * @see https://vuetifyjs.com/api/v-autocomplete#props-item-text
     */
    itemText?: string | any[] | Function;
    /**
     * Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479)
     * @default value
     * @see https://vuetifyjs.com/api/v-autocomplete#props-item-value
     */
    itemValue?: string | any[] | Function;
    /**
     * Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable.
     * @default []
     * @see https://vuetifyjs.com/api/v-autocomplete#props-items
     */
    items?: any[];
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-autocomplete#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-light
     */
    light?: boolean;
    /**
     * Specifies the height of the loader
     * @default 2
     * @see https://vuetifyjs.com/api/v-autocomplete#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-loading
     */
    loading?: boolean | string;
    /**
     * Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"`
     * @default {
     *   closeOnClick: false,
     *   closeOnContentClick: false,
     *   disableKeys: true,
     *   openOnClick: false,
     *   maxHeight: 304,
     *   offsetY: true,
     *   offsetOverflow: true,
     *   transition: false
     * }
     * @see https://vuetifyjs.com/api/v-autocomplete#props-menu-props
     */
    menuProps?: string | any[] | object;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-autocomplete#props-messages
     */
    messages?: string | any[];
    /**
     * Changes select to multiple. Accepts array for value
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-multiple
     */
    multiple?: boolean;
    /**
     * Display text when there is no data
     * @default '$vuetify.noDataText'
     * @see https://vuetifyjs.com/api/v-autocomplete#props-no-data-text
     */
    noDataText?: string;
    /**
     * Do not apply filtering when searching. Useful when data is being filtered server side
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-no-filter
     */
    noFilter?: boolean;
    /**
     * When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-open-on-clear
     */
    openOnClear?: boolean;
    /**
     * Applies the outlined style to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-outlined
     */
    outlined?: boolean;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Forces placeholder to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-persistent-placeholder
     */
    persistentPlaceholder?: boolean;
    /**
     * Sets the input's placeholder text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-placeholder
     */
    placeholder?: string;
    /**
     * Displays prefix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-prefix
     */
    prefix?: string;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Prepends an icon inside the component's input, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-prepend-inner-icon
     */
    prependInnerIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-readonly
     */
    readonly?: boolean;
    /**
     * Changes the selection behavior to return the object directly rather than the value specified with **item-value**
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-return-object
     */
    returnObject?: boolean;
    /**
     * Reverses the input orientation
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-reverse
     */
    reverse?: boolean;
    /**
     * Adds a border radius to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-rounded
     */
    rounded?: boolean;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-autocomplete#props-rules
     */
    rules?: any[];
    /**
     * Search value. Can be used with `.sync` modifier.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-search-input
     */
    searchInput?: string;
    /**
     * Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-shaped
     */
    shaped?: boolean;
    /**
     * Label does not move on focus/dirty
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-single-line
     */
    singleLine?: boolean;
    /**
     * Changes display of selections to chips with the **small** property
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-small-chips
     */
    smallChips?: boolean;
    /**
     * Changes the style of the input
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-solo
     */
    solo?: boolean;
    /**
     * Reduces element opacity until focused
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-solo-inverted
     */
    soloInverted?: boolean;
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-autocomplete#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Displays suffix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-autocomplete#props-suffix
     */
    suffix?: string;
    /**
     * Sets input type
     * @default 'text'
     * @see https://vuetifyjs.com/api/v-autocomplete#props-type
     */
    type?: string;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-autocomplete#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-autocomplete#props-value
     */
    value?: any;
    /**
     * The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts)
     * @default (a: any, b: any): boolean
     * @see https://vuetifyjs.com/api/v-autocomplete#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VAutocompleteSlots {
    /**
     * Adds an item inside the input and after input content
     * @see https://vuetifyjs.com/api/v-autocomplete#slots-append
     */
    append: Slotted;
    /**
     * Adds an item after menu content
     * @see https://vuetifyjs.com/api/v-autocomplete#slots-append-item
     */
    appendItem: Slotted;
    /**
     * Adds an item outside the input and after input content
     * @see https://vuetifyjs.com/api/v-autocomplete#slots-append-outer
     */
    appendOuter: Slotted;
    /** @see https://vuetifyjs.com/api/v-autocomplete#slots-counter */
    counter: Slotted<VAutocompletecounter>;
    /**
     * Define a custom item appearance
     * @see https://vuetifyjs.com/api/v-autocomplete#slots-item
     */
    item: Slotted<VAutocompleteitem>;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-autocomplete#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-autocomplete#slots-message */
    message: Slotted<VAutocompletemessage>;
    /** @see https://vuetifyjs.com/api/v-autocomplete#slots-no-data */
    noData: Slotted;
    /**
     * Adds an item outside the input and before input content
     * @see https://vuetifyjs.com/api/v-autocomplete#slots-prepend
     */
    prepend: Slotted;
    /**
     * Adds an item inside the input and before input content
     * @see https://vuetifyjs.com/api/v-autocomplete#slots-prepend-inner
     */
    prependInner: Slotted;
    /**
     * Adds an item before menu content
     * @see https://vuetifyjs.com/api/v-autocomplete#slots-prepend-item
     */
    prependItem: Slotted;
    /**
     * Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)
     * @see https://vuetifyjs.com/api/v-autocomplete#slots-progress
     */
    progress: Slotted;
    /**
     * Define a custom selection appearance
     * @see https://vuetifyjs.com/api/v-autocomplete#slots-selection
     */
    selection: Slotted<VAutocompleteselection>;
  }

  export interface VAutocompletecounter {
    /** */
    props: {
      dark: boolean;
      light: boolean;
      max: string | number;
      value: string;
    };
  }

  export interface VAutocompleteitem {
    /** */
    parent: VueComponent;
    /** */
    item: object;
    /** */
    on: object;
    /** */
    attrs: object; // Only needed when providing your own v-list-item;
  }

  export interface VAutocompletemessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  export interface VAutocompleteselection {
    /** */
    parent: VueComponent;
    /** */
    item: object;
    /** */
    index: number;
    /** */
    select: Function;
    /** */
    selected: boolean;
    /** */
    disabled: boolean;
  }

  const VAutocomplete: GlobalComponent<VAutocompleteProps, VAutocompleteSlots>;

  export interface VAvatarProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-avatar#props-color
     */
    color?: string;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-avatar#props-height
     */
    height?: number | string;
    /**
     * Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).
     * @default false
     * @see https://vuetifyjs.com/api/v-avatar#props-left
     */
    left?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-avatar#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-avatar#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-avatar#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-avatar#props-min-width
     */
    minWidth?: number | string;
    /**
     * Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).
     * @default false
     * @see https://vuetifyjs.com/api/v-avatar#props-right
     */
    right?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-avatar#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Sets the height and width of the component.
     * @default 48
     * @see https://vuetifyjs.com/api/v-avatar#props-size
     */
    size?: number | string;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-avatar#props-tile
     */
    tile?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-avatar#props-width
     */
    width?: number | string;
  }

  export interface VAvatarSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-avatar#slots-default
     */
    default: Slotted;
  }

  const VAvatar: GlobalComponent<VAvatarProps, VAvatarSlots>;

  export interface VBadgeProps {
    /**
     * Removes badge padding for the use of the `v-avatar` in the **badge** slot.
     * @default false
     * @see https://vuetifyjs.com/api/v-badge#props-avatar
     */
    avatar?: boolean;
    /**
     * Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property.
     * @default false
     * @see https://vuetifyjs.com/api/v-badge#props-bordered
     */
    bordered?: boolean;
    /**
     * Aligns the component towards the bottom.
     * @default false
     * @see https://vuetifyjs.com/api/v-badge#props-bottom
     */
    bottom?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-badge#props-color
     */
    color?: string;
    /**
     * Any content you want injected as text into the badge.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-badge#props-content
     */
    content?: any;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-badge#props-dark
     */
    dark?: boolean;
    /**
     * Reduce the size of the badge and hide its contents
     * @default false
     * @see https://vuetifyjs.com/api/v-badge#props-dot
     */
    dot?: boolean;
    /**
     * Designates a specific icon used in the badge.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-badge#props-icon
     */
    icon?: string;
    /**
     * Moves the badge to be inline with the wrapping element. Supports the usage of the **left** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-badge#props-inline
     */
    inline?: boolean;
    /**
     * The **aria-label** used for the badge
     * @default '$vuetify.badge'
     * @see https://vuetifyjs.com/api/v-badge#props-label
     */
    label?: string;
    /**
     * Aligns the component towards the left.
     * @default false
     * @see https://vuetifyjs.com/api/v-badge#props-left
     */
    left?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-badge#props-light
     */
    light?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-badge#props-mode
     */
    mode?: string;
    /**
     * Offset the badge on the x-axis.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-badge#props-offset-x
     */
    offsetX?: number | string;
    /**
     * Offset the badge on the y-axis.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-badge#props-offset-y
     */
    offsetY?: number | string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-badge#props-origin
     */
    origin?: string;
    /**
     * Overlaps the slotted content on top of the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-badge#props-overlap
     */
    overlap?: boolean;
    /**
     * Removes the component's border-radius.
     * @default false
     * @see https://vuetifyjs.com/api/v-badge#props-tile
     */
    tile?: boolean;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default 'scale-rotate-transition'
     * @see https://vuetifyjs.com/api/v-badge#props-transition
     */
    transition?: string;
    /**
     * Controls whether the component is visible or hidden.
     * @default true
     * @see https://vuetifyjs.com/api/v-badge#props-value
     */
    value?: any;
  }

  export interface VBadgeSlots {
    /**
     * The slot used for the badge's content.
     * @see https://vuetifyjs.com/api/v-badge#slots-badge
     */
    badge: Slotted;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-badge#slots-default
     */
    default: Slotted;
  }

  const VBadge: GlobalComponent<VBadgeProps, VBadgeSlots>;

  export interface VBannerProps {
    /**
     * When used inside of `v-main`, will calculate top based upon application `v-toolbar` and `v-system-bar`.
     * @default false
     * @see https://vuetifyjs.com/api/v-banner#props-app
     */
    app?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-banner#props-dark
     */
    dark?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-elevation
     */
    elevation?: number | string;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-height
     */
    height?: number | string;
    /**
     * Designates a specific icon.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-icon
     */
    icon?: string;
    /**
     * Designates a specific icon color.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-icon-color
     */
    iconColor?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-banner#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-min-width
     */
    minWidth?: number | string;
    /**
     * Sets the designated mobile breakpoint for the component.
     * @see https://vuetifyjs.com/api/v-banner#props-mobile-breakpoint
     */
    mobileBreakpoint?: number | string;
    /**
     * Removes elevation (box-shadow) and adds a *thin* border.
     * @default false
     * @see https://vuetifyjs.com/api/v-banner#props-outlined
     */
    outlined?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-banner#props-shaped
     */
    shaped?: boolean;
    /**
     * Forces the banner onto a single line.
     * @default false
     * @see https://vuetifyjs.com/api/v-banner#props-single-line
     */
    singleLine?: boolean;
    /**
     * Applies **position: sticky** to the component (**Evergreen browsers only**). You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
     * @default false
     * @see https://vuetifyjs.com/api/v-banner#props-sticky
     */
    sticky?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-banner#props-tag
     */
    tag?: string;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-banner#props-tile
     */
    tile?: boolean;
    /**
     * Controls whether the component is visible or hidden.
     * @default true
     * @see https://vuetifyjs.com/api/v-banner#props-value
     */
    value?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-banner#props-width
     */
    width?: number | string;
  }

  export interface VBannerSlots {
    /**
     * The slot used for the action's content such as a [v-btn](/components/buttons). The **dismiss** function in this slots scope, when invoked, will close the banner.
     * @see https://vuetifyjs.com/api/v-banner#slots-actions
     */
    actions: Slotted<VBanneractions>;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-banner#slots-default
     */
    default: Slotted;
    /**
     * The slot used for the icon's content.
     * @see https://vuetifyjs.com/api/v-banner#slots-icon
     */
    icon: Slotted;
  }

  export interface VBanneractions {
    /** */
    dismiss(): void;
  }

  const VBanner: GlobalComponent<VBannerProps, VBannerSlots>;

  export interface VBottomNavigationProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-absolute
     */
    absolute?: boolean;
    /**
     * The class applied to a [v-btn](/components/buttons) when activated.
     * @default 'v-btn--active'
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-active-class
     */
    activeClass?: string;
    /**
     * Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-app
     */
    app?: boolean;
    /**
     * Changes the background-color for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-background-color
     */
    backgroundColor?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-dark
     */
    dark?: boolean;
    /**
     * Applies **position: fixed** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-fixed
     */
    fixed?: boolean;
    /**
     * Force [v-btn](/components/buttons)s to take up all available space.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-grow
     */
    grow?: boolean;
    /**
     * Sets the height for the component.
     * @default 56
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-height
     */
    height?: number | string;
    /**
     * Will transition the navigation off screen when scrolling up.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-hide-on-scroll
     */
    hideOnScroll?: boolean;
    /**
     * Uses an alternative horizontal styling for [v-btn](/components/buttons).
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-horizontal
     */
    horizontal?: boolean;
    /**
     * Controls whether the component is visible or hidden. Supports the **.sync** modifier.
     * @default true
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-input-value
     */
    inputValue?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-light
     */
    light?: boolean;
    /**
     * Forces a value to always be selected (if available).
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-mandatory
     */
    mandatory?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-min-width
     */
    minWidth?: number | string;
    /**
     * Designates the element to target for scrolling events. Uses `window` by default.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-scroll-target
     */
    scrollTarget?: string;
    /**
     * The amount of scroll distance down before **hide-on-scroll** activates.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-scroll-threshold
     */
    scrollThreshold?: string | number;
    /**
     * Hides text of [v-btn](/components/buttons)s when they are not active.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-shift
     */
    shift?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-tag
     */
    tag?: string;
    /**
     * Holds the value of the currently active [v-btn](/components/buttons). If the button has no value supplied, its index will be used instead..
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-value
     */
    value?: any;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-navigation#props-width
     */
    width?: number | string;
  }

  export interface VBottomNavigationSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-bottom-navigation#slots-default
     */
    default: Slotted;
  }

  const VBottomNavigation: GlobalComponent<VBottomNavigationProps, VBottomNavigationSlots>;

  export interface VBottomSheetProps {
    /**
     * Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-activator
     */
    activator?: any;
    /**
     * Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-attach
     */
    attach?: any;
    /**
     * Milliseconds to wait before closing component.
     * @default 0
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-close-delay
     */
    closeDelay?: number | string;
    /**
     * Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-content-class
     */
    contentClass?: string;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-dark
     */
    dark?: boolean;
    /**
     * Disables the ability to open the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-eager
     */
    eager?: boolean;
    /**
     * Changes layout for fullscreen display.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-fullscreen
     */
    fullscreen?: boolean;
    /**
     * Hides the display of the overlay.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-hide-overlay
     */
    hideOverlay?: boolean;
    /**
     * Reduces the sheet content maximum width to 70%.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-inset
     */
    inset?: boolean;
    /**
     * Detaches the menu content inside of the component as opposed to the document.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-internal-activator
     */
    internalActivator?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-max-width
     */
    maxWidth?: string | number;
    /**
     * Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-no-click-animation
     */
    noClickAnimation?: boolean;
    /**
     * Milliseconds to wait before opening component.
     * @default 0
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-open-delay
     */
    openDelay?: number | string;
    /**
     * @default true
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-open-on-click
     */
    openOnClick?: boolean;
    /**
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-open-on-focus
     */
    openOnFocus?: boolean;
    /**
     * Designates whether component should activate when its activator is hovered.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-open-on-hover
     */
    openOnHover?: boolean;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'center center'
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-origin
     */
    origin?: string;
    /**
     * Sets the overlay color.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-overlay-color
     */
    overlayColor?: string;
    /**
     * Sets the overlay opacity.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-overlay-opacity
     */
    overlayOpacity?: number | string;
    /**
     * Clicking outside of the element or pressing **esc** key will not deactivate it.
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-persistent
     */
    persistent?: boolean;
    /**
     * Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard.
     * @default true
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-retain-focus
     */
    retainFocus?: boolean;
    /**
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-return-value
     */
    returnValue?: any;
    /**
     * When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable).
     * @default false
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-scrollable
     */
    scrollable?: boolean;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default 'bottom-sheet-transition'
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-transition
     */
    transition?: string;
    /**
     * Controls whether the component is visible or hidden.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-value
     */
    value?: any;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-bottom-sheet#props-width
     */
    width?: string | number;
  }

  export interface VBottomSheetSlots {
    /**
     * When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation
     * @see https://vuetifyjs.com/api/v-bottom-sheet#slots-activator
     */
    activator: Slotted<VBottomSheetactivator>;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-bottom-sheet#slots-default
     */
    default: Slotted;
  }

  export interface VBottomSheetactivator {
    /** */
    on: { [eventName: string]: eventHandler };
    /** */
    value: boolean;
  }

  const VBottomSheet: GlobalComponent<VBottomSheetProps, VBottomSheetSlots>;

  export interface VBreadcrumbsProps {
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs#props-dark
     */
    dark?: boolean;
    /**
     * Specifies the dividing character between items.
     * @default '/'
     * @see https://vuetifyjs.com/api/v-breadcrumbs#props-divider
     */
    divider?: string;
    /**
     * An array of objects for each breadcrumb.
     * @default []
     * @see https://vuetifyjs.com/api/v-breadcrumbs#props-items
     */
    items?: any[];
    /**
     * Increase the font-size of the breadcrumb item text to 16px (14px default).
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs#props-large
     */
    large?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs#props-light
     */
    light?: boolean;
  }

  export interface VBreadcrumbsSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-breadcrumbs#slots-default
     */
    default: Slotted;
    /**
     * The slot used for dividers.
     * @see https://vuetifyjs.com/api/v-breadcrumbs#slots-divider
     */
    divider: Slotted;
    /**
     * The slot used to override default `v-breadcrumbs-item` behavior when using the **items** prop.
     * @see https://vuetifyjs.com/api/v-breadcrumbs#slots-item
     */
    item: Slotted<VBreadcrumbsitem>;
  }

  export interface VBreadcrumbsitem {
    /** */
    item: any[];
  }

  const VBreadcrumbs: GlobalComponent<VBreadcrumbsProps, VBreadcrumbsSlots>;

  export interface VBreadcrumbsItemProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @default 'v-breadcrumbs__item--disabled'
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-active-class
     */
    activeClass?: string;
    /**
     * Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-append
     */
    append?: boolean;
    /**
     * Removes the ability to click or target the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-disabled
     */
    disabled?: boolean;
    /**
     * Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-exact
     */
    exact?: boolean;
    /**
     * Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-exact-active-class
     */
    exactActiveClass?: string;
    /**
     * Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-exact-path
     */
    exactPath?: boolean;
    /**
     * Designates the component as anchor and applies the **href** attribute.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-href
     */
    href?: string | object;
    /**
     * Designates that the component is a link. This is automatic when using the **href** or **to** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-link
     */
    link?: boolean;
    /**
     * Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-nuxt
     */
    nuxt?: boolean;
    /**
     * Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-replace
     */
    replace?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default false
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Specify a custom tag used on the root element.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-tag
     */
    tag?: string;
    /**
     * Designates the target attribute. This should only be applied when using the **href** prop.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-target
     */
    target?: string;
    /**
     * Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#props-to
     */
    to?: string | object;
  }

  export interface VBreadcrumbsItemSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-breadcrumbs-item#slots-default
     */
    default: Slotted;
  }

  const VBreadcrumbsItem: GlobalComponent<VBreadcrumbsItemProps, VBreadcrumbsItemSlots>;

  export interface VBreadcrumbsDividerProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'li'
     * @see https://vuetifyjs.com/api/v-breadcrumbs-divider#props-tag
     */
    tag?: string;
  }

  export interface VBreadcrumbsDividerSlots {}

  const VBreadcrumbsDivider: GlobalComponent<VBreadcrumbsDividerProps, VBreadcrumbsDividerSlots>;

  export interface VBtnProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-absolute
     */
    absolute?: boolean;
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @see https://vuetifyjs.com/api/v-btn#props-active-class
     */
    activeClass?: string;
    /**
     * Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-append
     */
    append?: boolean;
    /**
     * Expands the button to 100% of available space.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-block
     */
    block?: boolean;
    /**
     * Aligns the component towards the bottom.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-bottom
     */
    bottom?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-dark
     */
    dark?: boolean;
    /**
     * Removes the button box shadow.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-depressed
     */
    depressed?: boolean;
    /**
     * Removes the ability to click or target the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-disabled
     */
    disabled?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-elevation
     */
    elevation?: number | string;
    /**
     * Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-exact
     */
    exact?: boolean;
    /**
     * Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-exact-active-class
     */
    exactActiveClass?: string;
    /**
     * Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-exact-path
     */
    exactPath?: boolean;
    /**
     * Designates the button as a floating-action-button. Button will become _round_.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-fab
     */
    fab?: boolean;
    /**
     * Applies **position: fixed** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-fixed
     */
    fixed?: boolean;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-height
     */
    height?: number | string;
    /**
     * Designates the component as anchor and applies the **href** attribute.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-href
     */
    href?: string | object;
    /**
     * Designates the button as icon. Button will become _round_ and applies the **text** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-icon
     */
    icon?: boolean;
    /**
     * Controls the button's active state.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-input-value
     */
    inputValue?: any;
    /**
     * Makes the component large.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-large
     */
    large?: boolean;
    /**
     * Aligns the component towards the left. This should be used with the **absolute** or **fixed** props.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-left
     */
    left?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-light
     */
    light?: boolean;
    /**
     * Designates that the component is a link. This is automatic when using the **href** or **to** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-link
     */
    link?: boolean;
    /**
     * Adds a loading icon animation.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-loading
     */
    loading?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-min-width
     */
    minWidth?: number | string;
    /**
     * Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-nuxt
     */
    nuxt?: boolean;
    /**
     * Makes the background transparent and applies a thin border.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-outlined
     */
    outlined?: boolean;
    /**
     * Removes the default background change applied when hovering over the button.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-plain
     */
    plain?: boolean;
    /**
     * Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-replace
     */
    replace?: boolean;
    /**
     * Don't blur on click.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-retain-focus-on-click
     */
    retainFocusOnClick?: boolean;
    /**
     * Aligns the component towards the right. This should be used with the **absolute** or **fixed** props.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-right
     */
    right?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Applies a large border radius on the button.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-rounded
     */
    rounded?: boolean;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-shaped
     */
    shaped?: boolean;
    /**
     * Makes the component small.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-small
     */
    small?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'button'
     * @see https://vuetifyjs.com/api/v-btn#props-tag
     */
    tag?: string;
    /**
     * Designates the target attribute. This should only be applied when using the **href** prop.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-target
     */
    target?: string;
    /**
     * Makes the background transparent. When using the **color** prop, the color will be applied to the button text instead of the background.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-text
     */
    text?: boolean;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-tile
     */
    tile?: boolean;
    /**
     * Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-to
     */
    to?: string | object;
    /**
     * Aligns the content towards the top.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-top
     */
    top?: boolean;
    /**
     * Set the button's **type** attribute.
     * @default 'button'
     * @see https://vuetifyjs.com/api/v-btn#props-type
     */
    type?: string;
    /**
     * Controls whether the component is visible or hidden.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-value
     */
    value?: any;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn#props-width
     */
    width?: number | string;
    /**
     * Makes the component extra large.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-x-large
     */
    xLarge?: boolean;
    /**
     * Makes the component extra small.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn#props-x-small
     */
    xSmall?: boolean;
  }

  export interface VBtnSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-btn#slots-default
     */
    default: Slotted;
    /**
     * Custom loader.
     * @see https://vuetifyjs.com/api/v-btn#slots-loader
     */
    loader: Slotted;
  }

  const VBtn: GlobalComponent<VBtnProps, VBtnSlots>;

  export interface VBtnToggleProps {
    /**
     * The **active-class** applied to children when they are activated.
     * @default 'v-item--active'
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-active-class
     */
    activeClass?: string;
    /**
     * Changes the background-color for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-background-color
     */
    backgroundColor?: string;
    /**
     * Removes the group's border.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-borderless
     */
    borderless?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the button size and padding.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-dense
     */
    dense?: boolean;
    /**
     * Generally used in [v-toolbar](/components/toolbars) and [v-app-bar](/components/app-bars). Removes background color, border and increases space between the buttons
     * @default false
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-group
     */
    group?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-light
     */
    light?: boolean;
    /**
     * Forces a value to always be selected (if available).
     * @default false
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-mandatory
     */
    mandatory?: boolean;
    /**
     * Sets a maximum number of selections that can be made.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-max
     */
    max?: number | string;
    /**
     * Allow multiple selections. The **value** prop must be an _array_.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-multiple
     */
    multiple?: boolean;
    /**
     * Round edge buttons
     * @default false
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-rounded
     */
    rounded?: boolean;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-shaped
     */
    shaped?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-tag
     */
    tag?: string;
    /**
     * Removes the component's border-radius.
     * @default false
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-tile
     */
    tile?: boolean;
    /**
     * The designated model value for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-btn-toggle#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VBtnToggleSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-btn-toggle#slots-default
     */
    default: Slotted;
  }

  const VBtnToggle: GlobalComponent<VBtnToggleProps, VBtnToggleSlots>;

  export interface VCalendarProps {
    /**
     * Specifies what categories to display in the `category` view. This controls the order of the categories as well. If the calendar uses events any categories specified in those events not specified in this value are dynamically rendered in the view unless `category-hide-dynamic` is true.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar#props-categories
     */
    categories?: any[] | string;
    /**
     * The number of days to render in the `category` view.
     * @default 1
     * @see https://vuetifyjs.com/api/v-calendar#props-category-days
     */
    categoryDays?: number | string;
    /**
     * The category to place events in that have invalid categories. A category is invalid when it is not a string. By default events without a category are not displayed until this value is specified.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar#props-category-for-invalid
     */
    categoryForInvalid?: string;
    /**
     * Sets whether categories specified in an event should be hidden if it's not defined in `categories`.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar#props-category-hide-dynamic
     */
    categoryHideDynamic?: boolean;
    /**
     * Set whether the `category` view should show all defined `categories` even if there are no events for a category.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar#props-category-show-all
     */
    categoryShowAll?: boolean;
    /**
     * If categories is a list of objects, you can use this to determine what property to print out as the category text on the calendar. You can provide a function to do some logic or just define the prop name. It's similar to item-text on v-select
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar#props-category-text
     */
    categoryText?: string | Function;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar#props-dark
     */
    dark?: boolean;
    /**
     * Formats day of the month string that appears in a day to a specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar#props-day-format
     */
    dayFormat?: Function;
    /**
     * The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar#props-end
     */
    end?: string | number | Date;
    /**
     * Set property of *event*'s category. Instead of a property a function can be given which takes an event and returns the category.
     * @default category
     * @see https://vuetifyjs.com/api/v-calendar#props-event-category
     */
    eventCategory?: string | Function;
    /**
     * A background color for all events or a function which accepts an event object passed to the calendar to return a color.
     * @default primary
     * @see https://vuetifyjs.com/api/v-calendar#props-event-color
     */
    eventColor?: string | Function;
    /**
     * Set property of *event*'s end timestamp.
     * @default 'end'
     * @see https://vuetifyjs.com/api/v-calendar#props-event-end
     */
    eventEnd?: string;
    /**
     * The height of an event in pixels in the `month` view and at the top of the `day` views.
     * @default 20
     * @see https://vuetifyjs.com/api/v-calendar#props-event-height
     */
    eventHeight?: number;
    /**
     * Margin bottom for event
     * @default 1
     * @see https://vuetifyjs.com/api/v-calendar#props-event-margin-bottom
     */
    eventMarginBottom?: number;
    /**
     * Whether the more 'button' is displayed on a calendar with too many events in a given day. It will say something like '5 more' and when clicked generates a `click:more` event.
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar#props-event-more
     */
    eventMore?: boolean;
    /**
     * The text to display in the more 'button' given the number of hidden events.
     * @default '$vuetify.calendar.moreEvents'
     * @see https://vuetifyjs.com/api/v-calendar#props-event-more-text
     */
    eventMoreText?: string;
    /**
     * Set property of *event*'s displayed name, or a function which accepts an event object passed to the calendar as the first argument and a flag signalling whether the name is for a timed event (true) or an event over a day.
     * @default name
     * @see https://vuetifyjs.com/api/v-calendar#props-event-name
     */
    eventName?: string | Function;
    /**
     * One of `stack`, `column`, or a custom render function
     * @default stack
     * @see https://vuetifyjs.com/api/v-calendar#props-event-overlap-mode
     */
    eventOverlapMode?: string | Function;
    /**
     * A value in minutes that's used to determine whether two timed events should be placed in column beside each other or should be treated as slightly overlapping events.
     * @default 60
     * @see https://vuetifyjs.com/api/v-calendar#props-event-overlap-threshold
     */
    eventOverlapThreshold?: string | number;
    /**
     * Applies the `v-ripple` directive.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar#props-event-ripple
     */
    eventRipple?: boolean | object;
    /**
     * Set property of *event*'s start timestamp.
     * @default 'start'
     * @see https://vuetifyjs.com/api/v-calendar#props-event-start
     */
    eventStart?: string;
    /**
     * A text color for all events or a function which accepts an event object passed to the calendar to return a color.
     * @default white
     * @see https://vuetifyjs.com/api/v-calendar#props-event-text-color
     */
    eventTextColor?: string | Function;
    /**
     * If Dates or milliseconds are used as the start or end timestamp of an event, this prop can be a string to a property on the event that is truthy if the event is a timed event or a function which takes the event and returns a truthy value if the event is a timed event.
     * @default timed
     * @see https://vuetifyjs.com/api/v-calendar#props-event-timed
     */
    eventTimed?: string | Function;
    /**
     * An array of event objects with a property for a start timestamp and optionally a name and end timestamp. If an end timestamp is not given, the value of start will be used. If no name is given, you must provide an implementation for the `event` slot.
     * @default []
     * @see https://vuetifyjs.com/api/v-calendar#props-events
     */
    events?: any[];
    /**
     * The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am.
     * @default 0
     * @see https://vuetifyjs.com/api/v-calendar#props-first-interval
     */
    firstInterval?: number | string;
    /**
     * The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar#props-first-time
     */
    firstTime?: number | string | object;
    /**
     * If the header at the top of the `day` view should be visible.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar#props-hide-header
     */
    hideHeader?: boolean;
    /**
     * The number of intervals to display in the `day` view.
     * @default 24
     * @see https://vuetifyjs.com/api/v-calendar#props-interval-count
     */
    intervalCount?: number | string;
    /**
     * Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar#props-interval-format
     */
    intervalFormat?: Function;
    /**
     * The height of an interval in pixels in the `day` view.
     * @default 48
     * @see https://vuetifyjs.com/api/v-calendar#props-interval-height
     */
    intervalHeight?: number | string;
    /**
     * The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour.
     * @default 60
     * @see https://vuetifyjs.com/api/v-calendar#props-interval-minutes
     */
    intervalMinutes?: number | string;
    /**
     * Returns CSS styling to apply to the interval.
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar#props-interval-style
     */
    intervalStyle?: Function;
    /**
     * The width of the interval gutter on the left side in the `day` view.
     * @default 60
     * @see https://vuetifyjs.com/api/v-calendar#props-interval-width
     */
    intervalWidth?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar#props-light
     */
    light?: boolean;
    /**
     * The locale of the calendar.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar#props-locale
     */
    locale?: string;
    /**
     * Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4.
     * @default 0
     * @see https://vuetifyjs.com/api/v-calendar#props-locale-first-day-of-year
     */
    localeFirstDayOfYear?: string | number;
    /**
     * The maximum number of days to display in the custom calendar if an `end` day is not set.
     * @default 7
     * @see https://vuetifyjs.com/api/v-calendar#props-max-days
     */
    maxDays?: number;
    /**
     * The minimum number of weeks to display in the `month` or `week` view.
     * @default 1
     * @see https://vuetifyjs.com/api/v-calendar#props-min-weeks
     */
    minWeeks?: any;
    /**
     * Formats month string that appears in a day to specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar#props-month-format
     */
    monthFormat?: Function;
    /**
     * Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar#props-now
     */
    now?: string;
    /**
     * If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar#props-short-intervals
     */
    shortIntervals?: boolean;
    /**
     * Whether the short versions of a month should be used (Jan vs January).
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar#props-short-months
     */
    shortMonths?: boolean;
    /**
     * Whether the short versions of a weekday should be used (Mon vs Monday).
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar#props-short-weekdays
     */
    shortWeekdays?: boolean;
    /**
     * Checks if a given day and time should be displayed in the interval gutter of the `day` view.
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar#props-show-interval-label
     */
    showIntervalLabel?: Function;
    /**
     * Whether the name of the month should be displayed on the first day of the month.
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar#props-show-month-on-first
     */
    showMonthOnFirst?: boolean;
    /**
     * Whether week numbers should be displayed when using the `month` view.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar#props-show-week
     */
    showWeek?: boolean;
    /**
     * The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.
     * @default 2022-08-09
     * @see https://vuetifyjs.com/api/v-calendar#props-start
     */
    start?: string | number | Date;
    /**
     * A string which is one of `month`, `week`, `day`, `4day`, `custom-weekly`, `custom-daily`, and `category`. The custom types look at the `start` and `end` dates passed to the component as opposed to the `value`.
     * @default 'month'
     * @see https://vuetifyjs.com/api/v-calendar#props-type
     */
    type?: string;
    /**
     * A date in the format of `YYYY-MM-DD` which determines what span of time for the calendar.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar#props-value
     */
    value?: string | number | Date;
    /**
     * Formats day of the week string that appears in the header to specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar#props-weekday-format
     */
    weekdayFormat?: Function;
    /**
     * Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used.
     * @default [0,1,2,3,4,5,6]
     * @see https://vuetifyjs.com/api/v-calendar#props-weekdays
     */
    weekdays?: any[] | string;
  }

  export interface VCalendarSlots {
    /**
     * The content placed in a category header for the `category` type. The category variable is null for events with invalid (non-string) categories.
     * @see https://vuetifyjs.com/api/v-calendar#slots-category
     */
    category: Slotted<VCalendarcategory>;
    /**
     * The content that is placed in a `week` or `month` view. The day & time object is passed through this slots scope.
     * @see https://vuetifyjs.com/api/v-calendar#slots-day
     */
    day: Slotted<VCalendarday>;
    /**
     * The content that is placed in a `day` view in the scrollable interval container. The day & time object is passed through this slots scope.
     * @see https://vuetifyjs.com/api/v-calendar#slots-day-body
     */
    dayBody: Slotted<VCalendardayBody>;
    /**
     * The content that is placed in a `day` view in the top container. The day & time object is passed through this slots scope.
     * @see https://vuetifyjs.com/api/v-calendar#slots-day-header
     */
    dayHeader: Slotted<VCalendardayHeader>;
    /**
     * The content that is placed in the day of the month space in the `custom-weekly` or `month` view. The day & time object is passed through this slots scope.
     * @see https://vuetifyjs.com/api/v-calendar#slots-day-label
     */
    dayLabel: Slotted<VCalendardayLabel>;
    /**
     * The content that is placed in the day of the month space in the `week`, `day`, `4day`, or `custom-daily` view. The day & time object is passed through this slots scope.
     * @see https://vuetifyjs.com/api/v-calendar#slots-day-label-header
     */
    dayLabelHeader: Slotted<VCalendardayLabelHeader>;
    /**
     * The content that is placed in the month space in the `week` or `month` view. The day & time object is passed through this slots scope.
     * @see https://vuetifyjs.com/api/v-calendar#slots-day-month
     */
    dayMonth: Slotted<VCalendardayMonth>;
    /**
     * The content placed in an event. This ignores the `event-name` prop.
     * @see https://vuetifyjs.com/api/v-calendar#slots-event
     */
    event: Slotted<VCalendarevent>;
    /**
     * The content that is placed in the interval space in the `day` view. The day & time object is passed through this slots scope.
     * @see https://vuetifyjs.com/api/v-calendar#slots-interval
     */
    interval: Slotted<VCalendarinterval>;
  }

  export interface VCalendarcategory {
    /** */
    date: string;
    /** */
    time: string;
    /** */
    year: number;
    /** */
    month: number;
    /** */
    day: number;
    /** */
    hour: number;
    /** */
    minute: number;
    /** */
    weekday: number;
    /** */
    hasDay: boolean;
    /** */
    hasTime: boolean;
    /** */
    past: boolean;
    /** */
    present: boolean;
    /** */
    future: boolean;
    /** */
    week: [
      {
        date: string;
        time: string;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        weekday: number;
        hasDay: boolean;
        hasTime: boolean;
        past: boolean;
        present: boolean;
        future: boolean;
      }
    ];
    /** */
    category: string | null;
  }

  export interface VCalendarday {
    /** */
    outside: boolean;
    /** */
    index: number;
    /** */
    week: [
      {
        date: string;
        time: string;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        weekday: number;
        hasDay: boolean;
        hasTime: boolean;
        past: boolean;
        present: boolean;
        future: boolean;
      }
    ];
    /** */
    date: string;
    /** */
    time: string;
    /** */
    year: number;
    /** */
    month: number;
    /** */
    day: number;
    /** */
    hour: number;
    /** */
    minute: number;
    /** */
    weekday: number;
    /** */
    hasDay: boolean;
    /** */
    hasTime: boolean;
    /** */
    past: boolean;
    /** */
    present: boolean;
    /** */
    future: boolean;
  }

  export interface VCalendardayBody {
    /** */
    date: string;
    /** */
    time: string;
    /** */
    year: number;
    /** */
    month: number;
    /** */
    day: number;
    /** */
    hour: number;
    /** */
    minute: number;
    /** */
    weekday: number;
    /** */
    hasDay: boolean;
    /** */
    hasTime: boolean;
    /** */
    past: boolean;
    /** */
    present: boolean;
    /** */
    future: boolean;
    /** */
    timeToY: any;
    /** */
    timeDelta: any;
    /** */
    minutesToPixels(minutes: number): number;
    /** */
    week: [
      {
        date: string;
        time: string;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        weekday: number;
        hasDay: boolean;
        hasTime: boolean;
        past: boolean;
        present: boolean;
        future: boolean;
      }
    ];
  }

  export interface VCalendardayHeader {
    /** */
    date: string;
    /** */
    time: string;
    /** */
    year: number;
    /** */
    month: number;
    /** */
    day: number;
    /** */
    hour: number;
    /** */
    minute: number;
    /** */
    weekday: number;
    /** */
    hasDay: boolean;
    /** */
    hasTime: boolean;
    /** */
    past: boolean;
    /** */
    present: boolean;
    /** */
    future: boolean;
    /** */
    timeToY: any;
    /** */
    timeDelta: any;
    /** */
    minutesToPixels(minutes: number): number;
    /** */
    week: [
      {
        date: string;
        time: string;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        weekday: number;
        hasDay: boolean;
        hasTime: boolean;
        past: boolean;
        present: boolean;
        future: boolean;
      }
    ];
  }

  export interface VCalendardayLabel {
    /** */
    date: string;
    /** */
    time: string;
    /** */
    year: number;
    /** */
    month: number;
    /** */
    day: number;
    /** */
    hour: number;
    /** */
    minute: number;
    /** */
    weekday: number;
    /** */
    hasDay: boolean;
    /** */
    hasTime: boolean;
    /** */
    past: boolean;
    /** */
    present: boolean;
    /** */
    future: boolean;
  }

  export interface VCalendardayLabelHeader {
    /** */
    date: string;
    /** */
    time: string;
    /** */
    year: number;
    /** */
    month: number;
    /** */
    day: number;
    /** */
    hour: number;
    /** */
    minute: number;
    /** */
    weekday: number;
    /** */
    hasDay: boolean;
    /** */
    hasTime: boolean;
    /** */
    past: boolean;
    /** */
    present: boolean;
    /** */
    future: boolean;
  }

  export interface VCalendardayMonth {
    /** */
    date: string;
    /** */
    time: string;
    /** */
    year: number;
    /** */
    month: number;
    /** */
    day: number;
    /** */
    hour: number;
    /** */
    minute: number;
    /** */
    weekday: number;
    /** */
    hasDay: boolean;
    /** */
    hasTime: boolean;
    /** */
    past: boolean;
    /** */
    present: boolean;
    /** */
    future: boolean;
  }

  export interface VCalendarevent {
    /** */
    event: any;
    /** */
    eventParsed: {
      input: any;
      start: {
        date: string;
        time: string;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        weekday: number;
        hasDay: boolean;
        hasTime: boolean;
        past: boolean;
        present: boolean;
        future: boolean;
      };
      startIdentifier: number;
      startTimestampIdentifier: number;
      end: {
        date: string;
        time: string;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        weekday: number;
        hasDay: boolean;
        hasTime: boolean;
        past: boolean;
        present: boolean;
        future: boolean;
      };
      endIdentifier: number;
      endTimestampIdentifier: number;
      allDay: boolean;
      index: number;
      category: string;
    };
    /** */
    day: {
      outside: boolean;
      index: number;
      week: [
        {
          date: string;
          time: string;
          year: number;
          month: number;
          day: number;
          hour: number;
          minute: number;
          weekday: number;
          hasDay: boolean;
          hasTime: boolean;
          past: boolean;
          present: boolean;
          future: boolean;
        }
      ];
      date: string;
      time: string;
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      weekday: number;
      hasDay: boolean;
      hasTime: boolean;
      past: boolean;
      present: boolean;
      future: boolean;
    };
    /** */
    outside: boolean;
    /** */
    start: boolean;
    /** */
    end: boolean;
    /** */
    timed: boolean;
    /** */
    singleline: boolean;
    /** */
    overlapsNoon: boolean;
    /** */
    formatTime(time: VTimestamp, ampm: boolean): string;
    /** */
    timeSummary(): string;
    /** */
    eventSummary(): string;
  }

  export interface VCalendarinterval {
    /** */
    date: string;
    /** */
    time: string;
    /** */
    year: number;
    /** */
    month: number;
    /** */
    day: number;
    /** */
    hour: number;
    /** */
    minute: number;
    /** */
    weekday: number;
    /** */
    hasDay: boolean;
    /** */
    hasTime: boolean;
    /** */
    past: boolean;
    /** */
    present: boolean;
    /** */
    future: boolean;
    /** */
    timeToY: any;
    /** */
    timeDelta: any;
    /** */
    minutesToPixels(minutes: number): number;
    /** */
    week: [
      {
        date: string;
        time: string;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        weekday: number;
        hasDay: boolean;
        hasTime: boolean;
        past: boolean;
        present: boolean;
        future: boolean;
      }
    ];
  }

  const VCalendar: GlobalComponent<VCalendarProps, VCalendarSlots>;

  export interface VCalendarDailyProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-dark
     */
    dark?: boolean;
    /**
     * Formats day of the month string that appears in a day to a specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-day-format
     */
    dayFormat?: Function;
    /**
     * The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-end
     */
    end?: string | number | Date;
    /**
     * The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am.
     * @default 0
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-first-interval
     */
    firstInterval?: number | string;
    /**
     * The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-first-time
     */
    firstTime?: number | string | object;
    /**
     * If the header at the top of the `day` view should be visible.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-hide-header
     */
    hideHeader?: boolean;
    /**
     * The number of intervals to display in the `day` view.
     * @default 24
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-interval-count
     */
    intervalCount?: number | string;
    /**
     * Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-interval-format
     */
    intervalFormat?: Function;
    /**
     * The height of an interval in pixels in the `day` view.
     * @default 48
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-interval-height
     */
    intervalHeight?: number | string;
    /**
     * The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour.
     * @default 60
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-interval-minutes
     */
    intervalMinutes?: number | string;
    /**
     * Returns CSS styling to apply to the interval.
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-interval-style
     */
    intervalStyle?: Function;
    /**
     * The width of the interval gutter on the left side in the `day` view.
     * @default 60
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-interval-width
     */
    intervalWidth?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-light
     */
    light?: boolean;
    /**
     * The locale of the calendar.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-locale
     */
    locale?: string;
    /**
     * The maximum number of days to display in the custom calendar if an `end` day is not set.
     * @default 7
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-max-days
     */
    maxDays?: number;
    /**
     * Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-now
     */
    now?: string;
    /**
     * If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-short-intervals
     */
    shortIntervals?: boolean;
    /**
     * Whether the short versions of a weekday should be used (Mon vs Monday).
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-short-weekdays
     */
    shortWeekdays?: boolean;
    /**
     * Checks if a given day and time should be displayed in the interval gutter of the `day` view.
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-show-interval-label
     */
    showIntervalLabel?: Function;
    /**
     * The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.
     * @default 2022-08-09
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-start
     */
    start?: string | number | Date;
    /**
     * Formats day of the week string that appears in the header to specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-weekday-format
     */
    weekdayFormat?: Function;
    /**
     * Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used.
     * @default [0,1,2,3,4,5,6]
     * @see https://vuetifyjs.com/api/v-calendar-daily#props-weekdays
     */
    weekdays?: any[] | string;
  }

  export interface VCalendarDailySlots {}

  const VCalendarDaily: GlobalComponent<VCalendarDailyProps, VCalendarDailySlots>;

  export interface VCalendarWeeklyProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-dark
     */
    dark?: boolean;
    /**
     * Formats day of the month string that appears in a day to a specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-day-format
     */
    dayFormat?: Function;
    /**
     * The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-end
     */
    end?: string | number | Date;
    /**
     * If the header at the top of the `day` view should be visible.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-hide-header
     */
    hideHeader?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-light
     */
    light?: boolean;
    /**
     * The locale of the calendar.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-locale
     */
    locale?: string;
    /**
     * Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4.
     * @default 0
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-locale-first-day-of-year
     */
    localeFirstDayOfYear?: string | number;
    /**
     * The minimum number of weeks to display in the `month` or `week` view.
     * @default 1
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-min-weeks
     */
    minWeeks?: any;
    /**
     * Formats month string that appears in a day to specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-month-format
     */
    monthFormat?: Function;
    /**
     * Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-now
     */
    now?: string;
    /**
     * Whether the short versions of a month should be used (Jan vs January).
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-short-months
     */
    shortMonths?: boolean;
    /**
     * Whether the short versions of a weekday should be used (Mon vs Monday).
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-short-weekdays
     */
    shortWeekdays?: boolean;
    /**
     * Whether the name of the month should be displayed on the first day of the month.
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-show-month-on-first
     */
    showMonthOnFirst?: boolean;
    /**
     * Whether week numbers should be displayed when using the `month` view.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-show-week
     */
    showWeek?: boolean;
    /**
     * The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.
     * @default 2022-08-09
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-start
     */
    start?: string | number | Date;
    /**
     * Formats day of the week string that appears in the header to specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-weekday-format
     */
    weekdayFormat?: Function;
    /**
     * Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used.
     * @default [0,1,2,3,4,5,6]
     * @see https://vuetifyjs.com/api/v-calendar-weekly#props-weekdays
     */
    weekdays?: any[] | string;
  }

  export interface VCalendarWeeklySlots {}

  const VCalendarWeekly: GlobalComponent<VCalendarWeeklyProps, VCalendarWeeklySlots>;

  export interface VCalendarMonthlyProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-dark
     */
    dark?: boolean;
    /**
     * Formats day of the month string that appears in a day to a specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-day-format
     */
    dayFormat?: Function;
    /**
     * The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-end
     */
    end?: string | number | Date;
    /**
     * If the header at the top of the `day` view should be visible.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-hide-header
     */
    hideHeader?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-light
     */
    light?: boolean;
    /**
     * The locale of the calendar.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-locale
     */
    locale?: string;
    /**
     * Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4.
     * @default 0
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-locale-first-day-of-year
     */
    localeFirstDayOfYear?: string | number;
    /**
     * The minimum number of weeks to display in the `month` or `week` view.
     * @default 1
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-min-weeks
     */
    minWeeks?: any;
    /**
     * Formats month string that appears in a day to specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-month-format
     */
    monthFormat?: Function;
    /**
     * Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-now
     */
    now?: string;
    /**
     * Whether the short versions of a month should be used (Jan vs January).
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-short-months
     */
    shortMonths?: boolean;
    /**
     * Whether the short versions of a weekday should be used (Mon vs Monday).
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-short-weekdays
     */
    shortWeekdays?: boolean;
    /**
     * Whether the name of the month should be displayed on the first day of the month.
     * @default true
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-show-month-on-first
     */
    showMonthOnFirst?: boolean;
    /**
     * Whether week numbers should be displayed when using the `month` view.
     * @default false
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-show-week
     */
    showWeek?: boolean;
    /**
     * The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.
     * @default 2022-08-09
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-start
     */
    start?: string | number | Date;
    /**
     * Formats day of the week string that appears in the header to specified locale
     * @default null
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-weekday-format
     */
    weekdayFormat?: Function;
    /**
     * Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used.
     * @default [0,1,2,3,4,5,6]
     * @see https://vuetifyjs.com/api/v-calendar-monthly#props-weekdays
     */
    weekdays?: any[] | string;
  }

  export interface VCalendarMonthlySlots {}

  const VCalendarMonthly: GlobalComponent<VCalendarMonthlyProps, VCalendarMonthlySlots>;

  export interface VCardProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-active-class
     */
    activeClass?: string;
    /**
     * Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-append
     */
    append?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-dark
     */
    dark?: boolean;
    /**
     * Removes the ability to click or target the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-disabled
     */
    disabled?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-elevation
     */
    elevation?: number | string;
    /**
     * Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-exact
     */
    exact?: boolean;
    /**
     * Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-exact-active-class
     */
    exactActiveClass?: string;
    /**
     * Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-exact-path
     */
    exactPath?: boolean;
    /**
     * Removes the card's elevation.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-flat
     */
    flat?: boolean;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-height
     */
    height?: number | string;
    /**
     * Will apply an elevation of 4dp when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation).
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-hover
     */
    hover?: boolean;
    /**
     * Designates the component as anchor and applies the **href** attribute.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-href
     */
    href?: string | object;
    /**
     * Specifies an image background for the card. For more advanced implementations, it is recommended that you use the [v-img](/components/images) component. You can find a [v-img example here](/components/cards/#media-with-text).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-img
     */
    img?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-light
     */
    light?: boolean;
    /**
     * Designates that the component is a link. This is automatic when using the **href** or **to** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-link
     */
    link?: boolean;
    /**
     * Specifies the height of the loader
     * @default 4
     * @see https://vuetifyjs.com/api/v-card#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-loading
     */
    loading?: boolean | string;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-min-width
     */
    minWidth?: number | string;
    /**
     * Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-nuxt
     */
    nuxt?: boolean;
    /**
     * Removes elevation (box-shadow) and adds a *thin* border.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-outlined
     */
    outlined?: boolean;
    /**
     * Specifies a higher default elevation (8dp). You can find more information on the [elevation page](/styles/elevation).
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-raised
     */
    raised?: boolean;
    /**
     * Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-replace
     */
    replace?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-shaped
     */
    shaped?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-card#props-tag
     */
    tag?: string;
    /**
     * Designates the target attribute. This should only be applied when using the **href** prop.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-target
     */
    target?: string;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-card#props-tile
     */
    tile?: boolean;
    /**
     * Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-to
     */
    to?: string | object;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-card#props-width
     */
    width?: number | string;
  }

  export interface VCardSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-card#slots-default
     */
    default: Slotted;
    /**
     * Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)
     * @see https://vuetifyjs.com/api/v-card#slots-progress
     */
    progress: Slotted;
  }

  const VCard: GlobalComponent<VCardProps, VCardSlots>;

  export interface VCardActionsProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-card-actions#props-tag
     */
    tag?: string;
  }

  export interface VCardActionsSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-card-actions#slots-default
     */
    default: Slotted;
  }

  const VCardActions: GlobalComponent<VCardActionsProps, VCardActionsSlots>;

  export interface VCardSubtitleProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-card-subtitle#props-tag
     */
    tag?: string;
  }

  export interface VCardSubtitleSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-card-subtitle#slots-default
     */
    default: Slotted;
  }

  const VCardSubtitle: GlobalComponent<VCardSubtitleProps, VCardSubtitleSlots>;

  export interface VCardTextProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-card-text#props-tag
     */
    tag?: string;
  }

  export interface VCardTextSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-card-text#slots-default
     */
    default: Slotted;
  }

  const VCardText: GlobalComponent<VCardTextProps, VCardTextSlots>;

  export interface VCardTitleProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-card-title#props-tag
     */
    tag?: string;
  }

  export interface VCardTitleSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-card-title#slots-default
     */
    default: Slotted;
  }

  const VCardTitle: GlobalComponent<VCardTitleProps, VCardTitleSlots>;

  export interface VCarouselProps {
    /**
     * The **active-class** applied to children when they are activated.
     * @default 'v-window-item--active'
     * @see https://vuetifyjs.com/api/v-carousel#props-active-class
     */
    activeClass?: string;
    /**
     * Determines whether carousel is continuous
     * @default true
     * @see https://vuetifyjs.com/api/v-carousel#props-continuous
     */
    continuous?: boolean;
    /**
     * Determines if the carousel should cycle through images.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-cycle
     */
    cycle?: boolean;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-dark
     */
    dark?: boolean;
    /**
     * Sets icon for carousel delimiter
     * @default '$delimiter'
     * @see https://vuetifyjs.com/api/v-carousel#props-delimiter-icon
     */
    delimiterIcon?: string;
    /**
     * Sets the height for the component
     * @default 500
     * @see https://vuetifyjs.com/api/v-carousel#props-height
     */
    height?: number | string;
    /**
     * Hides the bottom delimiter background.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-hide-delimiter-background
     */
    hideDelimiterBackground?: boolean;
    /**
     * Hides the carousel's bottom delimiters.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-hide-delimiters
     */
    hideDelimiters?: boolean;
    /**
     * The duration between image cycles. Requires the **cycle** prop.
     * @default 6000
     * @see https://vuetifyjs.com/api/v-carousel#props-interval
     */
    interval?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-light
     */
    light?: boolean;
    /**
     * Forces a value to always be selected (if available).
     * @default true
     * @see https://vuetifyjs.com/api/v-carousel#props-mandatory
     */
    mandatory?: boolean;
    /**
     * Sets a maximum number of selections that can be made.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel#props-max
     */
    max?: number | string;
    /**
     * Allow multiple selections. The **value** prop must be an _array_.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-multiple
     */
    multiple?: boolean;
    /**
     * The displayed icon for forcing pagination to the next item.
     * @default $next
     * @see https://vuetifyjs.com/api/v-carousel#props-next-icon
     */
    nextIcon?: boolean | string;
    /**
     * The displayed icon for forcing pagination to the previous item.
     * @default $prev
     * @see https://vuetifyjs.com/api/v-carousel#props-prev-icon
     */
    prevIcon?: boolean | string;
    /**
     * Displays a carousel progress bar. Requires the **cycle** prop and **interval**.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-progress
     */
    progress?: boolean;
    /**
     * Applies specified color to progress bar.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel#props-progress-color
     */
    progressColor?: string;
    /**
     * Reverse the normal transition direction.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-reverse
     */
    reverse?: boolean;
    /**
     * Displays arrows for next/previous navigation.
     * @default true
     * @see https://vuetifyjs.com/api/v-carousel#props-show-arrows
     */
    showArrows?: boolean;
    /**
     * Displays navigation arrows only when the carousel is hovered over.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-show-arrows-on-hover
     */
    showArrowsOnHover?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-carousel#props-tag
     */
    tag?: string;
    /**
     * Provide a custom **left** and **right** function when swiped left or right.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel#props-touch
     */
    touch?: object;
    /**
     * Disable touch support.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-touchless
     */
    touchless?: boolean;
    /**
     * The designated model value for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-carousel#props-value-comparator
     */
    valueComparator?: Function;
    /**
     * Uses a vertical transition when changing windows.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel#props-vertical
     */
    vertical?: boolean;
    /**
     * Displays carousel delimiters vertically.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel#props-vertical-delimiters
     */
    verticalDelimiters?: string;
  }

  export interface VCarouselSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-carousel#slots-default
     */
    default: Slotted;
    /**
     * Slot displaying the arrow switching to the next item
     * @see https://vuetifyjs.com/api/v-carousel#slots-next
     */
    next: Slotted<VCarouselnext>;
    /**
     * Slot displaying the arrow switching to the previous item
     * @see https://vuetifyjs.com/api/v-carousel#slots-prev
     */
    prev: Slotted<VCarouselprev>;
  }

  export interface VCarouselnext {
    /** */
    attrs: any;
    /** */
    on: { click: eventHandler };
  }

  export interface VCarouselprev {
    /** */
    attrs: any;
    /** */
    on: { click: eventHandler };
  }

  const VCarousel: GlobalComponent<VCarouselProps, VCarouselSlots>;

  export interface VCarouselItemProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-item#props-active-class
     */
    activeClass?: string;
    /**
     * Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-item#props-append
     */
    append?: boolean;
    /**
     * Removes the ability to click or target the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-item#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-item#props-eager
     */
    eager?: boolean;
    /**
     * Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-item#props-exact
     */
    exact?: boolean;
    /**
     * Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-item#props-exact-active-class
     */
    exactActiveClass?: string;
    /**
     * Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-item#props-exact-path
     */
    exactPath?: boolean;
    /**
     * Designates the component as anchor and applies the **href** attribute.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-item#props-href
     */
    href?: string | object;
    /**
     * Designates that the component is a link. This is automatic when using the **href** or **to** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-item#props-link
     */
    link?: boolean;
    /**
     * Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-item#props-nuxt
     */
    nuxt?: boolean;
    /**
     * Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-item#props-replace
     */
    replace?: boolean;
    /**
     * Sets the reverse transition
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-item#props-reverse-transition
     */
    reverseTransition?: boolean | string;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-item#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Specify a custom tag used on the root element.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-item#props-tag
     */
    tag?: string;
    /**
     * Designates the target attribute. This should only be applied when using the **href** prop.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-item#props-target
     */
    target?: string;
    /**
     * Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-item#props-to
     */
    to?: string | object;
    /**
     * The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-item#props-transition
     */
    transition?: boolean | string;
    /**
     * The value used when the component is selected in a group. If not provided, the index will be used.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-item#props-value
     */
    value?: any;
  }

  export interface VCarouselItemSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-carousel-item#slots-default
     */
    default: Slotted;
  }

  const VCarouselItem: GlobalComponent<VCarouselItemProps, VCarouselItemSlots>;

  export interface VCheckboxProps {
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-checkbox#props-append-icon
     */
    appendIcon?: string;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-checkbox#props-background-color
     */
    backgroundColor?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-checkbox#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-dense
     */
    dense?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-disabled
     */
    disabled?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-checkbox#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-checkbox#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Sets value for falsy state
     * @default undefined
     * @see https://vuetifyjs.com/api/v-checkbox#props-false-value
     */
    falseValue?: any;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-checkbox#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-checkbox#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-checkbox#props-id
     */
    id?: string;
    /**
     * Sets an indeterminate state for the checkbox
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-indeterminate
     */
    indeterminate?: boolean;
    /**
     * The icon used when in an indeterminate state
     * @default '$checkboxIndeterminate'
     * @see https://vuetifyjs.com/api/v-checkbox#props-indeterminate-icon
     */
    indeterminateIcon?: string;
    /**
     * The **v-model** bound value
     * @default undefined
     * @see https://vuetifyjs.com/api/v-checkbox#props-input-value
     */
    inputValue?: any;
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-checkbox#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-light
     */
    light?: boolean;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-checkbox#props-messages
     */
    messages?: string | any[];
    /**
     * Changes expected model to an array
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-multiple
     */
    multiple?: boolean;
    /**
     * The icon used when inactive
     * @default '$checkboxOff'
     * @see https://vuetifyjs.com/api/v-checkbox#props-off-icon
     */
    offIcon?: string;
    /**
     * The icon used when active
     * @default '$checkboxOn'
     * @see https://vuetifyjs.com/api/v-checkbox#props-on-icon
     */
    onIcon?: string;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-checkbox#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-readonly
     */
    readonly?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default true
     * @see https://vuetifyjs.com/api/v-checkbox#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-checkbox#props-rules
     */
    rules?: any[];
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-checkbox#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Sets value for truthy state
     * @default undefined
     * @see https://vuetifyjs.com/api/v-checkbox#props-true-value
     */
    trueValue?: any;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-checkbox#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-checkbox#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-checkbox#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VCheckboxSlots {
    /**
     * Adds an item inside the input and after input content
     * @see https://vuetifyjs.com/api/v-checkbox#slots-append
     */
    append: Slotted;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-checkbox#slots-default
     */
    default: Slotted;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-checkbox#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-checkbox#slots-message */
    message: Slotted<VCheckboxmessage>;
    /**
     * Adds an item outside the input and before input content
     * @see https://vuetifyjs.com/api/v-checkbox#slots-prepend
     */
    prepend: Slotted;
  }

  export interface VCheckboxmessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  const VCheckbox: GlobalComponent<VCheckboxProps, VCheckboxSlots>;

  export interface VSimpleCheckboxProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-simple-checkbox#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-simple-checkbox#props-dark
     */
    dark?: boolean;
    /**
     * Disables simple checkbox.
     * @default false
     * @see https://vuetifyjs.com/api/v-simple-checkbox#props-disabled
     */
    disabled?: boolean;
    /**
     * Sets an indeterminate state for the simple checkbox.
     * @default false
     * @see https://vuetifyjs.com/api/v-simple-checkbox#props-indeterminate
     */
    indeterminate?: boolean;
    /**
     * The icon used when in an indeterminate state.
     * @default '$checkboxIndeterminate'
     * @see https://vuetifyjs.com/api/v-simple-checkbox#props-indeterminate-icon
     */
    indeterminateIcon?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-simple-checkbox#props-light
     */
    light?: boolean;
    /**
     * The icon used when inactive.
     * @default '$checkboxOff'
     * @see https://vuetifyjs.com/api/v-simple-checkbox#props-off-icon
     */
    offIcon?: string;
    /**
     * The icon used when active.
     * @default '$checkboxOn'
     * @see https://vuetifyjs.com/api/v-simple-checkbox#props-on-icon
     */
    onIcon?: string;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default true
     * @see https://vuetifyjs.com/api/v-simple-checkbox#props-ripple
     */
    ripple?: boolean;
    /**
     * A boolean value that represents whether the simple checkbox is checked.
     * @default false
     * @see https://vuetifyjs.com/api/v-simple-checkbox#props-value
     */
    value?: boolean;
  }

  export interface VSimpleCheckboxSlots {}

  const VSimpleCheckbox: GlobalComponent<VSimpleCheckboxProps, VSimpleCheckboxSlots>;

  export interface VChipProps {
    /**
     * Determines whether the chip is visible or not.
     * @default true
     * @see https://vuetifyjs.com/api/v-chip#props-active
     */
    active?: boolean;
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @see https://vuetifyjs.com/api/v-chip#props-active-class
     */
    activeClass?: string;
    /**
     * Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-append
     */
    append?: boolean;
    /**
     * Adds remove button
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-close
     */
    close?: boolean;
    /**
     * Change the default icon used for **close** chips
     * @default '$delete'
     * @see https://vuetifyjs.com/api/v-chip#props-close-icon
     */
    closeIcon?: string;
    /**
     * Text used for *aria-label* on the close button in **close** chips. Can also be customized globally in [Internationalization](/customization/internationalization).
     * @default '$vuetify.close'
     * @see https://vuetifyjs.com/api/v-chip#props-close-label
     */
    closeLabel?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-dark
     */
    dark?: boolean;
    /**
     * Disables the chip, making it un-selectable
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-disabled
     */
    disabled?: boolean;
    /**
     * Makes the chip draggable
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-draggable
     */
    draggable?: boolean;
    /**
     * Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-exact
     */
    exact?: boolean;
    /**
     * Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip#props-exact-active-class
     */
    exactActiveClass?: string;
    /**
     * Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-exact-path
     */
    exactPath?: boolean;
    /**
     * Displays a selection icon when selected
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-filter
     */
    filter?: boolean;
    /**
     * Change the default icon used for **filter** chips
     * @default '$complete'
     * @see https://vuetifyjs.com/api/v-chip#props-filter-icon
     */
    filterIcon?: string;
    /**
     * Designates the component as anchor and applies the **href** attribute.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip#props-href
     */
    href?: string | object;
    /**
     * Controls the **active** state of the item. This is typically used to highlight the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip#props-input-value
     */
    inputValue?: any;
    /**
     * Removes circle edges
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-label
     */
    label?: boolean;
    /**
     * Makes the component large.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-large
     */
    large?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-light
     */
    light?: boolean;
    /**
     * Explicitly define the chip as a link
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-link
     */
    link?: boolean;
    /**
     * Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-nuxt
     */
    nuxt?: boolean;
    /**
     * Removes background and applies border and text color
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-outlined
     */
    outlined?: boolean;
    /**
     * Remove `v-avatar` padding
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-pill
     */
    pill?: boolean;
    /**
     * Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-replace
     */
    replace?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Makes the component small.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-small
     */
    small?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'span'
     * @see https://vuetifyjs.com/api/v-chip#props-tag
     */
    tag?: string;
    /**
     * Designates the target attribute. This should only be applied when using the **href** prop.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip#props-target
     */
    target?: string;
    /**
     * Applies a specified color to the control text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip#props-text-color
     */
    textColor?: string;
    /**
     * Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip#props-to
     */
    to?: string | object;
    /**
     * The value used when a child of a [v-chip-group](/components/chip-groups).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip#props-value
     */
    value?: any;
    /**
     * Makes the component extra large.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-x-large
     */
    xLarge?: boolean;
    /**
     * Makes the component extra small.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip#props-x-small
     */
    xSmall?: boolean;
  }

  export interface VChipSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-chip#slots-default
     */
    default: Slotted;
  }

  const VChip: GlobalComponent<VChipProps, VChipSlots>;

  export interface VChipGroupProps {
    /**
     * The **active-class** applied to children when they are activated.
     * @default 'v-slide-item--active'
     * @see https://vuetifyjs.com/api/v-chip-group#props-active-class
     */
    activeClass?: string;
    /**
     * Forces the selected chip to be centered
     * @default false
     * @see https://vuetifyjs.com/api/v-chip-group#props-center-active
     */
    centerActive?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip-group#props-color
     */
    color?: string;
    /**
     * Remove horizontal pagination and wrap items as needed
     * @default false
     * @see https://vuetifyjs.com/api/v-chip-group#props-column
     */
    column?: boolean;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-chip-group#props-dark
     */
    dark?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip-group#props-light
     */
    light?: boolean;
    /**
     * Forces a value to always be selected (if available).
     * @default false
     * @see https://vuetifyjs.com/api/v-chip-group#props-mandatory
     */
    mandatory?: boolean;
    /**
     * Sets a maximum number of selections that can be made.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip-group#props-max
     */
    max?: number | string;
    /**
     * Sets the designated mobile breakpoint for the component.
     * @see https://vuetifyjs.com/api/v-chip-group#props-mobile-breakpoint
     */
    mobileBreakpoint?: number | string;
    /**
     * Allow multiple selections. The **value** prop must be an _array_.
     * @default false
     * @see https://vuetifyjs.com/api/v-chip-group#props-multiple
     */
    multiple?: boolean;
    /**
     * Specify the icon to use for the next icon
     * @default '$next'
     * @see https://vuetifyjs.com/api/v-chip-group#props-next-icon
     */
    nextIcon?: string;
    /**
     * Specify the icon to use for the prev icon
     * @default '$prev'
     * @see https://vuetifyjs.com/api/v-chip-group#props-prev-icon
     */
    prevIcon?: string;
    /**
     * Force the display of the pagination arrows
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip-group#props-show-arrows
     */
    showArrows?: boolean | string;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-chip-group#props-tag
     */
    tag?: string;
    /**
     * The designated model value for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-chip-group#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-chip-group#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VChipGroupSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-chip-group#slots-default
     */
    default: Slotted;
  }

  const VChipGroup: GlobalComponent<VChipGroupProps, VChipGroupSlots>;

  export interface VColorPickerProps {
    /**
     * Height of canvas
     * @default 150
     * @see https://vuetifyjs.com/api/v-color-picker#props-canvas-height
     */
    canvasHeight?: string | number;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-color-picker#props-dark
     */
    dark?: boolean;
    /**
     * Disables picker
     * @default false
     * @see https://vuetifyjs.com/api/v-color-picker#props-disabled
     */
    disabled?: boolean;
    /**
     * Changes the size of the selection dot on the canvas
     * @default 10
     * @see https://vuetifyjs.com/api/v-color-picker#props-dot-size
     */
    dotSize?: number | string;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-color-picker#props-elevation
     */
    elevation?: number | string;
    /**
     * Removes elevation
     * @default false
     * @see https://vuetifyjs.com/api/v-color-picker#props-flat
     */
    flat?: boolean;
    /**
     * Hides canvas
     * @default false
     * @see https://vuetifyjs.com/api/v-color-picker#props-hide-canvas
     */
    hideCanvas?: boolean;
    /**
     * Hides inputs
     * @default false
     * @see https://vuetifyjs.com/api/v-color-picker#props-hide-inputs
     */
    hideInputs?: boolean;
    /**
     * Hides mode switch
     * @default false
     * @see https://vuetifyjs.com/api/v-color-picker#props-hide-mode-switch
     */
    hideModeSwitch?: boolean;
    /**
     * Hides sliders
     * @default false
     * @see https://vuetifyjs.com/api/v-color-picker#props-hide-sliders
     */
    hideSliders?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-color-picker#props-light
     */
    light?: boolean;
    /**
     * Sets mode of inputs. Available modes are 'rgba', 'hsla', and 'hexa'. Can be synced with the `.sync` modifier.
     * @default 'rgba'
     * @see https://vuetifyjs.com/api/v-color-picker#props-mode
     */
    mode?: string;
    /**
     * Displays color swatches
     * @default false
     * @see https://vuetifyjs.com/api/v-color-picker#props-show-swatches
     */
    showSwatches?: boolean;
    /**
     * Sets the available color swatches to select from - This prop only accepts rgba hex strings
     * @default undefined
     * @see https://vuetifyjs.com/api/v-color-picker#props-swatches
     */
    swatches?: any[];
    /**
     * Sets the maximum height of the swatches section
     * @default 150
     * @see https://vuetifyjs.com/api/v-color-picker#props-swatches-max-height
     */
    swatchesMaxHeight?: number | string;
    /**
     * Current color. This can be either a string representing a hex color, or an object representing a RGBA, HSLA, or HSVA value
     * @default undefined
     * @see https://vuetifyjs.com/api/v-color-picker#props-value
     */
    value?: object | string;
    /**
     * Sets the width of the color picker
     * @default 300
     * @see https://vuetifyjs.com/api/v-color-picker#props-width
     */
    width?: number | string;
  }

  export interface VColorPickerSlots {}

  const VColorPicker: GlobalComponent<VColorPickerProps, VColorPickerSlots>;

  export interface VContentProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'main'
     * @see https://vuetifyjs.com/api/v-content#props-tag
     */
    tag?: string;
  }

  export interface VContentSlots {}

  const VContent: GlobalComponent<VContentProps, VContentSlots>;

  export interface VComboboxProps {
    /**
     * Allow the menu to overflow off the screen
     * @default true
     * @see https://vuetifyjs.com/api/v-combobox#props-allow-overflow
     */
    allowOverflow?: boolean;
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default '$dropdown'
     * @see https://vuetifyjs.com/api/v-combobox#props-append-icon
     */
    appendIcon?: string;
    /**
     * Appends an icon to the outside the component's input, uses same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-append-outer-icon
     */
    appendOuterIcon?: string;
    /**
     * Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-attach
     */
    attach?: any;
    /**
     * When searching, will always highlight the first option
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-auto-select-first
     */
    autoSelectFirst?: boolean;
    /**
     * Enables autofocus
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-autofocus
     */
    autofocus?: boolean;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-background-color
     */
    backgroundColor?: string;
    /**
     * Keeps a local _unique_ copy of all items that have been passed through the **items** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-cache-items
     */
    cacheItems?: boolean;
    /**
     * Changes display of selections to chips
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-chips
     */
    chips?: boolean;
    /**
     * Applied when using **clearable** and the input is dirty
     * @default '$clear'
     * @see https://vuetifyjs.com/api/v-combobox#props-clear-icon
     */
    clearIcon?: string;
    /**
     * Add input clear functionality, default icon is Material Design Icons **mdi-clear**
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-clearable
     */
    clearable?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-color
     */
    color?: string;
    /**
     * Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-counter
     */
    counter?: boolean | number | string;
    /**
     * @default null
     * @see https://vuetifyjs.com/api/v-combobox#props-counter-value
     */
    counterValue?: Function;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-dark
     */
    dark?: boolean;
    /**
     * Adds a remove icon to selected chips
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-deletable-chips
     */
    deletableChips?: boolean;
    /**
     * Accepts an array of strings that will trigger a new tag when typing. Does not replace the normal Tab and Enter keys.
     * @default []
     * @see https://vuetifyjs.com/api/v-combobox#props-delimiters
     */
    delimiters?: any[];
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-dense
     */
    dense?: boolean;
    /**
     * Disables keyboard lookup
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-disable-lookup
     */
    disableLookup?: boolean;
    /**
     * Disables the input
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-eager
     */
    eager?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-combobox#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-combobox#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Applies the alternate filled input style
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-filled
     */
    filled?: boolean;
    /**
     * The filtering algorithm used when searching. [example](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VAutocomplete/VAutocomplete.ts#L40)
     * @default (item, queryText, itemText) => {}
     * @see https://vuetifyjs.com/api/v-combobox#props-filter
     */
    filter?: Function;
    /**
     * Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-flat
     */
    flat?: boolean;
    /**
     * Designates input type as full-width
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-full-width
     */
    fullWidth?: boolean;
    /**
     * Sets the height of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-height
     */
    height?: number | string;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-hide-no-data
     */
    hideNoData?: boolean;
    /**
     * Do not display in the select menu items that are already selected
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-hide-selected
     */
    hideSelected?: boolean;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-id
     */
    id?: string;
    /**
     * Sets color of selected items
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-combobox#props-item-color
     */
    itemColor?: string;
    /**
     * Set property of **items**'s disabled value
     * @default disabled
     * @see https://vuetifyjs.com/api/v-combobox#props-item-disabled
     */
    itemDisabled?: string | any[] | Function;
    /**
     * Set property of **items**'s text value
     * @default text
     * @see https://vuetifyjs.com/api/v-combobox#props-item-text
     */
    itemText?: string | any[] | Function;
    /**
     * Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479)
     * @default value
     * @see https://vuetifyjs.com/api/v-combobox#props-item-value
     */
    itemValue?: string | any[] | Function;
    /**
     * Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable.
     * @default []
     * @see https://vuetifyjs.com/api/v-combobox#props-items
     */
    items?: any[];
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-combobox#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-light
     */
    light?: boolean;
    /**
     * Specifies the height of the loader
     * @default 2
     * @see https://vuetifyjs.com/api/v-combobox#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-loading
     */
    loading?: boolean | string;
    /**
     * Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"`
     * @default {
     *   closeOnClick: false,
     *   closeOnContentClick: false,
     *   disableKeys: true,
     *   openOnClick: false,
     *   maxHeight: 304
     * }
     * @see https://vuetifyjs.com/api/v-combobox#props-menu-props
     */
    menuProps?: string | any[] | object;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-combobox#props-messages
     */
    messages?: string | any[];
    /**
     * Changes select to multiple. Accepts array for value
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-multiple
     */
    multiple?: boolean;
    /**
     * Display text when there is no data
     * @default '$vuetify.noDataText'
     * @see https://vuetifyjs.com/api/v-combobox#props-no-data-text
     */
    noDataText?: string;
    /**
     * Do not apply filtering when searching. Useful when data is being filtered server side
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-no-filter
     */
    noFilter?: boolean;
    /**
     * When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-open-on-clear
     */
    openOnClear?: boolean;
    /**
     * Applies the outlined style to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-outlined
     */
    outlined?: boolean;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Forces placeholder to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-persistent-placeholder
     */
    persistentPlaceholder?: boolean;
    /**
     * Sets the input's placeholder text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-placeholder
     */
    placeholder?: string;
    /**
     * Displays prefix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-prefix
     */
    prefix?: string;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Prepends an icon inside the component's input, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-prepend-inner-icon
     */
    prependInnerIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-readonly
     */
    readonly?: boolean;
    /**
     * Changes the selection behavior to return the object directly rather than the value specified with **item-value**
     * @default true
     * @see https://vuetifyjs.com/api/v-combobox#props-return-object
     */
    returnObject?: boolean;
    /**
     * Reverses the input orientation
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-reverse
     */
    reverse?: boolean;
    /**
     * Adds a border radius to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-rounded
     */
    rounded?: boolean;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-combobox#props-rules
     */
    rules?: any[];
    /**
     * Search value. Can be used with `.sync` modifier.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-search-input
     */
    searchInput?: string;
    /**
     * Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-shaped
     */
    shaped?: boolean;
    /**
     * Label does not move on focus/dirty
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-single-line
     */
    singleLine?: boolean;
    /**
     * Changes display of selections to chips with the **small** property
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-small-chips
     */
    smallChips?: boolean;
    /**
     * Changes the style of the input
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-solo
     */
    solo?: boolean;
    /**
     * Reduces element opacity until focused
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-solo-inverted
     */
    soloInverted?: boolean;
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-combobox#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Displays suffix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-combobox#props-suffix
     */
    suffix?: string;
    /**
     * Sets input type
     * @default 'text'
     * @see https://vuetifyjs.com/api/v-combobox#props-type
     */
    type?: string;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-combobox#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-combobox#props-value
     */
    value?: any;
    /**
     * The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts)
     * @default (a: any, b: any): boolean
     * @see https://vuetifyjs.com/api/v-combobox#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VComboboxSlots {
    /**
     * Adds an item inside the input and after input content
     * @see https://vuetifyjs.com/api/v-combobox#slots-append
     */
    append: Slotted;
    /**
     * Adds an item after menu content
     * @see https://vuetifyjs.com/api/v-combobox#slots-append-item
     */
    appendItem: Slotted;
    /**
     * Adds an item outside the input and after input content
     * @see https://vuetifyjs.com/api/v-combobox#slots-append-outer
     */
    appendOuter: Slotted;
    /** @see https://vuetifyjs.com/api/v-combobox#slots-counter */
    counter: Slotted<VComboboxcounter>;
    /**
     * Define a custom item appearance
     * @see https://vuetifyjs.com/api/v-combobox#slots-item
     */
    item: Slotted<VComboboxitem>;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-combobox#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-combobox#slots-message */
    message: Slotted<VComboboxmessage>;
    /** @see https://vuetifyjs.com/api/v-combobox#slots-no-data */
    noData: Slotted;
    /**
     * Adds an item outside the input and before input content
     * @see https://vuetifyjs.com/api/v-combobox#slots-prepend
     */
    prepend: Slotted;
    /**
     * Adds an item inside the input and before input content
     * @see https://vuetifyjs.com/api/v-combobox#slots-prepend-inner
     */
    prependInner: Slotted;
    /**
     * Adds an item before menu content
     * @see https://vuetifyjs.com/api/v-combobox#slots-prepend-item
     */
    prependItem: Slotted;
    /**
     * Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)
     * @see https://vuetifyjs.com/api/v-combobox#slots-progress
     */
    progress: Slotted;
    /**
     * Define a custom selection appearance
     * @see https://vuetifyjs.com/api/v-combobox#slots-selection
     */
    selection: Slotted<VComboboxselection>;
  }

  export interface VComboboxcounter {
    /** */
    props: {
      dark: boolean;
      light: boolean;
      max: string | number;
      value: string;
    };
  }

  export interface VComboboxitem {
    /** */
    parent: VueComponent;
    /** */
    item: object;
    /** */
    on: object;
    /** */
    attrs: object; // Only needed when providing your own v-list-item;
  }

  export interface VComboboxmessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  export interface VComboboxselection {
    /** */
    parent: VueComponent;
    /** */
    item: object;
    /** */
    index: number;
    /** */
    select: Function;
    /** */
    selected: boolean;
    /** */
    disabled: boolean;
  }

  const VCombobox: GlobalComponent<VComboboxProps, VComboboxSlots>;

  export interface VDataIteratorProps {
    /** @see https://vuetifyjs.com/api/v-data-iterator#props-checkbox-color */
    checkboxColor?: string;
    /**
     * Function to filter items
     * @default gh:searchItems
     * @see https://vuetifyjs.com/api/v-data-iterator#props-custom-filter
     */
    customFilter?: Function;
    /**
     * Function used to group items
     * @default gh:groupItems
     * @see https://vuetifyjs.com/api/v-data-iterator#props-custom-group
     */
    customGroup?: Function;
    /**
     * Function used to sort items
     * @default gh:sortItems
     * @see https://vuetifyjs.com/api/v-data-iterator#props-custom-sort
     */
    customSort?: Function;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-data-iterator#props-dark
     */
    dark?: boolean;
    /**
     * Disables filtering completely
     * @default false
     * @see https://vuetifyjs.com/api/v-data-iterator#props-disable-filtering
     */
    disableFiltering?: boolean;
    /**
     * Disables pagination completely
     * @default false
     * @see https://vuetifyjs.com/api/v-data-iterator#props-disable-pagination
     */
    disablePagination?: boolean;
    /**
     * Disables sorting completely
     * @default false
     * @see https://vuetifyjs.com/api/v-data-iterator#props-disable-sort
     */
    disableSort?: boolean;
    /**
     * Array of expanded items. Can be used with `.sync` modifier
     * @default []
     * @see https://vuetifyjs.com/api/v-data-iterator#props-expanded
     */
    expanded?: any[];
    /**
     * See the [`v-data-footer`](/api/v-data-footer) API for more information
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-iterator#props-footer-props
     */
    footerProps?: object;
    /**
     * Changes which item property should be used for grouping items. Currently only supports a single grouping in the format: `group` or `['group']`. When using an array, only the first element is considered. Can be used with `.sync` modifier
     * @default []
     * @see https://vuetifyjs.com/api/v-data-iterator#props-group-by
     */
    groupBy?: string | any[];
    /**
     * Changes which direction grouping is done. Can be used with `.sync` modifier
     * @default []
     * @see https://vuetifyjs.com/api/v-data-iterator#props-group-desc
     */
    groupDesc?: boolean | any[];
    /**
     * Hides default footer
     * @default false
     * @see https://vuetifyjs.com/api/v-data-iterator#props-hide-default-footer
     */
    hideDefaultFooter?: boolean;
    /**
     * The property on each item that is used as a unique key
     * @default 'id'
     * @see https://vuetifyjs.com/api/v-data-iterator#props-item-key
     */
    itemKey?: string;
    /**
     * The array of items to display
     * @default []
     * @see https://vuetifyjs.com/api/v-data-iterator#props-items
     */
    items?: any[];
    /**
     * Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page
     * @default 10
     * @see https://vuetifyjs.com/api/v-data-iterator#props-items-per-page
     */
    itemsPerPage?: number;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-data-iterator#props-light
     */
    light?: boolean;
    /**
     * If `true` and no items are provided, then a loading text will be shown
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-iterator#props-loading
     */
    loading?: boolean | string;
    /**
     * Text shown when `loading` is true and no items are provided
     * @default '$vuetify.dataIterator.loadingText'
     * @see https://vuetifyjs.com/api/v-data-iterator#props-loading-text
     */
    loadingText?: string;
    /**
     * Sets the locale used for sorting. This is passed into [`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) in the default `customSort` function
     * @default 'en-US'
     * @see https://vuetifyjs.com/api/v-data-iterator#props-locale
     */
    locale?: string;
    /**
     * Used to set when to toggle between regular table and mobile view
     * @default 600
     * @see https://vuetifyjs.com/api/v-data-iterator#props-mobile-breakpoint
     */
    mobileBreakpoint?: number | string;
    /**
     * If `true` then one can sort on multiple properties
     * @default false
     * @see https://vuetifyjs.com/api/v-data-iterator#props-multi-sort
     */
    multiSort?: boolean;
    /**
     * If `true` then one can not disable sorting, it will always switch between ascending and descending
     * @default false
     * @see https://vuetifyjs.com/api/v-data-iterator#props-must-sort
     */
    mustSort?: boolean;
    /**
     * Text shown when no items are provided to the component
     * @default '$vuetify.noDataText'
     * @see https://vuetifyjs.com/api/v-data-iterator#props-no-data-text
     */
    noDataText?: string;
    /**
     * Text shown when `search` prop is used and there are no results
     * @default '$vuetify.dataIterator.noResultsText'
     * @see https://vuetifyjs.com/api/v-data-iterator#props-no-results-text
     */
    noResultsText?: string;
    /**
     * @default {}
     * @see https://vuetifyjs.com/api/v-data-iterator#props-options
     */
    options?: DataOptions;
    /**
     * @default 1
     * @see https://vuetifyjs.com/api/v-data-iterator#props-page
     */
    page?: number;
    /**
     * Text input used to filter items
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-iterator#props-search
     */
    search?: string;
    /**
     * The property on each item that is used to determine if it is selectable or not
     * @default 'isSelectable'
     * @see https://vuetifyjs.com/api/v-data-iterator#props-selectable-key
     */
    selectableKey?: string;
    /**
     * Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly
     * @default -1
     * @see https://vuetifyjs.com/api/v-data-iterator#props-server-items-length
     */
    serverItemsLength?: number;
    /**
     * Changes expansion mode to single expand
     * @default false
     * @see https://vuetifyjs.com/api/v-data-iterator#props-single-expand
     */
    singleExpand?: boolean;
    /**
     * Changes selection mode to single select
     * @default false
     * @see https://vuetifyjs.com/api/v-data-iterator#props-single-select
     */
    singleSelect?: boolean;
    /**
     * Changes which item property (or properties) should be used for sort order. Can be used with `.sync` modifier
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-iterator#props-sort-by
     */
    sortBy?: string | any[];
    /**
     * Changes which direction sorting is done. Can be used with `.sync` modifier
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-iterator#props-sort-desc
     */
    sortDesc?: boolean | any[];
    /**
     * Used for controlling selected rows
     * @default []
     * @see https://vuetifyjs.com/api/v-data-iterator#props-value
     */
    value?: any[];
  }

  export interface VDataIteratorSlots {}

  const VDataIterator: GlobalComponent<VDataIteratorProps, VDataIteratorSlots>;

  export interface VDataFooterProps {
    /**
     * Disables items-per-page dropdown
     * @default false
     * @see https://vuetifyjs.com/api/v-data-footer#props-disable-items-per-page
     */
    disableItemsPerPage?: boolean;
    /**
     * Disables pagination buttons
     * @default false
     * @see https://vuetifyjs.com/api/v-data-footer#props-disable-pagination
     */
    disablePagination?: boolean;
    /**
     * First icon
     * @default '$first'
     * @see https://vuetifyjs.com/api/v-data-footer#props-first-icon
     */
    firstIcon?: string;
    /**
     * Text for 'All' option in items-per-page dropdown
     * @default '$vuetify.dataFooter.itemsPerPageAll'
     * @see https://vuetifyjs.com/api/v-data-footer#props-items-per-page-all-text
     */
    itemsPerPageAllText?: string;
    /**
     * Array of options to show in the items-per-page dropdown
     * @default [5,10,15,-1]
     * @see https://vuetifyjs.com/api/v-data-footer#props-items-per-page-options
     */
    itemsPerPageOptions?: any[];
    /**
     * Text for items-per-page dropdown
     * @default '$vuetify.dataFooter.itemsPerPageText'
     * @see https://vuetifyjs.com/api/v-data-footer#props-items-per-page-text
     */
    itemsPerPageText?: string;
    /**
     * Last icon
     * @default '$last'
     * @see https://vuetifyjs.com/api/v-data-footer#props-last-icon
     */
    lastIcon?: string;
    /**
     * Next icon
     * @default '$next'
     * @see https://vuetifyjs.com/api/v-data-footer#props-next-icon
     */
    nextIcon?: string;
    /**
     * DataOptions
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-footer#props-options
     */
    options?: object;
    /**
     * @default '$vuetify.dataFooter.pageText'
     * @see https://vuetifyjs.com/api/v-data-footer#props-page-text
     */
    pageText?: string;
    /**
     * DataPagination
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-footer#props-pagination
     */
    pagination?: object;
    /**
     * Previous icon
     * @default '$prev'
     * @see https://vuetifyjs.com/api/v-data-footer#props-prev-icon
     */
    prevIcon?: string;
    /**
     * Show current page number between prev/next icons
     * @default false
     * @see https://vuetifyjs.com/api/v-data-footer#props-show-current-page
     */
    showCurrentPage?: boolean;
    /**
     * Show first/last icons
     * @default false
     * @see https://vuetifyjs.com/api/v-data-footer#props-show-first-last-page
     */
    showFirstLastPage?: boolean;
  }

  export interface VDataFooterSlots {
    /**
     * Defines content for the items-per-page text
     * @see https://vuetifyjs.com/api/v-data-footer#slots-page-text
     */
    pageText: Slotted<VDataFooterpageText>;
    /**
     * Adds content to the empty space in the footer
     * @see https://vuetifyjs.com/api/v-data-footer#slots-prepend
     */
    prepend: Slotted;
  }

  export interface VDataFooterpageText {
    /** */
    pageStart: number;
    /** */
    pageStop: number;
    /** */
    itemsLength: number;
  }

  const VDataFooter: GlobalComponent<VDataFooterProps, VDataFooterSlots>;

  export interface VDataTableProps {
    /**
     * Enables calculation of column widths. `widths` property will be available in select scoped slots
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-calculate-widths
     */
    calculateWidths?: boolean;
    /**
     * Set the caption (using `<caption>`)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-table#props-caption
     */
    caption?: string;
    /**
     * Set the color of the checkboxes (showSelect must be used)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-table#props-checkbox-color
     */
    checkboxColor?: string;
    /**
     * Function to filter items
     * @default gh:defaultFilter
     * @see https://vuetifyjs.com/api/v-data-table#props-custom-filter
     */
    customFilter?: Function;
    /**
     * Function used to group items
     * @default gh:groupItems
     * @see https://vuetifyjs.com/api/v-data-table#props-custom-group
     */
    customGroup?: Function;
    /**
     * Function used to sort items
     * @default gh:sortItems
     * @see https://vuetifyjs.com/api/v-data-table#props-custom-sort
     */
    customSort?: Function;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-dark
     */
    dark?: boolean;
    /**
     * Decreases the height of rows
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-dense
     */
    dense?: boolean;
    /**
     * Disables filtering completely
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-disable-filtering
     */
    disableFiltering?: boolean;
    /**
     * Disables pagination completely
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-disable-pagination
     */
    disablePagination?: boolean;
    /**
     * Disables sorting completely
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-disable-sort
     */
    disableSort?: boolean;
    /**
     * Icon used for expand toggle button.
     * @default '$expand'
     * @see https://vuetifyjs.com/api/v-data-table#props-expand-icon
     */
    expandIcon?: string;
    /**
     * Array of expanded items. Can be used with `.sync` modifier
     * @default []
     * @see https://vuetifyjs.com/api/v-data-table#props-expanded
     */
    expanded?: any[];
    /**
     * Fixed header to top of table. **NOTE:** Does not work in IE11
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-fixed-header
     */
    fixedHeader?: boolean;
    /**
     * See the [`v-data-footer`](/api/v-data-footer) API for more information
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-table#props-footer-props
     */
    footerProps?: object;
    /**
     * Changes which item property should be used for grouping items. Currently only supports a single grouping in the format: `group` or `['group']`. When using an array, only the first element is considered. Can be used with `.sync` modifier
     * @default []
     * @see https://vuetifyjs.com/api/v-data-table#props-group-by
     */
    groupBy?: string | any[];
    /**
     * Changes which direction grouping is done. Can be used with `.sync` modifier
     * @default []
     * @see https://vuetifyjs.com/api/v-data-table#props-group-desc
     */
    groupDesc?: boolean | any[];
    /**
     * Pass props to the default header. See [`v-data-table-header` API](/api/v-data-table-header) for more information
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-table#props-header-props
     */
    headerProps?: object;
    /**
     * An array of objects that each describe a header column. See the example below for a definition of all properties
     * @default []
     * @see https://vuetifyjs.com/api/v-data-table#props-headers
     */
    headers?: DataTableHeader[];
    /**
     * Can be used in combination with `hide-default-header` to specify the number of columns in the table to allow expansion rows and loading bar to function properly
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-table#props-headers-length
     */
    headersLength?: number;
    /**
     * Set an explicit height of table
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-table#props-height
     */
    height?: number | string;
    /**
     * Hides default footer
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-hide-default-footer
     */
    hideDefaultFooter?: boolean;
    /**
     * Hide the default headers
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-hide-default-header
     */
    hideDefaultHeader?: boolean;
    /**
     * Property on supplied `items` that contains item's row class or function that takes an item as an argument and returns the class of corresponding row
     * @see https://vuetifyjs.com/api/v-data-table#props-item-class
     */
    itemClass?: string | Function;
    /**
     * The property on each item that is used as a unique key
     * @default 'id'
     * @see https://vuetifyjs.com/api/v-data-table#props-item-key
     */
    itemKey?: string;
    /**
     * The array of items to display
     * @default []
     * @see https://vuetifyjs.com/api/v-data-table#props-items
     */
    items?: any[];
    /**
     * Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page
     * @default 10
     * @see https://vuetifyjs.com/api/v-data-table#props-items-per-page
     */
    itemsPerPage?: number;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-light
     */
    light?: boolean;
    /**
     * Specifies the height of the loader
     * @default 4
     * @see https://vuetifyjs.com/api/v-data-table#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * If `true` and no items are provided, then a loading text will be shown
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-loading
     */
    loading?: boolean | string;
    /**
     * Text shown when `loading` is true and no items are provided
     * @default '$vuetify.dataIterator.loadingText'
     * @see https://vuetifyjs.com/api/v-data-table#props-loading-text
     */
    loadingText?: string;
    /**
     * Sets the locale used for sorting. This is passed into [`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) in the default `customSort` function
     * @default 'en-US'
     * @see https://vuetifyjs.com/api/v-data-table#props-locale
     */
    locale?: string;
    /**
     * Used to set when to toggle between regular table and mobile view
     * @default 600
     * @see https://vuetifyjs.com/api/v-data-table#props-mobile-breakpoint
     */
    mobileBreakpoint?: number | string;
    /**
     * If `true` then one can sort on multiple properties
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-multi-sort
     */
    multiSort?: boolean;
    /**
     * If `true` then one can not disable sorting, it will always switch between ascending and descending
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-must-sort
     */
    mustSort?: boolean;
    /**
     * Text shown when no items are provided to the component
     * @default '$vuetify.noDataText'
     * @see https://vuetifyjs.com/api/v-data-table#props-no-data-text
     */
    noDataText?: string;
    /**
     * Text shown when `search` prop is used and there are no results
     * @default '$vuetify.dataIterator.noResultsText'
     * @see https://vuetifyjs.com/api/v-data-table#props-no-results-text
     */
    noResultsText?: string;
    /**
     * @default {}
     * @see https://vuetifyjs.com/api/v-data-table#props-options
     */
    options?: DataOptions;
    /**
     * The current displayed page number (1-indexed)
     * @default 1
     * @see https://vuetifyjs.com/api/v-data-table#props-page
     */
    page?: number;
    /**
     * Text input used to filter items
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-table#props-search
     */
    search?: string;
    /**
     * The property on each item that is used to determine if it is selectable or not
     * @default 'isSelectable'
     * @see https://vuetifyjs.com/api/v-data-table#props-selectable-key
     */
    selectableKey?: string;
    /**
     * Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly
     * @default -1
     * @see https://vuetifyjs.com/api/v-data-table#props-server-items-length
     */
    serverItemsLength?: number;
    /**
     * Shows the expand toggle in default rows
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-show-expand
     */
    showExpand?: boolean;
    /**
     * Shows the group by toggle in the header and enables grouped rows
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-show-group-by
     */
    showGroupBy?: boolean;
    /**
     * Shows the select checkboxes in both the header and rows (if using default rows)
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-show-select
     */
    showSelect?: boolean;
    /**
     * Changes expansion mode to single expand
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-single-expand
     */
    singleExpand?: boolean;
    /**
     * Changes selection mode to single select
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table#props-single-select
     */
    singleSelect?: boolean;
    /**
     * Changes which item property (or properties) should be used for sort order. Can be used with `.sync` modifier
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-table#props-sort-by
     */
    sortBy?: string | any[];
    /**
     * Changes which direction sorting is done. Can be used with `.sync` modifier
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-table#props-sort-desc
     */
    sortDesc?: boolean | any[];
    /**
     * Used for controlling selected rows
     * @default []
     * @see https://vuetifyjs.com/api/v-data-table#props-value
     */
    value?: any[];
  }

  export interface VDataTableSlots {}

  const VDataTable: GlobalComponent<VDataTableProps, VDataTableSlots>;

  export interface VEditDialogProps {
    /**
     * Sets the default text for the cancel button when using the **large** prop
     * @default Cancel
     * @see https://vuetifyjs.com/api/v-edit-dialog#props-cancel-text
     */
    cancelText?: any;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-edit-dialog#props-dark
     */
    dark?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-edit-dialog#props-eager
     */
    eager?: boolean;
    /**
     * Attaches a submit and cancel button to the dialog
     * @default false
     * @see https://vuetifyjs.com/api/v-edit-dialog#props-large
     */
    large?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-edit-dialog#props-light
     */
    light?: boolean;
    /**
     * Clicking outside or pressing **esc** key will not dismiss the dialog
     * @default false
     * @see https://vuetifyjs.com/api/v-edit-dialog#props-persistent
     */
    persistent?: boolean;
    /**
     * @default undefined
     * @see https://vuetifyjs.com/api/v-edit-dialog#props-return-value
     */
    returnValue?: any;
    /**
     * Sets the default text for the save button when using the **large** prop
     * @default Save
     * @see https://vuetifyjs.com/api/v-edit-dialog#props-save-text
     */
    saveText?: any;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default 'slide-x-reverse-transition'
     * @see https://vuetifyjs.com/api/v-edit-dialog#props-transition
     */
    transition?: string;
  }

  export interface VEditDialogSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-edit-dialog#slots-default
     */
    default: Slotted;
    /**
     * Slot used to denote input component for v-edit-dialog
     * @see https://vuetifyjs.com/api/v-edit-dialog#slots-input
     */
    input: Slotted;
  }

  const VEditDialog: GlobalComponent<VEditDialogProps, VEditDialogSlots>;

  export interface VDataTableHeaderProps {
    /**
     * @default undefined
     * @see https://vuetifyjs.com/api/v-data-table-header#props-checkbox-color
     */
    checkboxColor?: string;
    /**
     * Toggles rendering of sort button
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table-header#props-disable-sort
     */
    disableSort?: boolean;
    /**
     * Indicates if all items in table are selected
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table-header#props-every-item
     */
    everyItem?: boolean;
    /**
     * Array of header items to display
     * @default []
     * @see https://vuetifyjs.com/api/v-data-table-header#props-headers
     */
    headers?: any[];
    /**
     * Renders mobile view of headers
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table-header#props-mobile
     */
    mobile?: boolean;
    /**
     * Options object. Identical to the one on `v-data-table`
     * @default {"page":1,"itemsPerPage":10,"sortBy":[],"sortDesc":[],"groupBy":[],"groupDesc":[],"multiSort":false,"mustSort":false}
     * @see https://vuetifyjs.com/api/v-data-table-header#props-options
     */
    options?: object;
    /**
     * Shows group by button
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table-header#props-show-group-by
     */
    showGroupBy?: boolean;
    /**
     * Toggles rendering of select-all checkbox
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table-header#props-single-select
     */
    singleSelect?: boolean;
    /**
     * Indicates if one or more items in table are selected
     * @default false
     * @see https://vuetifyjs.com/api/v-data-table-header#props-some-items
     */
    someItems?: boolean;
    /**
     * Sets the label text used by the default sort-by selector when `v-data-table` is rendering the mobile view
     * @default 'Sort by'
     * @see https://vuetifyjs.com/api/v-data-table-header#props-sort-by-text
     */
    sortByText?: string;
    /**
     * Icon used for sort button
     * @default '$sort'
     * @see https://vuetifyjs.com/api/v-data-table-header#props-sort-icon
     */
    sortIcon?: string;
  }

  export interface VDataTableHeaderSlots {}

  const VDataTableHeader: GlobalComponent<VDataTableHeaderProps, VDataTableHeaderSlots>;

  export interface VSimpleTableProps {
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-simple-table#props-dark
     */
    dark?: boolean;
    /**
     * Decreases paddings to render a dense table
     * @default false
     * @see https://vuetifyjs.com/api/v-simple-table#props-dense
     */
    dense?: boolean;
    /**
     * Sets table header to fixed mode
     * @default false
     * @see https://vuetifyjs.com/api/v-simple-table#props-fixed-header
     */
    fixedHeader?: boolean;
    /**
     * Sets the height for the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-simple-table#props-height
     */
    height?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-simple-table#props-light
     */
    light?: boolean;
  }

  export interface VSimpleTableSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-simple-table#slots-default
     */
    default: Slotted;
  }

  const VSimpleTable: GlobalComponent<VSimpleTableProps, VSimpleTableSlots>;

  export interface VDatePickerProps {
    /**
     * Determines which picker in the date or month picker is being displayed. Allowed values: `'DATE'`, `'MONTH'`, `'YEAR'`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-date-picker#props-active-picker
     */
    activePicker?: string;
    /**
     * Restricts which dates can be selected
     * @default null
     * @see https://vuetifyjs.com/api/v-date-picker#props-allowed-dates
     */
    allowedDates?: Function;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-date-picker#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-dark
     */
    dark?: boolean;
    /**
     * Allows you to customize the format of the day string that appears in the date table. Called with date (ISO 8601 **date** string) arguments.
     * @default null
     * @see https://vuetifyjs.com/api/v-date-picker#props-day-format
     */
    dayFormat?: Function;
    /**
     * Disables interaction with the picker
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-disabled
     */
    disabled?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-date-picker#props-elevation
     */
    elevation?: number | string;
    /**
     * Sets the color for event dot. It can be string (all events will have the same color) or `object` where attribute is the event date and value is boolean/color/array of colors for specified date or `function` taking date as a parameter and returning boolean/color/array of colors for that date
     * @default warning
     * @see https://vuetifyjs.com/api/v-date-picker#props-event-color
     */
    eventColor?: any[] | Function | object | string;
    /**
     * Array of dates or object defining events or colors or function returning boolean/color/array of colors
     * @default null
     * @see https://vuetifyjs.com/api/v-date-picker#props-events
     */
    events?: any[] | Function | object;
    /**
     * Sets the first day of the week, starting with 0 for Sunday.
     * @default 0
     * @see https://vuetifyjs.com/api/v-date-picker#props-first-day-of-week
     */
    firstDayOfWeek?: string | number;
    /**
     * Removes  elevation
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-flat
     */
    flat?: boolean;
    /**
     * Forces 100% width
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-full-width
     */
    fullWidth?: boolean;
    /**
     * Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color
     * @default undefined
     * @see https://vuetifyjs.com/api/v-date-picker#props-header-color
     */
    headerColor?: string;
    /**
     * Allows you to customize the format of the month string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments.
     * @default null
     * @see https://vuetifyjs.com/api/v-date-picker#props-header-date-format
     */
    headerDateFormat?: Function;
    /**
     * Orients picker horizontal
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-landscape
     */
    landscape?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-light
     */
    light?: boolean;
    /**
     * Sets the locale. Accepts a string with a BCP 47 language tag.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-date-picker#props-locale
     */
    locale?: string;
    /**
     * Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4.
     * @default 0
     * @see https://vuetifyjs.com/api/v-date-picker#props-locale-first-day-of-year
     */
    localeFirstDayOfYear?: string | number;
    /**
     * Maximum allowed date/month (ISO 8601 format)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-date-picker#props-max
     */
    max?: string;
    /**
     * Minimum allowed date/month (ISO 8601 format)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-date-picker#props-min
     */
    min?: string;
    /**
     * Formatting function used for displaying months in the months table. Called with date (ISO 8601 **date** string) arguments.
     * @default null
     * @see https://vuetifyjs.com/api/v-date-picker#props-month-format
     */
    monthFormat?: Function;
    /**
     * Allow the selection of multiple dates
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-multiple
     */
    multiple?: boolean;
    /**
     * Sets the icon for next month/year button
     * @default '$next'
     * @see https://vuetifyjs.com/api/v-date-picker#props-next-icon
     */
    nextIcon?: string;
    /**
     * @default '$vuetify.datePicker.nextMonthAriaLabel'
     * @see https://vuetifyjs.com/api/v-date-picker#props-next-month-aria-label
     */
    nextMonthAriaLabel?: string;
    /**
     * @default '$vuetify.datePicker.nextYearAriaLabel'
     * @see https://vuetifyjs.com/api/v-date-picker#props-next-year-aria-label
     */
    nextYearAriaLabel?: string;
    /**
     * Hide the picker title
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-no-title
     */
    noTitle?: boolean;
    /**
     * Displayed year/month
     * @default undefined
     * @see https://vuetifyjs.com/api/v-date-picker#props-picker-date
     */
    pickerDate?: string;
    /**
     * Sets the icon for previous month/year button
     * @default '$prev'
     * @see https://vuetifyjs.com/api/v-date-picker#props-prev-icon
     */
    prevIcon?: string;
    /**
     * @default '$vuetify.datePicker.prevMonthAriaLabel'
     * @see https://vuetifyjs.com/api/v-date-picker#props-prev-month-aria-label
     */
    prevMonthAriaLabel?: string;
    /**
     * @default '$vuetify.datePicker.prevYearAriaLabel'
     * @see https://vuetifyjs.com/api/v-date-picker#props-prev-year-aria-label
     */
    prevYearAriaLabel?: string;
    /**
     * Allow the selection of date range
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-range
     */
    range?: boolean;
    /**
     * Updates the picker model when changing months/years automatically
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-reactive
     */
    reactive?: boolean;
    /**
     * Makes the picker readonly (doesn't allow to select new date)
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-readonly
     */
    readonly?: boolean;
    /**
     * Allows changing displayed month with mouse scroll
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-scrollable
     */
    scrollable?: boolean;
    /**
     * Text used for translating the number of selected dates when using *multiple* prop. Can also be customizing globally in [Internationalization](/customization/internationalization).
     * @default '$vuetify.datePicker.itemsSelected'
     * @see https://vuetifyjs.com/api/v-date-picker#props-selected-items-text
     */
    selectedItemsText?: string;
    /**
     * Toggles visibility of days from previous and next months
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-show-adjacent-months
     */
    showAdjacentMonths?: boolean;
    /**
     * Toggles visibility of the current date/month outline or shows the provided date/month as a current
     * @default true
     * @see https://vuetifyjs.com/api/v-date-picker#props-show-current
     */
    showCurrent?: boolean | string;
    /**
     * Toggles visibility of the week numbers in the body of the calendar
     * @default false
     * @see https://vuetifyjs.com/api/v-date-picker#props-show-week
     */
    showWeek?: boolean;
    /**
     * Allows you to customize the format of the date string that appears in the title of the date picker. Called with date (ISO 8601 **date** string) arguments.
     * @default null
     * @see https://vuetifyjs.com/api/v-date-picker#props-title-date-format
     */
    titleDateFormat?: Function;
    /**
     * Determines the type of the picker - `date` for date picker, `month` for month picker
     * @default 'date'
     * @see https://vuetifyjs.com/api/v-date-picker#props-type
     */
    type?: string;
    /**
     * Date picker model (ISO 8601 format, YYYY-mm-dd or YYYY-mm)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-date-picker#props-value
     */
    value?: any[] | string;
    /**
     * Allows you to customize the format of the weekday string that appears in the body of the calendar. Called with date (ISO 8601 **date** string) arguments.
     * @default null
     * @see https://vuetifyjs.com/api/v-date-picker#props-weekday-format
     */
    weekdayFormat?: Function;
    /**
     * Width of the picker
     * @default 290
     * @see https://vuetifyjs.com/api/v-date-picker#props-width
     */
    width?: number | string;
    /**
     * Allows you to customize the format of the year string that appears in the header of the calendar. Called with date (ISO 8601 **date** string) arguments.
     * @default null
     * @see https://vuetifyjs.com/api/v-date-picker#props-year-format
     */
    yearFormat?: Function;
    /**
     * Sets the icon in the year selection button
     * @default undefined
     * @see https://vuetifyjs.com/api/v-date-picker#props-year-icon
     */
    yearIcon?: string;
  }

  export interface VDatePickerSlots {
    /**
     * Displayed below the calendar, can be used for example for adding action button (`OK` and `Cancel`)
     * @see https://vuetifyjs.com/api/v-date-picker#slots-default
     */
    default: Slotted;
  }

  const VDatePicker: GlobalComponent<VDatePickerProps, VDatePickerSlots>;

  export interface VDialogProps {
    /**
     * Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog#props-activator
     */
    activator?: any;
    /**
     * Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-attach
     */
    attach?: any;
    /**
     * Milliseconds to wait before closing component.
     * @default 0
     * @see https://vuetifyjs.com/api/v-dialog#props-close-delay
     */
    closeDelay?: number | string;
    /**
     * Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog#props-content-class
     */
    contentClass?: string;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-dark
     */
    dark?: boolean;
    /**
     * Disables the ability to open the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-eager
     */
    eager?: boolean;
    /**
     * Changes layout for fullscreen display.
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-fullscreen
     */
    fullscreen?: boolean;
    /**
     * Hides the display of the overlay.
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-hide-overlay
     */
    hideOverlay?: boolean;
    /**
     * Detaches the menu content inside of the component as opposed to the document.
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-internal-activator
     */
    internalActivator?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog#props-max-width
     */
    maxWidth?: string | number;
    /**
     * Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-no-click-animation
     */
    noClickAnimation?: boolean;
    /**
     * Milliseconds to wait before opening component.
     * @default 0
     * @see https://vuetifyjs.com/api/v-dialog#props-open-delay
     */
    openDelay?: number | string;
    /**
     * @default true
     * @see https://vuetifyjs.com/api/v-dialog#props-open-on-click
     */
    openOnClick?: boolean;
    /**
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-open-on-focus
     */
    openOnFocus?: boolean;
    /**
     * Designates whether component should activate when its activator is hovered.
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-open-on-hover
     */
    openOnHover?: boolean;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'center center'
     * @see https://vuetifyjs.com/api/v-dialog#props-origin
     */
    origin?: string;
    /**
     * Sets the overlay color.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog#props-overlay-color
     */
    overlayColor?: string;
    /**
     * Sets the overlay opacity.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog#props-overlay-opacity
     */
    overlayOpacity?: number | string;
    /**
     * Clicking outside of the element or pressing **esc** key will not deactivate it.
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-persistent
     */
    persistent?: boolean;
    /**
     * Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard.
     * @default true
     * @see https://vuetifyjs.com/api/v-dialog#props-retain-focus
     */
    retainFocus?: boolean;
    /**
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog#props-return-value
     */
    returnValue?: any;
    /**
     * When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable).
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog#props-scrollable
     */
    scrollable?: boolean;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default dialog-transition
     * @see https://vuetifyjs.com/api/v-dialog#props-transition
     */
    transition?: string | boolean;
    /**
     * Controls whether the component is visible or hidden.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog#props-value
     */
    value?: any;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog#props-width
     */
    width?: string | number;
  }

  export interface VDialogSlots {
    /**
     * When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation
     * @see https://vuetifyjs.com/api/v-dialog#slots-activator
     */
    activator: Slotted<VDialogactivator>;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-dialog#slots-default
     */
    default: Slotted;
  }

  export interface VDialogactivator {
    /** */
    on: { [eventName: string]: eventHandler };
    /** */
    value: boolean;
  }

  const VDialog: GlobalComponent<VDialogProps, VDialogSlots>;

  export interface VDividerProps {
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-divider#props-dark
     */
    dark?: boolean;
    /**
     * Adds indentation (72px) for **normal** dividers, reduces max height for **vertical**.
     * @default false
     * @see https://vuetifyjs.com/api/v-divider#props-inset
     */
    inset?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-divider#props-light
     */
    light?: boolean;
    /**
     * Displays dividers vertically
     * @default false
     * @see https://vuetifyjs.com/api/v-divider#props-vertical
     */
    vertical?: boolean;
  }

  export interface VDividerSlots {}

  const VDivider: GlobalComponent<VDividerProps, VDividerSlots>;

  export interface VExpansionPanelsProps {
    /**
     * Removes the margin around open panels
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-accordion
     */
    accordion?: boolean;
    /**
     * The **active-class** applied to children when they are activated.
     * @default 'v-item--active'
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-active-class
     */
    activeClass?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-dark
     */
    dark?: boolean;
    /**
     * Disables the entire expansion-panel
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-disabled
     */
    disabled?: boolean;
    /**
     * Removes the expansion-panel's elevation and borders
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-flat
     */
    flat?: boolean;
    /**
     * Makes the expansion-panel headers focusable
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-focusable
     */
    focusable?: boolean;
    /**
     * Applies a background-color shift on hover to expansion panel headers
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-hover
     */
    hover?: boolean;
    /**
     * Makes the expansion-panel open with a inset style
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-inset
     */
    inset?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-light
     */
    light?: boolean;
    /**
     * Forces a value to always be selected (if available).
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-mandatory
     */
    mandatory?: boolean;
    /**
     * Sets a maximum number of selections that can be made.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-max
     */
    max?: number | string;
    /**
     * Allow multiple selections. The **value** prop must be an _array_.
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-multiple
     */
    multiple?: boolean;
    /**
     * Makes the expansion-panel open with an popout style
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-popout
     */
    popout?: boolean;
    /**
     * Makes the entire expansion-panel read only.
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-readonly
     */
    readonly?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-tag
     */
    tag?: string;
    /**
     * Removes the border-radius
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-tile
     */
    tile?: boolean;
    /**
     * Controls the opened/closed state of content in the expansion-panel. Corresponds to a zero-based index of the currently opened content. If the `multiple` prop (previously `expand` in 1.5.x) is used then it is an array of numbers where each entry corresponds to the index of the opened content.  The index order is not relevant.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-expansion-panels#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VExpansionPanelsSlots {}

  const VExpansionPanels: GlobalComponent<VExpansionPanelsProps, VExpansionPanelsSlots>;

  export interface VExpansionPanelProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @see https://vuetifyjs.com/api/v-expansion-panel#props-active-class
     */
    activeClass?: string;
    /**
     * Disables the expansion-panel content
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panel#props-disabled
     */
    disabled?: boolean;
    /**
     * Makes the expansion-panel content read only.
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panel#props-readonly
     */
    readonly?: boolean;
  }

  export interface VExpansionPanelSlots {}

  const VExpansionPanel: GlobalComponent<VExpansionPanelProps, VExpansionPanelSlots>;

  export interface VExpansionPanelHeaderProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-expansion-panel-header#props-color
     */
    color?: string;
    /**
     * Removes the icon rotation animation when expanding a panel
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panel-header#props-disable-icon-rotate
     */
    disableIconRotate?: boolean;
    /**
     * Set the expand action icon
     * @default '$expand'
     * @see https://vuetifyjs.com/api/v-expansion-panel-header#props-expand-icon
     */
    expandIcon?: string;
    /**
     * Hide the expand icon in the content header
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panel-header#props-hide-actions
     */
    hideActions?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panel-header#props-ripple
     */
    ripple?: boolean | object;
  }

  export interface VExpansionPanelHeaderSlots {
    /**
     * Expansion header actions
     * @see https://vuetifyjs.com/api/v-expansion-panel-header#slots-actions
     */
    actions: Slotted;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-expansion-panel-header#slots-default
     */
    default: Slotted<VExpansionPanelHeaderdefault>;
  }

  export interface VExpansionPanelHeaderdefault {
    /** */
    open: boolean;
  }

  const VExpansionPanelHeader: GlobalComponent<VExpansionPanelHeaderProps, VExpansionPanelHeaderSlots>;

  export interface VExpansionPanelContentProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-expansion-panel-content#props-color
     */
    color?: string;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-expansion-panel-content#props-eager
     */
    eager?: boolean;
  }

  export interface VExpansionPanelContentSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-expansion-panel-content#slots-default
     */
    default: Slotted;
  }

  const VExpansionPanelContent: GlobalComponent<VExpansionPanelContentProps, VExpansionPanelContentSlots>;

  export interface VFileInputProps {
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-append-icon
     */
    appendIcon?: string;
    /**
     * Appends an icon to the outside the component's input, uses same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-append-outer-icon
     */
    appendOuterIcon?: string;
    /**
     * Enables autofocus
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-autofocus
     */
    autofocus?: boolean;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-background-color
     */
    backgroundColor?: string;
    /**
     * Changes display of selections to chips
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-chips
     */
    chips?: boolean;
    /**
     * Applied when using **clearable** and the input is dirty
     * @default '$clear'
     * @see https://vuetifyjs.com/api/v-file-input#props-clear-icon
     */
    clearIcon?: string;
    /**
     * Add input clear functionality, default icon is Material Design Icons **mdi-clear**
     * @default true
     * @see https://vuetifyjs.com/api/v-file-input#props-clearable
     */
    clearable?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-color
     */
    color?: string;
    /**
     * Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-counter
     */
    counter?: boolean | number | string;
    /**
     * The text displayed when using the **counter** and **show-size** props. Can also be customized globally on the [internationalization page](/customization/internationalization).
     * @default '$vuetify.fileInput.counterSize'
     * @see https://vuetifyjs.com/api/v-file-input#props-counter-size-string
     */
    counterSizeString?: string;
    /**
     * The text displayed when using the **counter** prop. Can also be customized globally on the [internationalization page](/customization/internationalization).
     * @default '$vuetify.fileInput.counter'
     * @see https://vuetifyjs.com/api/v-file-input#props-counter-string
     */
    counterString?: string;
    /**
     * @default null
     * @see https://vuetifyjs.com/api/v-file-input#props-counter-value
     */
    counterValue?: Function;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-dense
     */
    dense?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-disabled
     */
    disabled?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-file-input#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-file-input#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Applies the alternate filled input style
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-filled
     */
    filled?: boolean;
    /**
     * Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-flat
     */
    flat?: boolean;
    /**
     * Designates input type as full-width
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-full-width
     */
    fullWidth?: boolean;
    /**
     * Sets the height of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-height
     */
    height?: number | string;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Display the icon only without the input (file names)
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-hide-input
     */
    hideInput?: boolean;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-id
     */
    id?: string;
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-file-input#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-light
     */
    light?: boolean;
    /**
     * Specifies the height of the loader
     * @default 2
     * @see https://vuetifyjs.com/api/v-file-input#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-loading
     */
    loading?: boolean | string;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-file-input#props-messages
     */
    messages?: string | any[];
    /**
     * Adds the **multiple** attribute to the input, allowing multiple file selections.
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-multiple
     */
    multiple?: boolean;
    /**
     * Applies the outlined style to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-outlined
     */
    outlined?: boolean;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Forces placeholder to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-persistent-placeholder
     */
    persistentPlaceholder?: boolean;
    /**
     * Sets the input's placeholder text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-placeholder
     */
    placeholder?: string;
    /**
     * Displays prefix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-prefix
     */
    prefix?: string;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default '$file'
     * @see https://vuetifyjs.com/api/v-file-input#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Prepends an icon inside the component's input, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-prepend-inner-icon
     */
    prependInnerIcon?: string;
    /**
     * Reverses the input orientation
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-reverse
     */
    reverse?: boolean;
    /**
     * Adds a border radius to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-rounded
     */
    rounded?: boolean;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-file-input#props-rules
     */
    rules?: any[];
    /**
     * Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-shaped
     */
    shaped?: boolean;
    /**
     * Sets the displayed size of selected file(s). When using **true** will default to _1000_ displaying (**kB, MB, GB**) while _1024_ will display (**KiB, MiB, GiB**).
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-show-size
     */
    showSize?: boolean | number;
    /**
     * Label does not move on focus/dirty
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-single-line
     */
    singleLine?: boolean;
    /**
     * Changes display of selections to chips with the **small** property
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-small-chips
     */
    smallChips?: boolean;
    /**
     * Changes the style of the input
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-solo
     */
    solo?: boolean;
    /**
     * Reduces element opacity until focused
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-solo-inverted
     */
    soloInverted?: boolean;
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-file-input#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Displays suffix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-file-input#props-suffix
     */
    suffix?: string;
    /**
     * The length of a filename before it is truncated with ellipsis
     * @default 22
     * @see https://vuetifyjs.com/api/v-file-input#props-truncate-length
     */
    truncateLength?: number | string;
    /**
     * Sets input type
     * @default 'file'
     * @see https://vuetifyjs.com/api/v-file-input#props-type
     */
    type?: string;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-file-input#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * A single or array of [File objects](https://developer.mozilla.org/en-US/docs/Web/API/File).
     * @see https://vuetifyjs.com/api/v-file-input#props-value
     */
    value?: any;
  }

  export interface VFileInputSlots {
    /**
     * Adds an item inside the input and after input content
     * @see https://vuetifyjs.com/api/v-file-input#slots-append
     */
    append: Slotted;
    /**
     * Adds an item outside the input and after input content
     * @see https://vuetifyjs.com/api/v-file-input#slots-append-outer
     */
    appendOuter: Slotted;
    /** @see https://vuetifyjs.com/api/v-file-input#slots-counter */
    counter: Slotted<VFileInputcounter>;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-file-input#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-file-input#slots-message */
    message: Slotted<VFileInputmessage>;
    /**
     * Adds an item outside the input and before input content
     * @see https://vuetifyjs.com/api/v-file-input#slots-prepend
     */
    prepend: Slotted;
    /**
     * Adds an item inside the input and before input content
     * @see https://vuetifyjs.com/api/v-file-input#slots-prepend-inner
     */
    prependInner: Slotted;
    /**
     * Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)
     * @see https://vuetifyjs.com/api/v-file-input#slots-progress
     */
    progress: Slotted;
    /**
     * Slot for defining a custom appearance for selected item(s). Provides the current **index**, **text** (truncated) and [file](https://developer.mozilla.org/en-US/docs/Web/API/File).
     * @see https://vuetifyjs.com/api/v-file-input#slots-selection
     */
    selection: Slotted<VFileInputselection>;
  }

  export interface VFileInputcounter {
    /** */
    props: {
      dark: boolean;
      light: boolean;
      max: string | number;
      value: string;
    };
  }

  export interface VFileInputmessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  export interface VFileInputselection {
    /** */
    file: File;
    /** */
    index: number;
    /** */
    multiple: boolean;
    /** */
    text: string;
  }

  const VFileInput: GlobalComponent<VFileInputProps, VFileInputSlots>;

  export interface VFooterProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-footer#props-absolute
     */
    absolute?: boolean;
    /**
     * Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop
     * @default false
     * @see https://vuetifyjs.com/api/v-footer#props-app
     */
    app?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-footer#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-footer#props-dark
     */
    dark?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-footer#props-elevation
     */
    elevation?: number | string;
    /**
     * Applies **position: fixed** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-footer#props-fixed
     */
    fixed?: boolean;
    /**
     * Sets the height for the component.
     * @default auto
     * @see https://vuetifyjs.com/api/v-footer#props-height
     */
    height?: number | string;
    /**
     * Positions the toolbar offset from an application `v-navigation-drawer`
     * @default false
     * @see https://vuetifyjs.com/api/v-footer#props-inset
     */
    inset?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-footer#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-footer#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-footer#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-footer#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-footer#props-min-width
     */
    minWidth?: number | string;
    /**
     * Removes elevation (box-shadow) and adds a *thin* border.
     * @default false
     * @see https://vuetifyjs.com/api/v-footer#props-outlined
     */
    outlined?: boolean;
    /**
     * Remove all padding from the footer
     * @default false
     * @see https://vuetifyjs.com/api/v-footer#props-padless
     */
    padless?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-footer#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-footer#props-shaped
     */
    shaped?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'footer'
     * @see https://vuetifyjs.com/api/v-footer#props-tag
     */
    tag?: string;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-footer#props-tile
     */
    tile?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-footer#props-width
     */
    width?: number | string;
  }

  export interface VFooterSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-footer#slots-default
     */
    default: Slotted;
  }

  const VFooter: GlobalComponent<VFooterProps, VFooterSlots>;

  export interface VFormProps {
    /**
     * Puts all children inputs into a disabled state.
     * @default false
     * @see https://vuetifyjs.com/api/v-form#props-disabled
     */
    disabled?: boolean;
    /**
     * If enabled, **value** will always be _true_ unless there are visible validation errors. You can still call `validate()` to manually trigger validation
     * @default false
     * @see https://vuetifyjs.com/api/v-form#props-lazy-validation
     */
    lazyValidation?: boolean;
    /**
     * Puts all children inputs into a readonly state.
     * @default false
     * @see https://vuetifyjs.com/api/v-form#props-readonly
     */
    readonly?: boolean;
    /**
     * A boolean value representing the validity of the form.
     * @default false
     * @see https://vuetifyjs.com/api/v-form#props-value
     */
    value?: boolean;
  }

  export interface VFormSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-form#slots-default
     */
    default: Slotted;
  }

  const VForm: GlobalComponent<VFormProps, VFormSlots>;

  export interface VContainerProps {
    /**
     * Removes viewport maximum-width size breakpoints
     * @default false
     * @see https://vuetifyjs.com/api/v-container#props-fluid
     */
    fluid?: boolean;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-container#props-id
     */
    id?: string;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-container#props-tag
     */
    tag?: string;
  }

  export interface VContainerSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-container#slots-default
     */
    default: Slotted;
  }

  const VContainer: GlobalComponent<VContainerProps, VContainerSlots>;

  export interface VColProps {
    /**
     * Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are **start**, **center**, **end**, **auto**, **baseline** and **stretch**.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-align-self
     */
    alignSelf?: string;
    /**
     * Sets the default number of columns the component extends. Available options are **1 -> 12** and **auto**.
     * @default false
     * @see https://vuetifyjs.com/api/v-col#props-cols
     */
    cols?: boolean | string | number;
    /**
     * Changes the number of columns on large and greater breakpoints.
     * @default false
     * @see https://vuetifyjs.com/api/v-col#props-lg
     */
    lg?: boolean | string | number;
    /**
     * Changes the number of columns on medium and greater breakpoints.
     * @default false
     * @see https://vuetifyjs.com/api/v-col#props-md
     */
    md?: boolean | string | number;
    /**
     * Sets the default offset for the column.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-offset
     */
    offset?: string | number;
    /**
     * Changes the offset of the component on large and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-offset-lg
     */
    offsetLg?: string | number;
    /**
     * Changes the offset of the component on medium and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-offset-md
     */
    offsetMd?: string | number;
    /**
     * Changes the offset of the component on small and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-offset-sm
     */
    offsetSm?: string | number;
    /**
     * Changes the offset of the component on extra large and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-offset-xl
     */
    offsetXl?: string | number;
    /**
     * Sets the default [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) for the column.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-order
     */
    order?: string | number;
    /**
     * Changes the order of the component on large and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-order-lg
     */
    orderLg?: string | number;
    /**
     * Changes the order of the component on medium and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-order-md
     */
    orderMd?: string | number;
    /**
     * Changes the order of the component on small and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-order-sm
     */
    orderSm?: string | number;
    /**
     * Changes the order of the component on extra large and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-col#props-order-xl
     */
    orderXl?: string | number;
    /**
     * Changes the number of columns on small and greater breakpoints.
     * @default false
     * @see https://vuetifyjs.com/api/v-col#props-sm
     */
    sm?: boolean | string | number;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-col#props-tag
     */
    tag?: string;
    /**
     * Changes the number of columns on extra large and greater breakpoints.
     * @default false
     * @see https://vuetifyjs.com/api/v-col#props-xl
     */
    xl?: boolean | string | number;
  }

  export interface VColSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-col#slots-default
     */
    default: Slotted;
  }

  const VCol: GlobalComponent<VColProps, VColSlots>;

  export interface VRowProps {
    /**
     * Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are **start**, **center**, **end**, **baseline** and **stretch**.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-align
     */
    align?: string;
    /**
     * Applies the [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) css property. Available options are **start**, **center**, **end**, **space-between**, **space-around** and **stretch**.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-align-content
     */
    alignContent?: string;
    /**
     * Changes the **align-content** property on large and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-align-content-lg
     */
    alignContentLg?: string;
    /**
     * Changes the **align-content** property on medium and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-align-content-md
     */
    alignContentMd?: string;
    /**
     * Changes the **align-content** property on small and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-align-content-sm
     */
    alignContentSm?: string;
    /**
     * Changes the **align-content** property on extra large and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-align-content-xl
     */
    alignContentXl?: string;
    /**
     * Changes the **align-items** property on large and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-align-lg
     */
    alignLg?: string;
    /**
     * Changes the **align-items** property on medium and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-align-md
     */
    alignMd?: string;
    /**
     * Changes the **align-items** property on small and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-align-sm
     */
    alignSm?: string;
    /**
     * Changes the **align-items** property on extra large and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-align-xl
     */
    alignXl?: string;
    /**
     * Reduces the gutter between `v-col`s.
     * @default false
     * @see https://vuetifyjs.com/api/v-row#props-dense
     */
    dense?: boolean;
    /**
     * Applies the [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) css property. Available options are **start**, **center**, **end**, **space-between** and **space-around**.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-justify
     */
    justify?: string;
    /**
     * Changes the **justify-content** property on large and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-justify-lg
     */
    justifyLg?: string;
    /**
     * Changes the **justify-content** property on medium and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-justify-md
     */
    justifyMd?: string;
    /**
     * Changes the **justify-content** property on small and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-justify-sm
     */
    justifySm?: string;
    /**
     * Changes the **justify-content** property on extra large and greater breakpoints.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-row#props-justify-xl
     */
    justifyXl?: string;
    /**
     * Removes the gutter between `v-col`s.
     * @default false
     * @see https://vuetifyjs.com/api/v-row#props-no-gutters
     */
    noGutters?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-row#props-tag
     */
    tag?: string;
  }

  export interface VRowSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-row#slots-default
     */
    default: Slotted;
  }

  const VRow: GlobalComponent<VRowProps, VRowSlots>;

  export interface VSpacerProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-spacer#props-tag
     */
    tag?: string;
  }

  export interface VSpacerSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-spacer#slots-default
     */
    default: Slotted;
  }

  const VSpacer: GlobalComponent<VSpacerProps, VSpacerSlots>;

  export interface VHoverProps {
    /**
     * Milliseconds to wait before closing component.
     * @default 0
     * @see https://vuetifyjs.com/api/v-hover#props-close-delay
     */
    closeDelay?: number | string;
    /**
     * Turns off hover functionality
     * @default false
     * @see https://vuetifyjs.com/api/v-hover#props-disabled
     */
    disabled?: boolean;
    /**
     * Milliseconds to wait before opening component.
     * @default 0
     * @see https://vuetifyjs.com/api/v-hover#props-open-delay
     */
    openDelay?: number | string;
    /**
     * Controls whether the component is visible or hidden.
     * @default false
     * @see https://vuetifyjs.com/api/v-hover#props-value
     */
    value?: boolean;
  }

  export interface VHoverSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-hover#slots-default
     */
    default: Slotted<VHoverdefault>;
  }

  export interface VHoverdefault {
    /** */
    hover: boolean;
  }

  const VHover: GlobalComponent<VHoverProps, VHoverSlots>;

  export interface VIconProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-icon#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-icon#props-dark
     */
    dark?: boolean;
    /**
     * Makes icon smaller (20px)
     * @default false
     * @see https://vuetifyjs.com/api/v-icon#props-dense
     */
    dense?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-icon#props-disabled
     */
    disabled?: boolean;
    /**
     * Makes the component large.
     * @default false
     * @see https://vuetifyjs.com/api/v-icon#props-large
     */
    large?: boolean;
    /**
     * Applies appropriate margins to the icon inside of a button when placed to the **left** of another element or text
     * @default false
     * @see https://vuetifyjs.com/api/v-icon#props-left
     */
    left?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-icon#props-light
     */
    light?: boolean;
    /**
     * Applies appropriate margins to the icon inside of a button when placed to the **right** of another element or text
     * @default false
     * @see https://vuetifyjs.com/api/v-icon#props-right
     */
    right?: boolean;
    /**
     * Specifies a custom font size for the icon
     * @default undefined
     * @see https://vuetifyjs.com/api/v-icon#props-size
     */
    size?: number | string;
    /**
     * Makes the component small.
     * @default false
     * @see https://vuetifyjs.com/api/v-icon#props-small
     */
    small?: boolean;
    /**
     * Specifies a custom tag to be used
     * @default 'i'
     * @see https://vuetifyjs.com/api/v-icon#props-tag
     */
    tag?: string;
    /**
     * Makes the component extra large.
     * @default false
     * @see https://vuetifyjs.com/api/v-icon#props-x-large
     */
    xLarge?: boolean;
    /**
     * Makes the component extra small.
     * @default false
     * @see https://vuetifyjs.com/api/v-icon#props-x-small
     */
    xSmall?: boolean;
  }

  export interface VIconSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-icon#slots-default
     */
    default: Slotted;
  }

  const VIcon: GlobalComponent<VIconProps, VIconSlots>;

  export interface VImgProps {
    /**
     * Alternate text for screen readers. Leave empty for decorative images
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-alt
     */
    alt?: string;
    /**
     * Calculated as `width/height`, so for a 1920x1080px image this will be `1.7778`. Will be calculated automatically if omitted
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-aspect-ratio
     */
    aspectRatio?: string | number;
    /**
     * Prevents the image from being cropped if it doesn't fit
     * @default false
     * @see https://vuetifyjs.com/api/v-img#props-contain
     */
    contain?: boolean;
    /**
     * Apply a custom class to the responsive content div.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-content-class
     */
    contentClass?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-img#props-dark
     */
    dark?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-img#props-eager
     */
    eager?: boolean;
    /**
     * Overlays a gradient onto the image. Only supports [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) syntax, anything else should be done with classes (see examples)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-gradient
     */
    gradient?: string;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-height
     */
    height?: number | string;
    /**
     * Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail. Has a slight blur filter applied.
     *
     * Use [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader) to generate automatically
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-lazy-src
     */
    lazySrc?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-img#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-min-width
     */
    minWidth?: number | string;
    /**
     * Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor.
     * @default {}
     * @see https://vuetifyjs.com/api/v-img#props-options
     */
    options?: object;
    /**
     * Overrides the default to change which parts get cropped off. Uses the same syntax as [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
     * @default 'center center'
     * @see https://vuetifyjs.com/api/v-img#props-position
     */
    position?: string;
    /**
     * For use with `srcset`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-sizes
     */
    sizes?: string;
    /**
     * The image URL. This prop is mandatory
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-src
     */
    src?: string | object;
    /**
     * A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-srcset
     */
    srcset?: string;
    /**
     * The transition to use when switching from `lazy-src` to `src`
     * @default fade-transition
     * @see https://vuetifyjs.com/api/v-img#props-transition
     */
    transition?: boolean | string;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-img#props-width
     */
    width?: number | string;
  }

  export interface VImgSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-img#slots-default
     */
    default: Slotted;
    /**
     * Slot for image placeholder
     * @see https://vuetifyjs.com/api/v-img#slots-placeholder
     */
    placeholder: Slotted;
  }

  const VImg: GlobalComponent<VImgProps, VImgSlots>;

  export interface VInputProps {
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-input#props-append-icon
     */
    appendIcon?: string;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-input#props-background-color
     */
    backgroundColor?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-input#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-dense
     */
    dense?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-disabled
     */
    disabled?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-input#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-input#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Sets the height of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-input#props-height
     */
    height?: number | string;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-input#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-input#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-input#props-id
     */
    id?: string;
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-input#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-light
     */
    light?: boolean;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-loading
     */
    loading?: boolean;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-input#props-messages
     */
    messages?: string | any[];
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-input#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-readonly
     */
    readonly?: boolean;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-input#props-rules
     */
    rules?: any[];
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-input#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-input#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-input#props-value
     */
    value?: any;
  }

  export interface VInputSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-input#slots-default
     */
    default: Slotted;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-input#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-input#slots-message */
    message: Slotted<VInputmessage>;
  }

  export interface VInputmessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  const VInput: GlobalComponent<VInputProps, VInputSlots>;

  export interface VItemProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @see https://vuetifyjs.com/api/v-item#props-active-class
     */
    activeClass?: string;
    /**
     * Removes the ability to click or target the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-item#props-disabled
     */
    disabled?: boolean;
    /**
     * The value used when the component is selected in a group. If not provided, the index will be used.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-item#props-value
     */
    value?: any;
  }

  export interface VItemSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-item#slots-default
     */
    default: Slotted<VItemdefault>;
  }

  export interface VItemdefault {
    /** */
    active: boolean;
    /** */
    toggle: Function;
  }

  const VItem: GlobalComponent<VItemProps, VItemSlots>;

  export interface VItemGroupProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @default 'v-item--active'
     * @see https://vuetifyjs.com/api/v-item-group#props-active-class
     */
    activeClass?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-item-group#props-dark
     */
    dark?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-item-group#props-light
     */
    light?: boolean;
    /**
     * Forces a value to always be selected (if available).
     * @default false
     * @see https://vuetifyjs.com/api/v-item-group#props-mandatory
     */
    mandatory?: boolean;
    /**
     * Sets a maximum number of selections that can be made.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-item-group#props-max
     */
    max?: number | string;
    /**
     * Allow multiple selections. The **value** prop must be an _array_.
     * @default false
     * @see https://vuetifyjs.com/api/v-item-group#props-multiple
     */
    multiple?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-item-group#props-tag
     */
    tag?: string;
    /**
     * The designated model value for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-item-group#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-item-group#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VItemGroupSlots {}

  const VItemGroup: GlobalComponent<VItemGroupProps, VItemGroupSlots>;

  export interface VLazyProps {
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-lazy#props-height
     */
    height?: number | string;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-lazy#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-lazy#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-lazy#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-lazy#props-min-width
     */
    minWidth?: number | string;
    /**
     * Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor.
     * @default {}
     * @see https://vuetifyjs.com/api/v-lazy#props-options
     */
    options?: object;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-lazy#props-tag
     */
    tag?: string;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default 'fade-transition'
     * @see https://vuetifyjs.com/api/v-lazy#props-transition
     */
    transition?: string;
    /**
     * Controls whether the component is visible or hidden.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-lazy#props-value
     */
    value?: any;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-lazy#props-width
     */
    width?: number | string;
  }

  export interface VLazySlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-lazy#slots-default
     */
    default: Slotted;
  }

  const VLazy: GlobalComponent<VLazyProps, VLazySlots>;

  export interface VListItemActionTextProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'span'
     * @see https://vuetifyjs.com/api/v-list-item-action-text#props-tag
     */
    tag?: string;
  }

  export interface VListItemActionTextSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list-item-action-text#slots-default
     */
    default: Slotted;
  }

  const VListItemActionText: GlobalComponent<VListItemActionTextProps, VListItemActionTextSlots>;

  export interface VListItemContentProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-list-item-content#props-tag
     */
    tag?: string;
  }

  export interface VListItemContentSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list-item-content#slots-default
     */
    default: Slotted;
  }

  const VListItemContent: GlobalComponent<VListItemContentProps, VListItemContentSlots>;

  export interface VListItemTitleProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-list-item-title#props-tag
     */
    tag?: string;
  }

  export interface VListItemTitleSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list-item-title#slots-default
     */
    default: Slotted;
  }

  const VListItemTitle: GlobalComponent<VListItemTitleProps, VListItemTitleSlots>;

  export interface VListItemSubtitleProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-list-item-subtitle#props-tag
     */
    tag?: string;
  }

  export interface VListItemSubtitleSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list-item-subtitle#slots-default
     */
    default: Slotted;
  }

  const VListItemSubtitle: GlobalComponent<VListItemSubtitleProps, VListItemSubtitleSlots>;

  export interface VListProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-dark
     */
    dark?: boolean;
    /**
     * Lowers max height of list tiles
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-dense
     */
    dense?: boolean;
    /**
     * Disables all children `v-list-item` components
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-disabled
     */
    disabled?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list#props-elevation
     */
    elevation?: number | string;
    /**
     * Will only collapse when explicitly closed
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-expand
     */
    expand?: boolean;
    /**
     * Remove the highlighted background on active `v-list-item`s
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-flat
     */
    flat?: boolean;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list#props-height
     */
    height?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list#props-min-width
     */
    minWidth?: number | string;
    /**
     * An alternative styling that reduces `v-list-item` width and rounds the corners. Typically used with **[v-navigation-drawer](/components/navigation-drawers)**
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-nav
     */
    nav?: boolean;
    /**
     * Removes elevation (box-shadow) and adds a *thin* border.
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-outlined
     */
    outlined?: boolean;
    /**
     * Rounds the `v-list-item` edges
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-rounded
     */
    rounded?: boolean;
    /**
     * Provides an alternative active style for `v-list-item`.
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-shaped
     */
    shaped?: boolean;
    /**
     * Removes top padding. Used when previous sibling is a header
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-subheader
     */
    subheader?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-list#props-tag
     */
    tag?: string;
    /**
     * Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-three-line
     */
    threeLine?: boolean;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-tile
     */
    tile?: boolean;
    /**
     * Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.
     * @default false
     * @see https://vuetifyjs.com/api/v-list#props-two-line
     */
    twoLine?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list#props-width
     */
    width?: number | string;
  }

  export interface VListSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list#slots-default
     */
    default: Slotted;
  }

  const VList: GlobalComponent<VListProps, VListSlots>;

  export interface VListGroupProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-group#props-active-class
     */
    activeClass?: string;
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default '$expand'
     * @see https://vuetifyjs.com/api/v-list-group#props-append-icon
     */
    appendIcon?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-list-group#props-color
     */
    color?: string;
    /**
     * Disables all children `v-list-item` components
     * @default false
     * @see https://vuetifyjs.com/api/v-list-group#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-group#props-eager
     */
    eager?: boolean;
    /**
     * Assign a route namespace. Accepts a string or regexp for determining active state
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-group#props-group
     */
    group?: string | RegExp;
    /**
     * Removes left padding assigned for action icons from group items
     * @default false
     * @see https://vuetifyjs.com/api/v-list-group#props-no-action
     */
    noAction?: boolean;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-group#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default true
     * @see https://vuetifyjs.com/api/v-list-group#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Designate the component as nested list group
     * @default false
     * @see https://vuetifyjs.com/api/v-list-group#props-sub-group
     */
    subGroup?: boolean;
    /**
     * Expands / Collapse the list-group
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-group#props-value
     */
    value?: any;
  }

  export interface VListGroupSlots {
    /**
     * When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation
     * @see https://vuetifyjs.com/api/v-list-group#slots-activator
     */
    activator: Slotted;
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @see https://vuetifyjs.com/api/v-list-group#slots-appendIcon
     */
    appendIcon: Slotted;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list-group#slots-default
     */
    default: Slotted;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @see https://vuetifyjs.com/api/v-list-group#slots-prependIcon
     */
    prependIcon: Slotted;
  }

  const VListGroup: GlobalComponent<VListGroupProps, VListGroupSlots>;

  export interface VListItemProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @see https://vuetifyjs.com/api/v-list-item#props-active-class
     */
    activeClass?: string;
    /**
     * Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-append
     */
    append?: boolean;
    /**
     * Applies specified color to the control when in an **active** state or **input-value** is **true** - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-dark
     */
    dark?: boolean;
    /**
     * Lowers max height of list tiles
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-dense
     */
    dense?: boolean;
    /**
     * Disables the component
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-disabled
     */
    disabled?: boolean;
    /**
     * Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-exact
     */
    exact?: boolean;
    /**
     * Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item#props-exact-active-class
     */
    exactActiveClass?: string;
    /**
     * Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-exact-path
     */
    exactPath?: boolean;
    /**
     * Designates the component as anchor and applies the **href** attribute.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item#props-href
     */
    href?: string | object;
    /**
     * If set, the list tile will not be rendered as a link even if it has to/href prop or @click handler
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-inactive
     */
    inactive?: boolean;
    /**
     * Controls the **active** state of the item. This is typically used to highlight the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item#props-input-value
     */
    inputValue?: any;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-light
     */
    light?: boolean;
    /**
     * Designates that the component is a link. This is automatic when using the **href** or **to** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-link
     */
    link?: boolean;
    /**
     * Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-nuxt
     */
    nuxt?: boolean;
    /**
     * Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-replace
     */
    replace?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Allow text selection inside `v-list-item`. This prop uses [user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-selectable
     */
    selectable?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-list-item#props-tag
     */
    tag?: string;
    /**
     * Designates the target attribute. This should only be applied when using the **href** prop.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item#props-target
     */
    target?: string;
    /**
     * Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-three-line
     */
    threeLine?: boolean;
    /**
     * Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item#props-to
     */
    to?: string | object;
    /**
     * Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item#props-two-line
     */
    twoLine?: boolean;
    /**
     * The value used when a child of a [v-list-item-group](/components/list-item-groups).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item#props-value
     */
    value?: any;
  }

  export interface VListItemSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list-item#slots-default
     */
    default: Slotted<VListItemdefault>;
  }

  export interface VListItemdefault {
    /** */
    active: boolean;
    /** */
    toggle: Function;
  }

  const VListItem: GlobalComponent<VListItemProps, VListItemSlots>;

  export interface VListItemActionProps {}

  export interface VListItemActionSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list-item-action#slots-default
     */
    default: Slotted;
  }

  const VListItemAction: GlobalComponent<VListItemActionProps, VListItemActionSlots>;

  export interface VListItemAvatarProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-color
     */
    color?: string;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-height
     */
    height?: number | string;
    /**
     * Uses an alternative horizontal style.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-horizontal
     */
    horizontal?: boolean;
    /**
     * Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-left
     */
    left?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-min-width
     */
    minWidth?: number | string;
    /**
     * Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-right
     */
    right?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Sets the height and width of the component.
     * @default 40
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-size
     */
    size?: number | string;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-tile
     */
    tile?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-avatar#props-width
     */
    width?: number | string;
  }

  export interface VListItemAvatarSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list-item-avatar#slots-default
     */
    default: Slotted;
  }

  const VListItemAvatar: GlobalComponent<VListItemAvatarProps, VListItemAvatarSlots>;

  export interface VListItemIconProps {}

  export interface VListItemIconSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list-item-icon#slots-default
     */
    default: Slotted;
  }

  const VListItemIcon: GlobalComponent<VListItemIconProps, VListItemIconSlots>;

  export interface VListItemGroupProps {
    /**
     * The **active-class** applied to children when they are activated.
     * @default 'v-item--active'
     * @see https://vuetifyjs.com/api/v-list-item-group#props-active-class
     */
    activeClass?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-group#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item-group#props-dark
     */
    dark?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item-group#props-light
     */
    light?: boolean;
    /**
     * Forces a value to always be selected (if available).
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item-group#props-mandatory
     */
    mandatory?: boolean;
    /**
     * Sets a maximum number of selections that can be made.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-group#props-max
     */
    max?: number | string;
    /**
     * Allow multiple selections. The **value** prop must be an _array_.
     * @default false
     * @see https://vuetifyjs.com/api/v-list-item-group#props-multiple
     */
    multiple?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-list-item-group#props-tag
     */
    tag?: string;
    /**
     * Sets the active list-item inside the list-group
     * @default undefined
     * @see https://vuetifyjs.com/api/v-list-item-group#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-list-item-group#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VListItemGroupSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-list-item-group#slots-default
     */
    default: Slotted;
  }

  const VListItemGroup: GlobalComponent<VListItemGroupProps, VListItemGroupSlots>;

  export interface VMainProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'main'
     * @see https://vuetifyjs.com/api/v-main#props-tag
     */
    tag?: string;
  }

  export interface VMainSlots {}

  const VMain: GlobalComponent<VMainProps, VMainSlots>;

  export interface VMenuProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-absolute
     */
    absolute?: boolean;
    /**
     * Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-menu#props-activator
     */
    activator?: any;
    /**
     * Removes overflow re-positioning for the content
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-allow-overflow
     */
    allowOverflow?: boolean;
    /**
     * Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-attach
     */
    attach?: any;
    /**
     * Centers list on selected element
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-auto
     */
    auto?: boolean;
    /**
     * Aligns the component towards the bottom.
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-bottom
     */
    bottom?: boolean;
    /**
     * Milliseconds to wait before closing component. Only works with the **open-on-hover** prop
     * @default 0
     * @see https://vuetifyjs.com/api/v-menu#props-close-delay
     */
    closeDelay?: number | string;
    /**
     * Designates if menu should close on outside-activator click
     * @default true
     * @see https://vuetifyjs.com/api/v-menu#props-close-on-click
     */
    closeOnClick?: boolean;
    /**
     * Designates if menu should close when its content is clicked
     * @default true
     * @see https://vuetifyjs.com/api/v-menu#props-close-on-content-click
     */
    closeOnContentClick?: boolean;
    /**
     * Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-menu#props-content-class
     */
    contentClass?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-dark
     */
    dark?: boolean;
    /**
     * Removes all keyboard interaction
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-disable-keys
     */
    disableKeys?: boolean;
    /**
     * Disables the menu
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-eager
     */
    eager?: boolean;
    /**
     * Detaches the menu content inside of the component as opposed to the document.
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-internal-activator
     */
    internalActivator?: boolean;
    /**
     * Aligns the component towards the left.
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-left
     */
    left?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-light
     */
    light?: boolean;
    /**
     * Sets the max height of the menu content
     * @default auto
     * @see https://vuetifyjs.com/api/v-menu#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the content
     * @default auto
     * @see https://vuetifyjs.com/api/v-menu#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum width for the content
     * @default undefined
     * @see https://vuetifyjs.com/api/v-menu#props-min-width
     */
    minWidth?: number | string;
    /**
     * Nudge the content to the bottom
     * @default 0
     * @see https://vuetifyjs.com/api/v-menu#props-nudge-bottom
     */
    nudgeBottom?: number | string;
    /**
     * Nudge the content to the left
     * @default 0
     * @see https://vuetifyjs.com/api/v-menu#props-nudge-left
     */
    nudgeLeft?: number | string;
    /**
     * Nudge the content to the right
     * @default 0
     * @see https://vuetifyjs.com/api/v-menu#props-nudge-right
     */
    nudgeRight?: number | string;
    /**
     * Nudge the content to the top
     * @default 0
     * @see https://vuetifyjs.com/api/v-menu#props-nudge-top
     */
    nudgeTop?: number | string;
    /**
     * Nudge the content width
     * @default 0
     * @see https://vuetifyjs.com/api/v-menu#props-nudge-width
     */
    nudgeWidth?: number | string;
    /**
     * Causes the component to flip to the opposite side when repositioned due to overflow
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-offset-overflow
     */
    offsetOverflow?: boolean;
    /**
     * Offset the menu on the x-axis. Works in conjunction with direction left/right
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-offset-x
     */
    offsetX?: boolean;
    /**
     * Offset the menu on the y-axis. Works in conjunction with direction top/bottom
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-offset-y
     */
    offsetY?: boolean;
    /**
     * Milliseconds to wait before opening component. Only works with the **open-on-hover** prop
     * @default 0
     * @see https://vuetifyjs.com/api/v-menu#props-open-delay
     */
    openDelay?: number | string;
    /**
     * Designates whether menu should open on activator click
     * @default true
     * @see https://vuetifyjs.com/api/v-menu#props-open-on-click
     */
    openOnClick?: boolean;
    /**
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-open-on-focus
     */
    openOnFocus?: boolean;
    /**
     * Designates whether menu should open on activator hover
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-open-on-hover
     */
    openOnHover?: boolean;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top left'
     * @see https://vuetifyjs.com/api/v-menu#props-origin
     */
    origin?: string;
    /**
     * Used to position the content when not using an activator slot
     * @default undefined
     * @see https://vuetifyjs.com/api/v-menu#props-position-x
     */
    positionX?: number;
    /**
     * Used to position the content when not using an activator slot
     * @default undefined
     * @see https://vuetifyjs.com/api/v-menu#props-position-y
     */
    positionY?: number;
    /**
     * The value that is updated when the menu is closed - must be primitive. Dot notation is supported
     * @default undefined
     * @see https://vuetifyjs.com/api/v-menu#props-return-value
     */
    returnValue?: any;
    /**
     * Aligns the component towards the right.
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-right
     */
    right?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-menu#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-tile
     */
    tile?: boolean;
    /**
     * Aligns the content towards the top.
     * @default false
     * @see https://vuetifyjs.com/api/v-menu#props-top
     */
    top?: boolean;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default v-menu-transition
     * @see https://vuetifyjs.com/api/v-menu#props-transition
     */
    transition?: boolean | string;
    /**
     * Controls whether the component is visible or hidden.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-menu#props-value
     */
    value?: any;
    /**
     * The z-index used for the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-menu#props-z-index
     */
    zIndex?: number | string;
  }

  export interface VMenuSlots {
    /**
     * When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation
     * @see https://vuetifyjs.com/api/v-menu#slots-activator
     */
    activator: Slotted<VMenuactivator>;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-menu#slots-default
     */
    default: Slotted;
  }

  export interface VMenuactivator {
    /** */
    attrs: any;
    /** */
    on: { [eventName: string]: eventHandler };
    /** */
    value: boolean;
  }

  const VMenu: GlobalComponent<VMenuProps, VMenuSlots>;

  export interface VNavigationDrawerProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-absolute
     */
    absolute?: boolean;
    /**
     * Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-app
     */
    app?: boolean;
    /**
     * Expands from the bottom of the screen on mobile devices
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-bottom
     */
    bottom?: boolean;
    /**
     * A clipped drawer rests under the application toolbar. **Note:** requires the **clipped-left** or **clipped-right** prop on `v-app-bar` to work as intended
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-clipped
     */
    clipped?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-dark
     */
    dark?: boolean;
    /**
     * Will automatically open/close drawer when resized depending if mobile or desktop.
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-disable-resize-watcher
     */
    disableResizeWatcher?: boolean;
    /**
     * Disables opening of navigation drawer when route changes
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-disable-route-watcher
     */
    disableRouteWatcher?: boolean;
    /**
     * Collapses the drawer to a **mini-variant** until hovering with the mouse
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-expand-on-hover
     */
    expandOnHover?: boolean;
    /**
     * Applies **position: fixed** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-fixed
     */
    fixed?: boolean;
    /**
     * A floating drawer has no visible container (no border-right)
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-floating
     */
    floating?: boolean;
    /**
     * Sets the height of the navigation drawer
     * @default 100%
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-height
     */
    height?: number | string;
    /**
     * Hides the display of the overlay.
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-hide-overlay
     */
    hideOverlay?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-light
     */
    light?: boolean;
    /**
     * Condenses navigation drawer width, also accepts the **.sync** modifier. With this, the drawer will re-open when clicking it
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-mini-variant
     */
    miniVariant?: boolean;
    /**
     * Designates the width assigned when the `mini` prop is turned on
     * @default 56
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-mini-variant-width
     */
    miniVariantWidth?: number | string;
    /**
     * Sets the designated mobile breakpoint for the component. This will apply alternate styles for mobile devices such as the `temporary` prop, or activate the `bottom` prop when the breakpoint value is met. Setting the value to `0` will disable this functionality.
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-mobile-breakpoint
     */
    mobileBreakpoint?: number | string;
    /**
     * Sets the overlay color.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-overlay-color
     */
    overlayColor?: string;
    /**
     * Sets the overlay opacity.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-overlay-opacity
     */
    overlayOpacity?: number | string;
    /**
     * The drawer remains visible regardless of screen size
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-permanent
     */
    permanent?: boolean;
    /**
     * Places the navigation drawer on the right
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-right
     */
    right?: boolean;
    /**
     * Specifies a [v-img](/components/images) as the component's background.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-src
     */
    src?: string | object;
    /**
     * Remove all automated state functionality (resize, mobile, route) and manually control the drawer state
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-stateless
     */
    stateless?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'aside'
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-tag
     */
    tag?: string;
    /**
     * A temporary drawer sits above its application and uses a scrim (overlay) to darken the background
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-temporary
     */
    temporary?: boolean;
    /**
     * Disable mobile touch functionality
     * @default false
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-touchless
     */
    touchless?: boolean;
    /**
     * Controls whether the component is visible or hidden.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-value
     */
    value?: any;
    /**
     * Sets the width for the component.
     * @default 256
     * @see https://vuetifyjs.com/api/v-navigation-drawer#props-width
     */
    width?: number | string;
  }

  export interface VNavigationDrawerSlots {
    /**
     * A slot at the bottom of the drawer
     * @see https://vuetifyjs.com/api/v-navigation-drawer#slots-append
     */
    append: Slotted;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-navigation-drawer#slots-default
     */
    default: Slotted;
    /**
     * Used to modify `v-img` properties when using the **src** prop
     * @see https://vuetifyjs.com/api/v-navigation-drawer#slots-img
     */
    img: Slotted<VNavigationDrawerimg>;
    /**
     * A slot at the top of the drawer
     * @see https://vuetifyjs.com/api/v-navigation-drawer#slots-prepend
     */
    prepend: Slotted;
  }

  export interface VNavigationDrawerimg {
    /** */
    height: string;
    /** */
    src: string | srcObject;
  }

  const VNavigationDrawer: GlobalComponent<VNavigationDrawerProps, VNavigationDrawerSlots>;

  export interface VOtpInputProps {
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-otp-input#props-dark
     */
    dark?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-otp-input#props-disabled
     */
    disabled?: boolean;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-otp-input#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-otp-input#props-id
     */
    id?: string;
    /**
     * The OTP field's length
     * @default 6
     * @see https://vuetifyjs.com/api/v-otp-input#props-length
     */
    length?: number | string;
    /**
     * Outlined style applied by default to the input, set to `true` to apply plain style
     * @default false
     * @see https://vuetifyjs.com/api/v-otp-input#props-plain
     */
    plain?: boolean;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-otp-input#props-readonly
     */
    readonly?: boolean;
    /**
     * Supported types: `text`, `password`, `number`
     * @default 'text'
     * @see https://vuetifyjs.com/api/v-otp-input#props-type
     */
    type?: string;
    /**
     * The input's value
     * @default undefined
     * @see https://vuetifyjs.com/api/v-otp-input#props-value
     */
    value?: any;
  }

  export interface VOtpInputSlots {}

  const VOtpInput: GlobalComponent<VOtpInputProps, VOtpInputSlots>;

  export interface VOverflowBtnProps {
    /**
     * Allow the menu to overflow off the screen
     * @default true
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-allow-overflow
     */
    allowOverflow?: boolean;
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default '$dropdown'
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-append-icon
     */
    appendIcon?: string;
    /**
     * Appends an icon to the outside the component's input, uses same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-append-outer-icon
     */
    appendOuterIcon?: string;
    /**
     * Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-attach
     */
    attach?: any;
    /**
     * When searching, will always highlight the first option
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-auto-select-first
     */
    autoSelectFirst?: boolean;
    /**
     * Enables autofocus
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-autofocus
     */
    autofocus?: boolean;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-background-color
     */
    backgroundColor?: string;
    /**
     * Keeps a local _unique_ copy of all items that have been passed through the **items** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-cache-items
     */
    cacheItems?: boolean;
    /**
     * Changes display of selections to chips
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-chips
     */
    chips?: boolean;
    /**
     * Applied when using **clearable** and the input is dirty
     * @default '$clear'
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-clear-icon
     */
    clearIcon?: string;
    /**
     * Add input clear functionality, default icon is Material Design Icons **mdi-clear**
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-clearable
     */
    clearable?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-color
     */
    color?: string;
    /**
     * Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-counter
     */
    counter?: boolean | number | string;
    /**
     * @default null
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-counter-value
     */
    counterValue?: Function;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-dark
     */
    dark?: boolean;
    /**
     * Adds a remove icon to selected chips
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-deletable-chips
     */
    deletableChips?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-dense
     */
    dense?: boolean;
    /**
     * Disables keyboard lookup
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-disable-lookup
     */
    disableLookup?: boolean;
    /**
     * Disables the input
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-eager
     */
    eager?: boolean;
    /**
     * Creates an editable button
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-editable
     */
    editable?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Applies the alternate filled input style
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-filled
     */
    filled?: boolean;
    /**
     * The filtering algorithm used when searching. [example](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VAutocomplete/VAutocomplete.ts#L40)
     * @default (item, queryText, itemText) => {}
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-filter
     */
    filter?: Function;
    /**
     * Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-flat
     */
    flat?: boolean;
    /**
     * Designates input type as full-width
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-full-width
     */
    fullWidth?: boolean;
    /**
     * Sets the height of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-height
     */
    height?: number | string;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-hide-no-data
     */
    hideNoData?: boolean;
    /**
     * Do not display in the select menu items that are already selected
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-hide-selected
     */
    hideSelected?: boolean;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-id
     */
    id?: string;
    /**
     * Sets color of selected items
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-item-color
     */
    itemColor?: string;
    /**
     * Set property of **items**'s disabled value
     * @default disabled
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-item-disabled
     */
    itemDisabled?: string | any[] | Function;
    /**
     * Set property of **items**'s text value
     * @default text
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-item-text
     */
    itemText?: string | any[] | Function;
    /**
     * Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479)
     * @default value
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-item-value
     */
    itemValue?: string | any[] | Function;
    /**
     * Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable.
     * @default []
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-items
     */
    items?: any[];
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-light
     */
    light?: boolean;
    /**
     * Specifies the height of the loader
     * @default 2
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-loading
     */
    loading?: boolean | string;
    /**
     * Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"`
     * @default {
     *   closeOnClick: false,
     *   closeOnContentClick: false,
     *   disableKeys: true,
     *   openOnClick: false,
     *   maxHeight: 304
     * }
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-menu-props
     */
    menuProps?: string | any[] | object;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-messages
     */
    messages?: string | any[];
    /**
     * Changes select to multiple. Accepts array for value
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-multiple
     */
    multiple?: boolean;
    /**
     * Display text when there is no data
     * @default '$vuetify.noDataText'
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-no-data-text
     */
    noDataText?: string;
    /**
     * Do not apply filtering when searching. Useful when data is being filtered server side
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-no-filter
     */
    noFilter?: boolean;
    /**
     * When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-open-on-clear
     */
    openOnClear?: boolean;
    /**
     * Applies the outlined style to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-outlined
     */
    outlined?: boolean;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Forces label to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-persistent-placeholder
     */
    persistentPlaceholder?: boolean;
    /**
     * Sets the input's placeholder text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-placeholder
     */
    placeholder?: string;
    /**
     * Displays prefix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-prefix
     */
    prefix?: string;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Prepends an icon inside the component's input, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-prepend-inner-icon
     */
    prependInnerIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-readonly
     */
    readonly?: boolean;
    /**
     * Changes the selection behavior to return the object directly rather than the value specified with **item-value**
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-return-object
     */
    returnObject?: boolean;
    /**
     * Reverses the input orientation
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-reverse
     */
    reverse?: boolean;
    /**
     * Adds a border radius to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-rounded
     */
    rounded?: boolean;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-rules
     */
    rules?: any[];
    /**
     * Search value. Can be used with `.sync` modifier.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-search-input
     */
    searchInput?: string;
    /**
     * Creates a segmented button
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-segmented
     */
    segmented?: boolean;
    /**
     * Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-shaped
     */
    shaped?: boolean;
    /**
     * Label does not move on focus/dirty
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-single-line
     */
    singleLine?: boolean;
    /**
     * Changes display of selections to chips with the **small** property
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-small-chips
     */
    smallChips?: boolean;
    /**
     * Changes the style of the input
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-solo
     */
    solo?: boolean;
    /**
     * Reduces element opacity until focused
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-solo-inverted
     */
    soloInverted?: boolean;
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Displays suffix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-suffix
     */
    suffix?: string;
    /**
     * Sets input type
     * @default 'text'
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-type
     */
    type?: string;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-value
     */
    value?: any;
    /**
     * The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts)
     * @default (a: any, b: any): boolean
     * @see https://vuetifyjs.com/api/v-overflow-btn#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VOverflowBtnSlots {
    /**
     * Adds an item inside the input and after input content
     * @see https://vuetifyjs.com/api/v-overflow-btn#slots-append
     */
    append: Slotted;
    /**
     * Adds an item after menu content
     * @see https://vuetifyjs.com/api/v-overflow-btn#slots-append-item
     */
    appendItem: Slotted;
    /**
     * Adds an item outside the input and after input content
     * @see https://vuetifyjs.com/api/v-overflow-btn#slots-append-outer
     */
    appendOuter: Slotted;
    /** @see https://vuetifyjs.com/api/v-overflow-btn#slots-counter */
    counter: Slotted<VOverflowBtncounter>;
    /**
     * Define a custom item appearance
     * @see https://vuetifyjs.com/api/v-overflow-btn#slots-item
     */
    item: Slotted<VOverflowBtnitem>;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-overflow-btn#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-overflow-btn#slots-message */
    message: Slotted<VOverflowBtnmessage>;
    /** @see https://vuetifyjs.com/api/v-overflow-btn#slots-no-data */
    noData: Slotted;
    /**
     * Adds an item outside the input and before input content
     * @see https://vuetifyjs.com/api/v-overflow-btn#slots-prepend
     */
    prepend: Slotted;
    /**
     * Adds an item inside the input and before input content
     * @see https://vuetifyjs.com/api/v-overflow-btn#slots-prepend-inner
     */
    prependInner: Slotted;
    /**
     * Adds an item before menu content
     * @see https://vuetifyjs.com/api/v-overflow-btn#slots-prepend-item
     */
    prependItem: Slotted;
    /**
     * Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)
     * @see https://vuetifyjs.com/api/v-overflow-btn#slots-progress
     */
    progress: Slotted;
    /**
     * Define a custom selection appearance
     * @see https://vuetifyjs.com/api/v-overflow-btn#slots-selection
     */
    selection: Slotted<VOverflowBtnselection>;
  }

  export interface VOverflowBtncounter {
    /** */
    props: {
      dark: boolean;
      light: boolean;
      max: string | number;
      value: string;
    };
  }

  export interface VOverflowBtnitem {
    /** */
    parent: VueComponent;
    /** */
    item: object;
    /** */
    on: object;
    /** */
    attrs: object; // Only needed when providing your own v-list-item;
  }

  export interface VOverflowBtnmessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  export interface VOverflowBtnselection {
    /** */
    parent: VueComponent;
    /** */
    item: object;
    /** */
    index: number;
    /** */
    select: Function;
    /** */
    selected: boolean;
    /** */
    disabled: boolean;
  }

  const VOverflowBtn: GlobalComponent<VOverflowBtnProps, VOverflowBtnSlots>;

  export interface VOverlayProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-overlay#props-absolute
     */
    absolute?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default '#212121'
     * @see https://vuetifyjs.com/api/v-overlay#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default true
     * @see https://vuetifyjs.com/api/v-overlay#props-dark
     */
    dark?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-overlay#props-light
     */
    light?: boolean;
    /**
     * Sets the overlay opacity
     * @default 0.46
     * @see https://vuetifyjs.com/api/v-overlay#props-opacity
     */
    opacity?: number | string;
    /**
     * Controls whether the component is visible or hidden.
     * @default true
     * @see https://vuetifyjs.com/api/v-overlay#props-value
     */
    value?: any;
    /**
     * The z-index used for the component
     * @default 5
     * @see https://vuetifyjs.com/api/v-overlay#props-z-index
     */
    zIndex?: number | string;
  }

  export interface VOverlaySlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-overlay#slots-default
     */
    default: Slotted;
  }

  const VOverlay: GlobalComponent<VOverlayProps, VOverlaySlots>;

  export interface VPaginationProps {
    /**
     * Shape pagination elements as circles
     * @default false
     * @see https://vuetifyjs.com/api/v-pagination#props-circle
     */
    circle?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-pagination#props-color
     */
    color?: string;
    /**
     * @default '$vuetify.pagination.ariaLabel.currentPage'
     * @see https://vuetifyjs.com/api/v-pagination#props-current-page-aria-label
     */
    currentPageAriaLabel?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-pagination#props-dark
     */
    dark?: boolean;
    /**
     * Disables component
     * @default false
     * @see https://vuetifyjs.com/api/v-pagination#props-disabled
     */
    disabled?: boolean;
    /**
     * The length of the pagination component
     * @default 0
     * @see https://vuetifyjs.com/api/v-pagination#props-length
     */
    length?: number;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-pagination#props-light
     */
    light?: boolean;
    /**
     * @default '$vuetify.pagination.ariaLabel.next'
     * @see https://vuetifyjs.com/api/v-pagination#props-next-aria-label
     */
    nextAriaLabel?: string;
    /**
     * Specify the icon to use for the next icon
     * @default '$next'
     * @see https://vuetifyjs.com/api/v-pagination#props-next-icon
     */
    nextIcon?: string;
    /**
     * @default '$vuetify.pagination.ariaLabel.page'
     * @see https://vuetifyjs.com/api/v-pagination#props-page-aria-label
     */
    pageAriaLabel?: string;
    /**
     * Specify the icon to use for the prev icon
     * @default '$prev'
     * @see https://vuetifyjs.com/api/v-pagination#props-prev-icon
     */
    prevIcon?: string;
    /**
     * @default '$vuetify.pagination.ariaLabel.previous'
     * @see https://vuetifyjs.com/api/v-pagination#props-previous-aria-label
     */
    previousAriaLabel?: string;
    /**
     * Specify the max total visible pagination numbers
     * @default undefined
     * @see https://vuetifyjs.com/api/v-pagination#props-total-visible
     */
    totalVisible?: number | string;
    /**
     * Current selected page
     * @default 0
     * @see https://vuetifyjs.com/api/v-pagination#props-value
     */
    value?: number;
    /**
     * @default '$vuetify.pagination.ariaLabel.wrapper'
     * @see https://vuetifyjs.com/api/v-pagination#props-wrapper-aria-label
     */
    wrapperAriaLabel?: string;
  }

  export interface VPaginationSlots {}

  const VPagination: GlobalComponent<VPaginationProps, VPaginationSlots>;

  export interface VSheetProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-sheet#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-sheet#props-dark
     */
    dark?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-sheet#props-elevation
     */
    elevation?: number | string;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-sheet#props-height
     */
    height?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-sheet#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-sheet#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-sheet#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-sheet#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-sheet#props-min-width
     */
    minWidth?: number | string;
    /**
     * Removes elevation (box-shadow) and adds a *thin* border.
     * @default false
     * @see https://vuetifyjs.com/api/v-sheet#props-outlined
     */
    outlined?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-sheet#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-sheet#props-shaped
     */
    shaped?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default div
     * @see https://vuetifyjs.com/api/v-sheet#props-tag
     */
    tag?: string;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-sheet#props-tile
     */
    tile?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-sheet#props-width
     */
    width?: number | string;
  }

  export interface VSheetSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-sheet#slots-default
     */
    default: Slotted;
  }

  const VSheet: GlobalComponent<VSheetProps, VSheetSlots>;

  export interface VParallaxProps {
    /**
     * Attaches an alt property to the parallax image
     * @default undefined
     * @see https://vuetifyjs.com/api/v-parallax#props-alt
     */
    alt?: string;
    /**
     * Sets the height for the component
     * @default 500
     * @see https://vuetifyjs.com/api/v-parallax#props-height
     */
    height?: string | number;
    /**
     * The image to parallax
     * @default undefined
     * @see https://vuetifyjs.com/api/v-parallax#props-src
     */
    src?: string;
    /**
     * A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-parallax#props-srcset
     */
    srcset?: string;
  }

  export interface VParallaxSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-parallax#slots-default
     */
    default: Slotted;
  }

  const VParallax: GlobalComponent<VParallaxProps, VParallaxSlots>;

  export interface VProgressCircularProps {
    /**
     * Deprecated - Pending removal
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-circular#props-button
     */
    button?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-progress-circular#props-color
     */
    color?: string;
    /**
     * Constantly animates, use when loading progress is unknown.
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-circular#props-indeterminate
     */
    indeterminate?: boolean;
    /**
     * Rotates the circle start point in deg
     * @default 0
     * @see https://vuetifyjs.com/api/v-progress-circular#props-rotate
     */
    rotate?: number | string;
    /**
     * Sets the diameter of the circle in pixels
     * @default 32
     * @see https://vuetifyjs.com/api/v-progress-circular#props-size
     */
    size?: number | string;
    /**
     * The percentage value for current progress
     * @default 0
     * @see https://vuetifyjs.com/api/v-progress-circular#props-value
     */
    value?: number | string;
    /**
     * Sets the stroke of the circle in pixels
     * @default 4
     * @see https://vuetifyjs.com/api/v-progress-circular#props-width
     */
    width?: number | string;
  }

  export interface VProgressCircularSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-progress-circular#slots-default
     */
    default: Slotted<VProgressCirculardefault>;
  }

  export interface VProgressCirculardefault {
    /** */
    value: number;
  }

  const VProgressCircular: GlobalComponent<VProgressCircularProps, VProgressCircularSlots>;

  export interface VProgressLinearProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-absolute
     */
    absolute?: boolean;
    /**
     * Reduce the height to 0, hiding component
     * @default true
     * @see https://vuetifyjs.com/api/v-progress-linear#props-active
     */
    active?: boolean;
    /**
     * Background color, set to component's color if null
     * @default undefined
     * @see https://vuetifyjs.com/api/v-progress-linear#props-background-color
     */
    backgroundColor?: string;
    /**
     * Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise
     * @default undefined
     * @see https://vuetifyjs.com/api/v-progress-linear#props-background-opacity
     */
    backgroundOpacity?: number | string;
    /**
     * Aligns the component towards the bottom.
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-bottom
     */
    bottom?: boolean;
    /**
     * The percentage value for the buffer
     * @default 100
     * @see https://vuetifyjs.com/api/v-progress-linear#props-buffer-value
     */
    bufferValue?: number | string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-progress-linear#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-dark
     */
    dark?: boolean;
    /**
     * Applies **position: fixed** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-fixed
     */
    fixed?: boolean;
    /**
     * Sets the height for the component
     * @default 4
     * @see https://vuetifyjs.com/api/v-progress-linear#props-height
     */
    height?: number | string;
    /**
     * Constantly animates, use when loading progress is unknown.
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-indeterminate
     */
    indeterminate?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-light
     */
    light?: boolean;
    /**
     * Animates like **indeterminate** prop but inverse
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-query
     */
    query?: boolean;
    /**
     * Displays reversed progress (right to left in LTR mode and left to right in RTL)
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-reverse
     */
    reverse?: boolean;
    /**
     * Adds a border radius to the progress component
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-rounded
     */
    rounded?: boolean;
    /**
     * An alternative style for portraying loading that works in tandem with **buffer-value**
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-stream
     */
    stream?: boolean;
    /**
     * Adds a stripe background to the filled portion of the progress component
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-striped
     */
    striped?: boolean;
    /**
     * Aligns the content towards the top.
     * @default false
     * @see https://vuetifyjs.com/api/v-progress-linear#props-top
     */
    top?: boolean;
    /**
     * The designated model value for the component.
     * @default 0
     * @see https://vuetifyjs.com/api/v-progress-linear#props-value
     */
    value?: number | string;
  }

  export interface VProgressLinearSlots {
    /**
     * Provides the current value of the component
     * @see https://vuetifyjs.com/api/v-progress-linear#slots-default
     */
    default: Slotted<VProgressLineardefault>;
  }

  export interface VProgressLineardefault {
    /** */
    value: number;
  }

  const VProgressLinear: GlobalComponent<VProgressLinearProps, VProgressLinearSlots>;

  export interface VRadioGroupProps {
    /**
     * The **active-class** applied to children when they are activated.
     * @default 'v-item--active'
     * @see https://vuetifyjs.com/api/v-radio-group#props-active-class
     */
    activeClass?: string;
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio-group#props-append-icon
     */
    appendIcon?: string;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio-group#props-background-color
     */
    backgroundColor?: string;
    /**
     * Displays radio buttons in column
     * @default true
     * @see https://vuetifyjs.com/api/v-radio-group#props-column
     */
    column?: boolean;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-dense
     */
    dense?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-disabled
     */
    disabled?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-radio-group#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-radio-group#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio-group#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio-group#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio-group#props-id
     */
    id?: string;
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-radio-group#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-light
     */
    light?: boolean;
    /**
     * Forces a value to always be selected (if available).
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-mandatory
     */
    mandatory?: boolean;
    /**
     * Sets a maximum number of selections that can be made.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio-group#props-max
     */
    max?: number | string;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-radio-group#props-messages
     */
    messages?: string | any[];
    /**
     * Allow multiple selections. The **value** prop must be an _array_.
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-multiple
     */
    multiple?: boolean;
    /**
     * Sets the component's name attribute
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio-group#props-name
     */
    name?: string;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio-group#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-readonly
     */
    readonly?: boolean;
    /**
     * Displays radio buttons in row
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-row
     */
    row?: boolean;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-radio-group#props-rules
     */
    rules?: any[];
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-radio-group#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-radio-group#props-tag
     */
    tag?: string;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-radio-group#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-radio-group#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-radio-group#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VRadioGroupSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-radio-group#slots-default
     */
    default: Slotted;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-radio-group#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-radio-group#slots-message */
    message: Slotted<VRadioGroupmessage>;
  }

  export interface VRadioGroupmessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  const VRadioGroup: GlobalComponent<VRadioGroupProps, VRadioGroupSlots>;

  export interface VRadioProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @see https://vuetifyjs.com/api/v-radio#props-active-class
     */
    activeClass?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-radio#props-dark
     */
    dark?: boolean;
    /**
     * Removes the ability to click or target the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-radio#props-disabled
     */
    disabled?: boolean;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio#props-id
     */
    id?: string;
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-radio#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-radio#props-light
     */
    light?: boolean;
    /**
     * Sets the component's name attribute
     * @default undefined
     * @see https://vuetifyjs.com/api/v-radio#props-name
     */
    name?: string;
    /**
     * The icon used when inactive
     * @default '$radioOff'
     * @see https://vuetifyjs.com/api/v-radio#props-off-icon
     */
    offIcon?: string;
    /**
     * The icon used when active
     * @default '$radioOn'
     * @see https://vuetifyjs.com/api/v-radio#props-on-icon
     */
    onIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-radio#props-readonly
     */
    readonly?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default true
     * @see https://vuetifyjs.com/api/v-radio#props-ripple
     */
    ripple?: boolean | object;
    /**
     * The value used when the component is selected in a group. If not provided, the index will be used.
     * @see https://vuetifyjs.com/api/v-radio#props-value
     */
    value?: any;
  }

  export interface VRadioSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-radio#slots-default
     */
    default: Slotted;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-radio#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-radio#slots-message */
    message: Slotted<VRadiomessage>;
  }

  export interface VRadiomessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  const VRadio: GlobalComponent<VRadioProps, VRadioSlots>;

  export interface VRangeSliderProps {
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-append-icon
     */
    appendIcon?: string;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-background-color
     */
    backgroundColor?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-dense
     */
    dense?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-disabled
     */
    disabled?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-range-slider#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-range-slider#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Sets the height of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-height
     */
    height?: number | string;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-id
     */
    id?: string;
    /**
     * Reverse the label position. Works with **rtl**.
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-inverse-label
     */
    inverseLabel?: boolean;
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-range-slider#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-light
     */
    light?: boolean;
    /**
     * Specifies the height of the loader
     * @default 2
     * @see https://vuetifyjs.com/api/v-range-slider#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-loading
     */
    loading?: boolean | string;
    /**
     * Sets the maximum allowed value
     * @default 100
     * @see https://vuetifyjs.com/api/v-range-slider#props-max
     */
    max?: number | string;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-range-slider#props-messages
     */
    messages?: string | any[];
    /**
     * Sets the minimum allowed value
     * @default 0
     * @see https://vuetifyjs.com/api/v-range-slider#props-min
     */
    min?: number | string;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-readonly
     */
    readonly?: boolean;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-range-slider#props-rules
     */
    rules?: any[];
    /**
     * If greater than 0, sets step interval for ticks
     * @default 1
     * @see https://vuetifyjs.com/api/v-range-slider#props-step
     */
    step?: number | string;
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-range-slider#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Sets the thumb and thumb label color
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-thumb-color
     */
    thumbColor?: string;
    /**
     * Show thumb label. If `true` it shows label when using slider. If set to `'always'` it always shows label.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-thumb-label
     */
    thumbLabel?: boolean | string;
    /**
     * Controls the size of the thumb label.
     * @default 32
     * @see https://vuetifyjs.com/api/v-range-slider#props-thumb-size
     */
    thumbSize?: number | string;
    /**
     * When provided with Array<string>, will attempt to map the labels to each step in index order
     * @default []
     * @see https://vuetifyjs.com/api/v-range-slider#props-tick-labels
     */
    tickLabels?: any[];
    /**
     * Controls the size of **ticks**
     * @default 2
     * @see https://vuetifyjs.com/api/v-range-slider#props-tick-size
     */
    tickSize?: number | string;
    /**
     * Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks.
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-ticks
     */
    ticks?: boolean | string;
    /**
     * Sets the track's color
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-track-color
     */
    trackColor?: string;
    /**
     * Sets the track's fill color
     * @default undefined
     * @see https://vuetifyjs.com/api/v-range-slider#props-track-fill-color
     */
    trackFillColor?: string;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-range-slider#props-value
     */
    value?: any;
    /**
     * Changes slider direction to vertical
     * @default false
     * @see https://vuetifyjs.com/api/v-range-slider#props-vertical
     */
    vertical?: boolean;
  }

  export interface VRangeSliderSlots {
    /**
     * Adds an item inside the input and after input content
     * @see https://vuetifyjs.com/api/v-range-slider#slots-append
     */
    append: Slotted;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-range-slider#slots-default
     */
    default: Slotted;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-range-slider#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-range-slider#slots-message */
    message: Slotted<VRangeSlidermessage>;
    /**
     * Adds an item outside the input and before input content
     * @see https://vuetifyjs.com/api/v-range-slider#slots-prepend
     */
    prepend: Slotted;
    /**
     * Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)
     * @see https://vuetifyjs.com/api/v-range-slider#slots-progress
     */
    progress: Slotted;
    /**
     * Replaces the content inside the thumb label
     * @see https://vuetifyjs.com/api/v-range-slider#slots-thumb-label
     */
    thumbLabel: Slotted<VRangeSliderthumbLabel>;
  }

  export interface VRangeSlidermessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  export interface VRangeSliderthumbLabel {
    /** */
    value: number | string;
  }

  const VRangeSlider: GlobalComponent<VRangeSliderProps, VRangeSliderSlots>;

  export interface VRatingProps {
    /**
     * The color used for empty icons
     * @default 'accent'
     * @see https://vuetifyjs.com/api/v-rating#props-background-color
     */
    backgroundColor?: string;
    /**
     * Allows for the component to be cleared. Triggers when the icon containing the current value is clicked.
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-clearable
     */
    clearable?: boolean;
    /**
     * Milliseconds to wait before closing component.
     * @default 0
     * @see https://vuetifyjs.com/api/v-rating#props-close-delay
     */
    closeDelay?: number | string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-rating#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-dark
     */
    dark?: boolean;
    /**
     * Icons have a smaller size
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-dense
     */
    dense?: boolean;
    /**
     * The icon displayed when empty
     * @default '$ratingEmpty'
     * @see https://vuetifyjs.com/api/v-rating#props-empty-icon
     */
    emptyIcon?: string;
    /**
     * The icon displayed when full
     * @default '$ratingFull'
     * @see https://vuetifyjs.com/api/v-rating#props-full-icon
     */
    fullIcon?: string;
    /**
     * The icon displayed when half (requires **half-increments** prop)
     * @default '$ratingHalf'
     * @see https://vuetifyjs.com/api/v-rating#props-half-icon
     */
    halfIcon?: string;
    /**
     * Allows the selection of half increments
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-half-increments
     */
    halfIncrements?: boolean;
    /**
     * Provides visual feedback when hovering over icons
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-hover
     */
    hover?: boolean;
    /**
     * The **aria-label** used for icons
     * @default '$vuetify.rating.ariaLabel.icon'
     * @see https://vuetifyjs.com/api/v-rating#props-icon-label
     */
    iconLabel?: string;
    /**
     * Makes the component large.
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-large
     */
    large?: boolean;
    /**
     * The amount of ratings to show
     * @default 5
     * @see https://vuetifyjs.com/api/v-rating#props-length
     */
    length?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-light
     */
    light?: boolean;
    /**
     * Milliseconds to wait before opening component.
     * @default 0
     * @see https://vuetifyjs.com/api/v-rating#props-open-delay
     */
    openDelay?: number | string;
    /**
     * Removes all hover effects and pointer events
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-readonly
     */
    readonly?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default true
     * @see https://vuetifyjs.com/api/v-rating#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Sets the height and width of the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-rating#props-size
     */
    size?: number | string;
    /**
     * Makes the component small.
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-small
     */
    small?: boolean;
    /**
     * The rating value
     * @default 0
     * @see https://vuetifyjs.com/api/v-rating#props-value
     */
    value?: number;
    /**
     * Makes the component extra large.
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-x-large
     */
    xLarge?: boolean;
    /**
     * Makes the component extra small.
     * @default false
     * @see https://vuetifyjs.com/api/v-rating#props-x-small
     */
    xSmall?: boolean;
  }

  export interface VRatingSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-rating#slots-default
     */
    default: Slotted;
    /**
     * The slot for rendered items
     * @see https://vuetifyjs.com/api/v-rating#slots-item
     */
    item: Slotted<VRatingitem>;
  }

  export interface VRatingitem {
    /** */
    click: (i: number) => void;
    /** */
    index: number;
    /** */
    isFilled: boolean;
    /** */
    isHalfFilled?: boolean;
    /** */
    isHalfHovered?: boolean;
    /** */
    isHovered: boolean;
    /** */
    value: number;
  }

  const VRating: GlobalComponent<VRatingProps, VRatingSlots>;

  export interface VResponsiveProps {
    /**
     * Sets a base aspect ratio, calculated as width/height. This will only set a **minimum** height, the component can still grow if it has a lot of content.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-responsive#props-aspect-ratio
     */
    aspectRatio?: string | number;
    /**
     * Apply a custom class to the responsive content div.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-responsive#props-content-class
     */
    contentClass?: string;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-responsive#props-height
     */
    height?: number | string;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-responsive#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-responsive#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-responsive#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-responsive#props-min-width
     */
    minWidth?: number | string;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-responsive#props-width
     */
    width?: number | string;
  }

  export interface VResponsiveSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-responsive#slots-default
     */
    default: Slotted;
  }

  const VResponsive: GlobalComponent<VResponsiveProps, VResponsiveSlots>;

  export interface VSelectProps {
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default '$dropdown'
     * @see https://vuetifyjs.com/api/v-select#props-append-icon
     */
    appendIcon?: string;
    /**
     * Appends an icon to the outside the component's input, uses same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-append-outer-icon
     */
    appendOuterIcon?: string;
    /**
     * Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-attach
     */
    attach?: any;
    /**
     * Enables autofocus
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-autofocus
     */
    autofocus?: boolean;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-background-color
     */
    backgroundColor?: string;
    /**
     * Keeps a local _unique_ copy of all items that have been passed through the **items** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-cache-items
     */
    cacheItems?: boolean;
    /**
     * Changes display of selections to chips
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-chips
     */
    chips?: boolean;
    /**
     * Applied when using **clearable** and the input is dirty
     * @default '$clear'
     * @see https://vuetifyjs.com/api/v-select#props-clear-icon
     */
    clearIcon?: string;
    /**
     * Add input clear functionality, default icon is Material Design Icons **mdi-clear**
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-clearable
     */
    clearable?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-color
     */
    color?: string;
    /**
     * Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-counter
     */
    counter?: boolean | number | string;
    /**
     * @default null
     * @see https://vuetifyjs.com/api/v-select#props-counter-value
     */
    counterValue?: Function;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-dark
     */
    dark?: boolean;
    /**
     * Adds a remove icon to selected chips
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-deletable-chips
     */
    deletableChips?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-dense
     */
    dense?: boolean;
    /**
     * Disables keyboard lookup
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-disable-lookup
     */
    disableLookup?: boolean;
    /**
     * Disables the input
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-eager
     */
    eager?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-select#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-select#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Applies the alternate filled input style
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-filled
     */
    filled?: boolean;
    /**
     * Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-flat
     */
    flat?: boolean;
    /**
     * Designates input type as full-width
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-full-width
     */
    fullWidth?: boolean;
    /**
     * Sets the height of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-height
     */
    height?: number | string;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Do not display in the select menu items that are already selected
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-hide-selected
     */
    hideSelected?: boolean;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-id
     */
    id?: string;
    /**
     * Sets color of selected items
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-select#props-item-color
     */
    itemColor?: string;
    /**
     * Set property of **items**'s disabled value
     * @default disabled
     * @see https://vuetifyjs.com/api/v-select#props-item-disabled
     */
    itemDisabled?: string | any[] | Function;
    /**
     * Set property of **items**'s text value
     * @default text
     * @see https://vuetifyjs.com/api/v-select#props-item-text
     */
    itemText?: string | any[] | Function;
    /**
     * Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479)
     * @default value
     * @see https://vuetifyjs.com/api/v-select#props-item-value
     */
    itemValue?: string | any[] | Function;
    /**
     * Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the **item-text**, **item-value** and **item-disabled** props.  Objects that have a **header** or **divider** property are considered special cases and generate a list header or divider; these items are not selectable.
     * @default []
     * @see https://vuetifyjs.com/api/v-select#props-items
     */
    items?: any[];
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-select#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-light
     */
    light?: boolean;
    /**
     * Specifies the height of the loader
     * @default 2
     * @see https://vuetifyjs.com/api/v-select#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-loading
     */
    loading?: boolean | string;
    /**
     * Pass props through to the `v-menu` component. Accepts either a string for boolean props `menu-props="auto, overflowY"`, or an object `:menu-props="{ auto: true, overflowY: true }"`
     * @default {
     *   closeOnClick: false,
     *   closeOnContentClick: false,
     *   disableKeys: true,
     *   openOnClick: false,
     *   maxHeight: 304
     * }
     * @see https://vuetifyjs.com/api/v-select#props-menu-props
     */
    menuProps?: string | any[] | object;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-select#props-messages
     */
    messages?: string | any[];
    /**
     * Changes select to multiple. Accepts array for value
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-multiple
     */
    multiple?: boolean;
    /**
     * Display text when there is no data
     * @default '$vuetify.noDataText'
     * @see https://vuetifyjs.com/api/v-select#props-no-data-text
     */
    noDataText?: string;
    /**
     * When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-open-on-clear
     */
    openOnClear?: boolean;
    /**
     * Applies the outlined style to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-outlined
     */
    outlined?: boolean;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Forces placeholder to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-persistent-placeholder
     */
    persistentPlaceholder?: boolean;
    /**
     * Sets the input's placeholder text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-placeholder
     */
    placeholder?: string;
    /**
     * Displays prefix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-prefix
     */
    prefix?: string;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Prepends an icon inside the component's input, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-prepend-inner-icon
     */
    prependInnerIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-readonly
     */
    readonly?: boolean;
    /**
     * Changes the selection behavior to return the object directly rather than the value specified with **item-value**
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-return-object
     */
    returnObject?: boolean;
    /**
     * Reverses the input orientation
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-reverse
     */
    reverse?: boolean;
    /**
     * Adds a border radius to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-rounded
     */
    rounded?: boolean;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-select#props-rules
     */
    rules?: any[];
    /**
     * Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-shaped
     */
    shaped?: boolean;
    /**
     * Label does not move on focus/dirty
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-single-line
     */
    singleLine?: boolean;
    /**
     * Changes display of selections to chips with the **small** property
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-small-chips
     */
    smallChips?: boolean;
    /**
     * Changes the style of the input
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-solo
     */
    solo?: boolean;
    /**
     * Reduces element opacity until focused
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-solo-inverted
     */
    soloInverted?: boolean;
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-select#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Displays suffix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-select#props-suffix
     */
    suffix?: string;
    /**
     * Sets input type
     * @default 'text'
     * @see https://vuetifyjs.com/api/v-select#props-type
     */
    type?: string;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-select#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-select#props-value
     */
    value?: any;
    /**
     * The comparison algorithm used for values. [More info](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts)
     * @default (a: any, b: any): boolean
     * @see https://vuetifyjs.com/api/v-select#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VSelectSlots {
    /**
     * Adds an item inside the input and after input content
     * @see https://vuetifyjs.com/api/v-select#slots-append
     */
    append: Slotted;
    /**
     * Adds an item after menu content
     * @see https://vuetifyjs.com/api/v-select#slots-append-item
     */
    appendItem: Slotted;
    /**
     * Adds an item outside the input and after input content
     * @see https://vuetifyjs.com/api/v-select#slots-append-outer
     */
    appendOuter: Slotted;
    /** @see https://vuetifyjs.com/api/v-select#slots-counter */
    counter: Slotted<VSelectcounter>;
    /**
     * Define a custom item appearance
     * @see https://vuetifyjs.com/api/v-select#slots-item
     */
    item: Slotted<VSelectitem>;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-select#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-select#slots-message */
    message: Slotted<VSelectmessage>;
    /** @see https://vuetifyjs.com/api/v-select#slots-no-data */
    noData: Slotted;
    /**
     * Adds an item outside the input and before input content
     * @see https://vuetifyjs.com/api/v-select#slots-prepend
     */
    prepend: Slotted;
    /**
     * Adds an item inside the input and before input content
     * @see https://vuetifyjs.com/api/v-select#slots-prepend-inner
     */
    prependInner: Slotted;
    /**
     * Adds an item before menu content
     * @see https://vuetifyjs.com/api/v-select#slots-prepend-item
     */
    prependItem: Slotted;
    /**
     * Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)
     * @see https://vuetifyjs.com/api/v-select#slots-progress
     */
    progress: Slotted;
    /**
     * Define a custom selection appearance
     * @see https://vuetifyjs.com/api/v-select#slots-selection
     */
    selection: Slotted<VSelectselection>;
  }

  export interface VSelectcounter {
    /** */
    props: {
      dark: boolean;
      light: boolean;
      max: string | number;
      value: string;
    };
  }

  export interface VSelectitem {
    /** */
    parent: VueComponent;
    /** */
    item: object;
    /** */
    on: object;
    /** */
    attrs: object; // Only needed when providing your own v-list-item;
  }

  export interface VSelectmessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  export interface VSelectselection {
    /** */
    parent: VueComponent;
    /** */
    item: object;
    /** */
    index: number;
    /** */
    select: Function;
    /** */
    selected: boolean;
    /** */
    disabled: boolean;
  }

  const VSelect: GlobalComponent<VSelectProps, VSelectSlots>;

  export interface VSkeletonLoaderProps {
    /**
     * Remove the loading animation from the skeleton
     * @default false
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-boilerplate
     */
    boilerplate?: boolean;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-dark
     */
    dark?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-elevation
     */
    elevation?: number | string;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-height
     */
    height?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-light
     */
    light?: boolean;
    /**
     * Applies a loading animation with a on-hover loading cursor. A value of **false** will only work when there is content in the `default` slot.
     * @default false
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-loading
     */
    loading?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-min-width
     */
    minWidth?: number | string;
    /**
     * Removes the component's border-radius
     * @default false
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-tile
     */
    tile?: boolean;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-transition
     */
    transition?: string;
    /**
     * A string delimited list of skeleton components to create such as `type="text@3"` or `type="card, list-item"`. Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as **article@3** and **paragraph@2** which will generate 3 _article_ skeletons and 2 _paragraph_ skeletons. Please see below for a list of available pre-defined options.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-type
     */
    type?: string;
    /**
     * A custom types object that will be combined with the pre-defined options. For a list of available pre-defined options, see the **type** prop.
     * @default {}
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-types
     */
    types?: object;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-skeleton-loader#props-width
     */
    width?: number | string;
  }

  export interface VSkeletonLoaderSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-skeleton-loader#slots-default
     */
    default: Slotted;
  }

  const VSkeletonLoader: GlobalComponent<VSkeletonLoaderProps, VSkeletonLoaderSlots>;

  export interface VSliderProps {
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-append-icon
     */
    appendIcon?: string;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-background-color
     */
    backgroundColor?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-dense
     */
    dense?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-disabled
     */
    disabled?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-slider#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-slider#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Sets the height of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-height
     */
    height?: number | string;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-id
     */
    id?: string;
    /**
     * Reverse the label position. Works with **rtl**.
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-inverse-label
     */
    inverseLabel?: boolean;
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-slider#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-light
     */
    light?: boolean;
    /**
     * Specifies the height of the loader
     * @default 2
     * @see https://vuetifyjs.com/api/v-slider#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-loading
     */
    loading?: boolean | string;
    /**
     * Sets the maximum allowed value
     * @default 100
     * @see https://vuetifyjs.com/api/v-slider#props-max
     */
    max?: number | string;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-slider#props-messages
     */
    messages?: string | any[];
    /**
     * Sets the minimum allowed value
     * @default 0
     * @see https://vuetifyjs.com/api/v-slider#props-min
     */
    min?: number | string;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-readonly
     */
    readonly?: boolean;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-slider#props-rules
     */
    rules?: any[];
    /**
     * If greater than 0, sets step interval for ticks
     * @default 1
     * @see https://vuetifyjs.com/api/v-slider#props-step
     */
    step?: number | string;
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-slider#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Sets the thumb and thumb label color
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-thumb-color
     */
    thumbColor?: string;
    /**
     * Show thumb label. If `true` it shows label when using slider. If set to `'always'` it always shows label.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-thumb-label
     */
    thumbLabel?: boolean | string;
    /**
     * Controls the size of the thumb label.
     * @default 32
     * @see https://vuetifyjs.com/api/v-slider#props-thumb-size
     */
    thumbSize?: number | string;
    /**
     * When provided with Array<string>, will attempt to map the labels to each step in index order
     * @default []
     * @see https://vuetifyjs.com/api/v-slider#props-tick-labels
     */
    tickLabels?: any[];
    /**
     * Controls the size of **ticks**
     * @default 2
     * @see https://vuetifyjs.com/api/v-slider#props-tick-size
     */
    tickSize?: number | string;
    /**
     * Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks.
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-ticks
     */
    ticks?: boolean | string;
    /**
     * Sets the track's color
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-track-color
     */
    trackColor?: string;
    /**
     * Sets the track's fill color
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slider#props-track-fill-color
     */
    trackFillColor?: string;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-slider#props-value
     */
    value?: any;
    /**
     * Changes slider direction to vertical
     * @default false
     * @see https://vuetifyjs.com/api/v-slider#props-vertical
     */
    vertical?: boolean;
  }

  export interface VSliderSlots {
    /**
     * Adds an item inside the input and after input content
     * @see https://vuetifyjs.com/api/v-slider#slots-append
     */
    append: Slotted;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-slider#slots-default
     */
    default: Slotted;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-slider#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-slider#slots-message */
    message: Slotted<VSlidermessage>;
    /**
     * Adds an item outside the input and before input content
     * @see https://vuetifyjs.com/api/v-slider#slots-prepend
     */
    prepend: Slotted;
    /**
     * Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)
     * @see https://vuetifyjs.com/api/v-slider#slots-progress
     */
    progress: Slotted;
    /**
     * Replaces the content inside the thumb label
     * @see https://vuetifyjs.com/api/v-slider#slots-thumb-label
     */
    thumbLabel: Slotted<VSliderthumbLabel>;
  }

  export interface VSlidermessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  export interface VSliderthumbLabel {
    /** */
    value: number | string;
  }

  const VSlider: GlobalComponent<VSliderProps, VSliderSlots>;

  export interface VSlideGroupProps {
    /**
     * The **active-class** applied to children when they are activated.
     * @default 'v-slide-item--active'
     * @see https://vuetifyjs.com/api/v-slide-group#props-active-class
     */
    activeClass?: string;
    /**
     * Forces the selected component to be centered
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-group#props-center-active
     */
    centerActive?: boolean;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-group#props-dark
     */
    dark?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-group#props-light
     */
    light?: boolean;
    /**
     * Forces a value to always be selected (if available).
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-group#props-mandatory
     */
    mandatory?: boolean;
    /**
     * Sets a maximum number of selections that can be made.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slide-group#props-max
     */
    max?: number | string;
    /**
     * Sets the designated mobile breakpoint for the component.
     * @see https://vuetifyjs.com/api/v-slide-group#props-mobile-breakpoint
     */
    mobileBreakpoint?: number | string;
    /**
     * Allow multiple selections. The **value** prop must be an _array_.
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-group#props-multiple
     */
    multiple?: boolean;
    /**
     * The appended slot when arrows are shown
     * @default '$next'
     * @see https://vuetifyjs.com/api/v-slide-group#props-next-icon
     */
    nextIcon?: string;
    /**
     * The prepended slot when arrows are shown
     * @default '$prev'
     * @see https://vuetifyjs.com/api/v-slide-group#props-prev-icon
     */
    prevIcon?: string;
    /**
     * Change when the overflow arrow indicators are shown. By **default**, arrows *always* display on Desktop when the container is overflowing. When the container overflows on mobile, arrows are not shown by default. A **show-arrows** value of `true` allows these arrows to show on Mobile if the container overflowing. A value of `desktop` *always* displays arrows on Desktop while a value of `mobile` always displays arrows on Mobile. A value of `always` always displays arrows on Desktop *and* Mobile. Find more information on how to customize breakpoint thresholds on the [breakpoints page](/customizing/breakpoints).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slide-group#props-show-arrows
     */
    showArrows?: boolean | string;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-slide-group#props-tag
     */
    tag?: string;
    /**
     * The designated model value for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slide-group#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-slide-group#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VSlideGroupSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-slide-group#slots-default
     */
    default: Slotted;
    /**
     * The next slot
     * @see https://vuetifyjs.com/api/v-slide-group#slots-next
     */
    next: Slotted;
    /**
     * The prev slot
     * @see https://vuetifyjs.com/api/v-slide-group#slots-prev
     */
    prev: Slotted;
  }

  const VSlideGroup: GlobalComponent<VSlideGroupProps, VSlideGroupSlots>;

  export interface VSlideItemProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @see https://vuetifyjs.com/api/v-slide-item#props-active-class
     */
    activeClass?: string;
    /**
     * Removes the ability to click or target the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-item#props-disabled
     */
    disabled?: boolean;
    /**
     * The value used when the component is selected in a group. If not provided, the index will be used.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slide-item#props-value
     */
    value?: any;
  }

  export interface VSlideItemSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-slide-item#slots-default
     */
    default: Slotted<VSlideItemdefault>;
  }

  export interface VSlideItemdefault {
    /** */
    active: boolean;
    /** */
    toggle: Function;
  }

  const VSlideItem: GlobalComponent<VSlideItemProps, VSlideItemSlots>;

  export interface VSnackbarProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-absolute
     */
    absolute?: boolean;
    /**
     * Respects boundaries of—and will not overlap with—other `app` components like `v-app-bar`, `v-navigation-drawer`, and `v-footer`.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-app
     */
    app?: boolean;
    /**
     * Aligns the component towards the bottom.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-bottom
     */
    bottom?: boolean;
    /**
     * Positions the snackbar in the center of the screen, (x and y axis).
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-centered
     */
    centered?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-color
     */
    color?: string;
    /**
     * Apply a custom class to the snackbar content
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-content-class
     */
    contentClass?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-dark
     */
    dark?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-elevation
     */
    elevation?: number | string;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-height
     */
    height?: number | string;
    /**
     * Aligns the component towards the left.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-left
     */
    left?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-min-width
     */
    minWidth?: number | string;
    /**
     * Gives the snackbar a larger minimum height.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-multi-line
     */
    multiLine?: boolean;
    /**
     * Removes elevation (box-shadow) and adds a *thin* border.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-outlined
     */
    outlined?: boolean;
    /**
     * Aligns the component towards the right.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-right
     */
    right?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-shaped
     */
    shaped?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-snackbar#props-tag
     */
    tag?: string;
    /**
     * Applies the defined **color** to text and a low opacity background of the same.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-text
     */
    text?: boolean;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-tile
     */
    tile?: boolean;
    /**
     * Time (in milliseconds) to wait until snackbar is automatically hidden.  Use `-1` to keep open indefinitely (`0` in version < 2.3 ). It is recommended for this number to be between `4000` and `10000`. Changes to this property will reset the timeout.
     * @default 5000
     * @see https://vuetifyjs.com/api/v-snackbar#props-timeout
     */
    timeout?: number | string;
    /**
     * Aligns the content towards the top.
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-top
     */
    top?: boolean;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default v-snack-transition
     * @see https://vuetifyjs.com/api/v-snackbar#props-transition
     */
    transition?: boolean | string;
    /**
     * Controls whether the component is visible or hidden.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-value
     */
    value?: any;
    /**
     * Stacks snackbar content on top of the actions (button).
     * @default false
     * @see https://vuetifyjs.com/api/v-snackbar#props-vertical
     */
    vertical?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-snackbar#props-width
     */
    width?: number | string;
  }

  export interface VSnackbarSlots {
    /**
     * Used to bind styles to [v-btn](/components/buttons) to match MD2 specification.
     * @see https://vuetifyjs.com/api/v-snackbar#slots-action
     */
    action: Slotted<VSnackbaraction>;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-snackbar#slots-default
     */
    default: Slotted;
  }

  export interface VSnackbaraction {
    /** */
    attrs: object;
  }

  const VSnackbar: GlobalComponent<VSnackbarProps, VSnackbarSlots>;

  export interface VSparklineProps {
    /**
     * Trace the length of the line when first rendered
     * @default false
     * @see https://vuetifyjs.com/api/v-sparkline#props-auto-draw
     */
    autoDraw?: boolean;
    /**
     * Amount of time (in ms) to run the trace animation
     * @default 2000
     * @see https://vuetifyjs.com/api/v-sparkline#props-auto-draw-duration
     */
    autoDrawDuration?: number;
    /**
     * The easing function to use for the trace animation
     * @default 'ease'
     * @see https://vuetifyjs.com/api/v-sparkline#props-auto-draw-easing
     */
    autoDrawEasing?: string;
    /**
     * Automatically expand bars to use space efficiently
     * @default false
     * @see https://vuetifyjs.com/api/v-sparkline#props-auto-line-width
     */
    autoLineWidth?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-sparkline#props-color
     */
    color?: string;
    /**
     * Using the **fill** property allows you to better customize the look and feel of your sparkline.
     * @default false
     * @see https://vuetifyjs.com/api/v-sparkline#props-fill
     */
    fill?: boolean;
    /**
     * An array of colors to use as a linear-gradient
     * @default []
     * @see https://vuetifyjs.com/api/v-sparkline#props-gradient
     */
    gradient?: any[];
    /**
     * The direction the gradient should run
     * @default 'top'
     * @see https://vuetifyjs.com/api/v-sparkline#props-gradient-direction
     */
    gradientDirection?: string;
    /**
     * Height of the SVG trendline or bars
     * @default 75
     * @see https://vuetifyjs.com/api/v-sparkline#props-height
     */
    height?: string | number;
    /**
     * The label font size
     * @default 7
     * @see https://vuetifyjs.com/api/v-sparkline#props-label-size
     */
    labelSize?: number | string;
    /**
     * An array of string labels that correspond to the same index as its data counterpart
     * @default []
     * @see https://vuetifyjs.com/api/v-sparkline#props-labels
     */
    labels?: any[];
    /**
     * The thickness of the line, in px
     * @default 4
     * @see https://vuetifyjs.com/api/v-sparkline#props-line-width
     */
    lineWidth?: string | number;
    /**
     * Low `smooth` or high `line-width` values may result in cropping, increase padding to compensate
     * @default 8
     * @see https://vuetifyjs.com/api/v-sparkline#props-padding
     */
    padding?: string | number;
    /**
     * Show labels below each data point
     * @default false
     * @see https://vuetifyjs.com/api/v-sparkline#props-show-labels
     */
    showLabels?: boolean;
    /**
     * Number of px to use as a corner radius. `true` defaults to 8, `false` is 0
     * @default false
     * @see https://vuetifyjs.com/api/v-sparkline#props-smooth
     */
    smooth?: boolean | number | string;
    /**
     * Choose between a trendline or bars
     * @default 'trend'
     * @see https://vuetifyjs.com/api/v-sparkline#props-type
     */
    type?: string;
    /**
     * An array of numbers.
     * @default []
     * @see https://vuetifyjs.com/api/v-sparkline#props-value
     */
    value?: any[];
    /**
     * Width of the SVG trendline or bars
     * @default 300
     * @see https://vuetifyjs.com/api/v-sparkline#props-width
     */
    width?: number | string;
  }

  export interface VSparklineSlots {
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-sparkline#slots-label
     */
    label: Slotted;
  }

  const VSparkline: GlobalComponent<VSparklineProps, VSparklineSlots>;

  export interface VSpeedDialProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-speed-dial#props-absolute
     */
    absolute?: boolean;
    /**
     * Aligns the component towards the bottom.
     * @default false
     * @see https://vuetifyjs.com/api/v-speed-dial#props-bottom
     */
    bottom?: boolean;
    /**
     * Direction in which speed-dial content will show. Possible values are `top`, `bottom`, `left`, `right`.
     * @default 'top'
     * @see https://vuetifyjs.com/api/v-speed-dial#props-direction
     */
    direction?: string;
    /**
     * Applies **position: fixed** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-speed-dial#props-fixed
     */
    fixed?: boolean;
    /**
     * Aligns the component towards the left.
     * @default false
     * @see https://vuetifyjs.com/api/v-speed-dial#props-left
     */
    left?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-speed-dial#props-mode
     */
    mode?: string;
    /**
     * Opens speed-dial on hover
     * @default false
     * @see https://vuetifyjs.com/api/v-speed-dial#props-open-on-hover
     */
    openOnHover?: boolean;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-speed-dial#props-origin
     */
    origin?: string;
    /**
     * Aligns the component towards the right.
     * @default false
     * @see https://vuetifyjs.com/api/v-speed-dial#props-right
     */
    right?: boolean;
    /**
     * Aligns the content towards the top.
     * @default false
     * @see https://vuetifyjs.com/api/v-speed-dial#props-top
     */
    top?: boolean;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default 'scale-transition'
     * @see https://vuetifyjs.com/api/v-speed-dial#props-transition
     */
    transition?: string;
    /**
     * Controls whether the component is visible or hidden.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-speed-dial#props-value
     */
    value?: any;
  }

  export interface VSpeedDialSlots {
    /**
     * When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation
     * @see https://vuetifyjs.com/api/v-speed-dial#slots-activator
     */
    activator: Slotted;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-speed-dial#slots-default
     */
    default: Slotted;
  }

  const VSpeedDial: GlobalComponent<VSpeedDialProps, VSpeedDialSlots>;

  export interface VStepperProps {
    /**
     * Places the labels beneath the step
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper#props-alt-labels
     */
    altLabels?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper#props-dark
     */
    dark?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper#props-elevation
     */
    elevation?: number | string;
    /**
     * Removes the stepper's elevation.
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper#props-flat
     */
    flat?: boolean;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper#props-height
     */
    height?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper#props-min-width
     */
    minWidth?: number | string;
    /**
     * Allow user to jump to any step
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper#props-non-linear
     */
    nonLinear?: boolean;
    /**
     * Removes elevation (box-shadow) and adds a *thin* border.
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper#props-outlined
     */
    outlined?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper#props-shaped
     */
    shaped?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-stepper#props-tag
     */
    tag?: string;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper#props-tile
     */
    tile?: boolean;
    /**
     * The designated model value for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper#props-value
     */
    value?: any;
    /**
     * Display steps vertically
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper#props-vertical
     */
    vertical?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper#props-width
     */
    width?: number | string;
  }

  export interface VStepperSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-stepper#slots-default
     */
    default: Slotted;
  }

  const VStepper: GlobalComponent<VStepperProps, VStepperSlots>;

  export interface VStepperContentProps {
    /**
     * Sets step to associate the content to
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper-content#props-step
     */
    step?: number | string;
  }

  export interface VStepperContentSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-stepper-content#slots-default
     */
    default: Slotted;
  }

  const VStepperContent: GlobalComponent<VStepperContentProps, VStepperContentSlots>;

  export interface VStepperStepProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-stepper-step#props-color
     */
    color?: string;
    /**
     * Marks step as complete
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper-step#props-complete
     */
    complete?: boolean;
    /**
     * Icon to display when step is marked as completed
     * @default '$complete'
     * @see https://vuetifyjs.com/api/v-stepper-step#props-complete-icon
     */
    completeIcon?: string;
    /**
     * Icon to display when step is editable
     * @default '$edit'
     * @see https://vuetifyjs.com/api/v-stepper-step#props-edit-icon
     */
    editIcon?: string;
    /**
     * Marks step as editable
     * @default false
     * @see https://vuetifyjs.com/api/v-stepper-step#props-editable
     */
    editable?: boolean;
    /**
     * Icon to display when step has an error
     * @default '$error'
     * @see https://vuetifyjs.com/api/v-stepper-step#props-error-icon
     */
    errorIcon?: string;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-stepper-step#props-rules
     */
    rules?: any[];
    /**
     * Content to display inside step circle
     * @default undefined
     * @see https://vuetifyjs.com/api/v-stepper-step#props-step
     */
    step?: number | string;
  }

  export interface VStepperStepSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-stepper-step#slots-default
     */
    default: Slotted;
  }

  const VStepperStep: GlobalComponent<VStepperStepProps, VStepperStepSlots>;

  export interface VStepperHeaderProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-stepper-header#props-tag
     */
    tag?: string;
  }

  export interface VStepperHeaderSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-stepper-header#slots-default
     */
    default: Slotted;
  }

  const VStepperHeader: GlobalComponent<VStepperHeaderProps, VStepperHeaderSlots>;

  export interface VStepperItemsProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-stepper-items#props-tag
     */
    tag?: string;
  }

  export interface VStepperItemsSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-stepper-items#slots-default
     */
    default: Slotted;
  }

  const VStepperItems: GlobalComponent<VStepperItemsProps, VStepperItemsSlots>;

  export interface VSubheaderProps {
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-subheader#props-dark
     */
    dark?: boolean;
    /**
     * Adds indentation (72px)
     * @default false
     * @see https://vuetifyjs.com/api/v-subheader#props-inset
     */
    inset?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-subheader#props-light
     */
    light?: boolean;
  }

  export interface VSubheaderSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-subheader#slots-default
     */
    default: Slotted;
  }

  const VSubheader: GlobalComponent<VSubheaderProps, VSubheaderSlots>;

  export interface VSwitchProps {
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-switch#props-append-icon
     */
    appendIcon?: string;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-switch#props-background-color
     */
    backgroundColor?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-switch#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-dense
     */
    dense?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-disabled
     */
    disabled?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-switch#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-switch#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Sets value for falsy state
     * @default undefined
     * @see https://vuetifyjs.com/api/v-switch#props-false-value
     */
    falseValue?: any;
    /**
     * Display component without elevation. Default elevation for thumb is 4dp, `flat` resets it
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-flat
     */
    flat?: boolean;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-switch#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-switch#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-switch#props-id
     */
    id?: string;
    /**
     * The **v-model** bound value
     * @default undefined
     * @see https://vuetifyjs.com/api/v-switch#props-input-value
     */
    inputValue?: any;
    /**
     * Enlarge the `v-switch` track to encompass the thumb
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-inset
     */
    inset?: boolean;
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-switch#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-light
     */
    light?: boolean;
    /**
     * Displays circular progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-loading
     */
    loading?: boolean | string;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-switch#props-messages
     */
    messages?: string | any[];
    /**
     * Changes expected model to an array
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-multiple
     */
    multiple?: boolean;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-switch#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-readonly
     */
    readonly?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default true
     * @see https://vuetifyjs.com/api/v-switch#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-switch#props-rules
     */
    rules?: any[];
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-switch#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Sets value for truthy state
     * @default undefined
     * @see https://vuetifyjs.com/api/v-switch#props-true-value
     */
    trueValue?: any;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-switch#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-switch#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-switch#props-value-comparator
     */
    valueComparator?: Function;
  }

  export interface VSwitchSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-switch#slots-default
     */
    default: Slotted;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-switch#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-switch#slots-message */
    message: Slotted<VSwitchmessage>;
  }

  export interface VSwitchmessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  const VSwitch: GlobalComponent<VSwitchProps, VSwitchSlots>;

  export interface VSystemBarProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-system-bar#props-absolute
     */
    absolute?: boolean;
    /**
     * Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop
     * @default false
     * @see https://vuetifyjs.com/api/v-system-bar#props-app
     */
    app?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-system-bar#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-system-bar#props-dark
     */
    dark?: boolean;
    /**
     * Applies **position: fixed** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-system-bar#props-fixed
     */
    fixed?: boolean;
    /**
     * Sets the height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-system-bar#props-height
     */
    height?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-system-bar#props-light
     */
    light?: boolean;
    /**
     * Reduces the system bar opacity.
     * @default false
     * @see https://vuetifyjs.com/api/v-system-bar#props-lights-out
     */
    lightsOut?: boolean;
    /**
     * Increases the system bar height to 32px (24px default).
     * @default false
     * @see https://vuetifyjs.com/api/v-system-bar#props-window
     */
    window?: boolean;
  }

  export interface VSystemBarSlots {}

  const VSystemBar: GlobalComponent<VSystemBarProps, VSystemBarSlots>;

  export interface VTabsProps {
    /**
     * The **active-class** applied to children when they are activated.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs#props-active-class
     */
    activeClass?: string;
    /**
     * Make `v-tabs` lined up with the toolbar title
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-align-with-title
     */
    alignWithTitle?: boolean;
    /**
     * Changes the background color of the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs#props-background-color
     */
    backgroundColor?: string;
    /**
     * Forces the selected tab to be centered
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-center-active
     */
    centerActive?: boolean;
    /**
     * Centers the tabs
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-centered
     */
    centered?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-dark
     */
    dark?: boolean;
    /**
     * `v-tabs-item` min-width 160px, max-width 360px
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-fixed-tabs
     */
    fixedTabs?: boolean;
    /**
     * Force `v-tab`'s to take up all available space
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-grow
     */
    grow?: boolean;
    /**
     * Sets the height of the tabs bar
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs#props-height
     */
    height?: number | string;
    /**
     * Hide's the generated `v-tabs-slider`
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-hide-slider
     */
    hideSlider?: boolean;
    /**
     * Will stack icon and text vertically
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-icons-and-text
     */
    iconsAndText?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-light
     */
    light?: boolean;
    /**
     * Sets the designated mobile breakpoint for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs#props-mobile-breakpoint
     */
    mobileBreakpoint?: string | number;
    /**
     * Right pagination icon
     * @default '$next'
     * @see https://vuetifyjs.com/api/v-tabs#props-next-icon
     */
    nextIcon?: string;
    /**
     * Does not require an active item. Useful when using `v-tab` as a `router-link`
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-optional
     */
    optional?: boolean;
    /**
     * Left pagination icon
     * @default '$prev'
     * @see https://vuetifyjs.com/api/v-tabs#props-prev-icon
     */
    prevIcon?: string;
    /**
     * Aligns tabs to the right
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-right
     */
    right?: boolean;
    /**
     * Show pagination arrows if the tab items overflow their container. For mobile devices, arrows will only display when using this prop.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs#props-show-arrows
     */
    showArrows?: boolean | string;
    /**
     * Changes the background color of an auto-generated `v-tabs-slider`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs#props-slider-color
     */
    sliderColor?: string;
    /**
     * Changes the size of the slider, **height** for horizontal, **width** for vertical.
     * @default 2
     * @see https://vuetifyjs.com/api/v-tabs#props-slider-size
     */
    sliderSize?: number | string;
    /**
     * The designated model value for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs#props-value
     */
    value?: any;
    /**
     * Stacks tabs on top of each other vertically.
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs#props-vertical
     */
    vertical?: boolean;
  }

  export interface VTabsSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-tabs#slots-default
     */
    default: Slotted;
  }

  const VTabs: GlobalComponent<VTabsProps, VTabsSlots>;

  export interface VTabProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @see https://vuetifyjs.com/api/v-tab#props-active-class
     */
    activeClass?: string;
    /**
     * Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-tab#props-append
     */
    append?: boolean;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-tab#props-dark
     */
    dark?: boolean;
    /**
     * Removes the ability to click or target the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-tab#props-disabled
     */
    disabled?: boolean;
    /**
     * Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-tab#props-exact
     */
    exact?: boolean;
    /**
     * Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab#props-exact-active-class
     */
    exactActiveClass?: string;
    /**
     * Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-tab#props-exact-path
     */
    exactPath?: boolean;
    /**
     * Designates the component as anchor and applies the **href** attribute.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab#props-href
     */
    href?: string | object;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-tab#props-light
     */
    light?: boolean;
    /**
     * Designates that the component is a link. This is automatic when using the **href** or **to** prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-tab#props-link
     */
    link?: boolean;
    /**
     * Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).
     * @default false
     * @see https://vuetifyjs.com/api/v-tab#props-nuxt
     */
    nuxt?: boolean;
    /**
     * Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.
     * @default false
     * @see https://vuetifyjs.com/api/v-tab#props-replace
     */
    replace?: boolean;
    /**
     * Applies the [v-ripple](/directives/ripple) directive.
     * @default true
     * @see https://vuetifyjs.com/api/v-tab#props-ripple
     */
    ripple?: boolean | object;
    /**
     * Specify a custom tag used on the root element.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab#props-tag
     */
    tag?: string;
    /**
     * Designates the target attribute. This should only be applied when using the **href** prop.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab#props-target
     */
    target?: string;
    /**
     * Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab#props-to
     */
    to?: string | object;
  }

  export interface VTabSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-tab#slots-default
     */
    default: Slotted;
  }

  const VTab: GlobalComponent<VTabProps, VTabSlots>;

  export interface VTabItemProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @see https://vuetifyjs.com/api/v-tab-item#props-active-class
     */
    activeClass?: string;
    /**
     * Removes the ability to click or target the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-tab-item#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-tab-item#props-eager
     */
    eager?: boolean;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab-item#props-id
     */
    id?: string;
    /**
     * Sets the reverse transition
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab-item#props-reverse-transition
     */
    reverseTransition?: boolean | string;
    /**
     * The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab-item#props-transition
     */
    transition?: boolean | string;
    /**
     * Sets the value of the tab. If not provided, the index will be used.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab-item#props-value
     */
    value?: any;
  }

  export interface VTabItemSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-tab-item#slots-default
     */
    default: Slotted;
  }

  const VTabItem: GlobalComponent<VTabItemProps, VTabItemSlots>;

  export interface VTabsItemsProps {
    /**
     * The **active-class** applied to children when they are activated.
     * @default 'v-window-item--active'
     * @see https://vuetifyjs.com/api/v-tabs-items#props-active-class
     */
    activeClass?: string;
    /**
     * If `true`, window will "wrap around" from the last item to the first, and from the first item to the last
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs-items#props-continuous
     */
    continuous?: boolean;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs-items#props-dark
     */
    dark?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs-items#props-light
     */
    light?: boolean;
    /**
     * Forces a value to always be selected (if available).
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs-items#props-mandatory
     */
    mandatory?: boolean;
    /**
     * Sets a maximum number of selections that can be made.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs-items#props-max
     */
    max?: number | string;
    /**
     * Allow multiple selections. The **value** prop must be an _array_.
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs-items#props-multiple
     */
    multiple?: boolean;
    /**
     * Icon used for the "next" button if `show-arrows` is `true`
     * @default $next
     * @see https://vuetifyjs.com/api/v-tabs-items#props-next-icon
     */
    nextIcon?: boolean | string;
    /**
     * Icon used for the "prev" button if `show-arrows` is `true`
     * @default $prev
     * @see https://vuetifyjs.com/api/v-tabs-items#props-prev-icon
     */
    prevIcon?: boolean | string;
    /**
     * Reverse the normal transition direction.
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs-items#props-reverse
     */
    reverse?: boolean;
    /**
     * Display the "next" and "prev" buttons
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs-items#props-show-arrows
     */
    showArrows?: boolean;
    /**
     * Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set.
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs-items#props-show-arrows-on-hover
     */
    showArrowsOnHover?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-tabs-items#props-tag
     */
    tag?: string;
    /**
     * Provide a custom **left** and **right** function when swiped left or right.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs-items#props-touch
     */
    touch?: object;
    /**
     * Disable touch support.
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs-items#props-touchless
     */
    touchless?: boolean;
    /**
     * The designated model value for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs-items#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-tabs-items#props-value-comparator
     */
    valueComparator?: Function;
    /**
     * Uses a vertical transition when changing windows.
     * @default false
     * @see https://vuetifyjs.com/api/v-tabs-items#props-vertical
     */
    vertical?: boolean;
  }

  export interface VTabsItemsSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-tabs-items#slots-default
     */
    default: Slotted;
  }

  const VTabsItems: GlobalComponent<VTabsItemsProps, VTabsItemsSlots>;

  export interface VTabsSliderProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tabs-slider#props-color
     */
    color?: string;
  }

  export interface VTabsSliderSlots {}

  const VTabsSlider: GlobalComponent<VTabsSliderProps, VTabsSliderSlots>;

  export interface VTextareaProps {
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-append-icon
     */
    appendIcon?: string;
    /**
     * Appends an icon to the outside the component's input, uses same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-append-outer-icon
     */
    appendOuterIcon?: string;
    /**
     * Automatically grow the textarea depending on amount of text
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-auto-grow
     */
    autoGrow?: boolean;
    /**
     * Enables autofocus
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-autofocus
     */
    autofocus?: boolean;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-background-color
     */
    backgroundColor?: string;
    /**
     * Applied when using **clearable** and the input is dirty
     * @default '$clear'
     * @see https://vuetifyjs.com/api/v-textarea#props-clear-icon
     */
    clearIcon?: string;
    /**
     * Add input clear functionality, default icon is Material Design Icons **mdi-clear**
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-clearable
     */
    clearable?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-color
     */
    color?: string;
    /**
     * Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-counter
     */
    counter?: boolean | number | string;
    /**
     * @default null
     * @see https://vuetifyjs.com/api/v-textarea#props-counter-value
     */
    counterValue?: Function;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-dense
     */
    dense?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-disabled
     */
    disabled?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-textarea#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-textarea#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Applies the alternate filled input style
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-filled
     */
    filled?: boolean;
    /**
     * Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-flat
     */
    flat?: boolean;
    /**
     * Designates input type as full-width
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-full-width
     */
    fullWidth?: boolean;
    /**
     * Sets the height of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-height
     */
    height?: number | string;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-id
     */
    id?: string;
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-textarea#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-light
     */
    light?: boolean;
    /**
     * Specifies the height of the loader
     * @default 2
     * @see https://vuetifyjs.com/api/v-textarea#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-loading
     */
    loading?: boolean | string;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-textarea#props-messages
     */
    messages?: string | any[];
    /**
     * Remove resize handle
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-no-resize
     */
    noResize?: boolean;
    /**
     * Applies the outlined style to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-outlined
     */
    outlined?: boolean;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Forces placeholder to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-persistent-placeholder
     */
    persistentPlaceholder?: boolean;
    /**
     * Sets the input's placeholder text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-placeholder
     */
    placeholder?: string;
    /**
     * Displays prefix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-prefix
     */
    prefix?: string;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Prepends an icon inside the component's input, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-prepend-inner-icon
     */
    prependInnerIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-readonly
     */
    readonly?: boolean;
    /**
     * Reverses the input orientation
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-reverse
     */
    reverse?: boolean;
    /**
     * Adds a border radius to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-rounded
     */
    rounded?: boolean;
    /**
     * Height value for each row. Requires the use of the **auto-grow** prop.
     * @default 24
     * @see https://vuetifyjs.com/api/v-textarea#props-row-height
     */
    rowHeight?: number | string;
    /**
     * Default row count
     * @default 5
     * @see https://vuetifyjs.com/api/v-textarea#props-rows
     */
    rows?: number | string;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-textarea#props-rules
     */
    rules?: any[];
    /**
     * Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-shaped
     */
    shaped?: boolean;
    /**
     * Label does not move on focus/dirty
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-single-line
     */
    singleLine?: boolean;
    /**
     * Changes the style of the input
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-solo
     */
    solo?: boolean;
    /**
     * Reduces element opacity until focused
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-solo-inverted
     */
    soloInverted?: boolean;
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-textarea#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Displays suffix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-textarea#props-suffix
     */
    suffix?: string;
    /**
     * Sets input type
     * @default 'text'
     * @see https://vuetifyjs.com/api/v-textarea#props-type
     */
    type?: string;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-textarea#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-textarea#props-value
     */
    value?: any;
  }

  export interface VTextareaSlots {
    /**
     * Adds an item inside the input and after input content
     * @see https://vuetifyjs.com/api/v-textarea#slots-append
     */
    append: Slotted;
    /**
     * Adds an item outside the input and after input content
     * @see https://vuetifyjs.com/api/v-textarea#slots-append-outer
     */
    appendOuter: Slotted;
    /** @see https://vuetifyjs.com/api/v-textarea#slots-counter */
    counter: Slotted<VTextareacounter>;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-textarea#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-textarea#slots-message */
    message: Slotted<VTextareamessage>;
    /**
     * Adds an item outside the input and before input content
     * @see https://vuetifyjs.com/api/v-textarea#slots-prepend
     */
    prepend: Slotted;
    /**
     * Adds an item inside the input and before input content
     * @see https://vuetifyjs.com/api/v-textarea#slots-prepend-inner
     */
    prependInner: Slotted;
    /**
     * Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)
     * @see https://vuetifyjs.com/api/v-textarea#slots-progress
     */
    progress: Slotted;
  }

  export interface VTextareacounter {
    /** */
    props: {
      dark: boolean;
      light: boolean;
      max: string | number;
      value: string;
    };
  }

  export interface VTextareamessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  const VTextarea: GlobalComponent<VTextareaProps, VTextareaSlots>;

  export interface VTextFieldProps {
    /**
     * Appends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-append-icon
     */
    appendIcon?: string;
    /**
     * Appends an icon to the outside the component's input, uses same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-append-outer-icon
     */
    appendOuterIcon?: string;
    /**
     * Enables autofocus
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-autofocus
     */
    autofocus?: boolean;
    /**
     * Changes the background-color of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-background-color
     */
    backgroundColor?: string;
    /**
     * Applied when using **clearable** and the input is dirty
     * @default '$clear'
     * @see https://vuetifyjs.com/api/v-text-field#props-clear-icon
     */
    clearIcon?: string;
    /**
     * Add input clear functionality, default icon is Material Design Icons **mdi-clear**
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-clearable
     */
    clearable?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-color
     */
    color?: string;
    /**
     * Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-counter
     */
    counter?: boolean | number | string;
    /**
     * @default null
     * @see https://vuetifyjs.com/api/v-text-field#props-counter-value
     */
    counterValue?: Function;
    /**
     * Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the input height
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-dense
     */
    dense?: boolean;
    /**
     * Disable the input
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-disabled
     */
    disabled?: boolean;
    /**
     * Puts the input in a manual error state
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-error
     */
    error?: boolean;
    /**
     * The total number of errors that should display at once
     * @default 1
     * @see https://vuetifyjs.com/api/v-text-field#props-error-count
     */
    errorCount?: number | string;
    /**
     * Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
     * @default []
     * @see https://vuetifyjs.com/api/v-text-field#props-error-messages
     */
    errorMessages?: string | any[];
    /**
     * Applies the alternate filled input style
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-filled
     */
    filled?: boolean;
    /**
     * Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-flat
     */
    flat?: boolean;
    /**
     * Designates input type as full-width
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-full-width
     */
    fullWidth?: boolean;
    /**
     * Sets the height of the input
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-height
     */
    height?: number | string;
    /**
     * Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-hide-details
     */
    hideDetails?: boolean | string;
    /**
     * Hides spin buttons on the input when type is set to `number`.
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-hide-spin-buttons
     */
    hideSpinButtons?: boolean;
    /**
     * Hint text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-hint
     */
    hint?: string;
    /**
     * Sets the DOM id on the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-id
     */
    id?: string;
    /**
     * Sets input label
     * @see https://vuetifyjs.com/api/v-text-field#props-label
     */
    label?: string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-light
     */
    light?: boolean;
    /**
     * Specifies the height of the loader
     * @default 2
     * @see https://vuetifyjs.com/api/v-text-field#props-loader-height
     */
    loaderHeight?: number | string;
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-loading
     */
    loading?: boolean | string;
    /**
     * Displays a list of messages or message if using a string
     * @default []
     * @see https://vuetifyjs.com/api/v-text-field#props-messages
     */
    messages?: string | any[];
    /**
     * Applies the outlined style to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-outlined
     */
    outlined?: boolean;
    /**
     * Forces hint to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-persistent-hint
     */
    persistentHint?: boolean;
    /**
     * Forces placeholder to always be visible
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-persistent-placeholder
     */
    persistentPlaceholder?: boolean;
    /**
     * Sets the input’s placeholder text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-placeholder
     */
    placeholder?: string;
    /**
     * Displays prefix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-prefix
     */
    prefix?: string;
    /**
     * Prepends an icon to the component, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-prepend-icon
     */
    prependIcon?: string;
    /**
     * Prepends an icon inside the component's input, uses the same syntax as `v-icon`
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-prepend-inner-icon
     */
    prependInnerIcon?: string;
    /**
     * Puts input in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-readonly
     */
    readonly?: boolean;
    /**
     * Reverses the input orientation
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-reverse
     */
    reverse?: boolean;
    /**
     * Adds a border radius to the input
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-rounded
     */
    rounded?: boolean;
    /**
     * Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
     * @default []
     * @see https://vuetifyjs.com/api/v-text-field#props-rules
     */
    rules?: any[];
    /**
     * Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-shaped
     */
    shaped?: boolean;
    /**
     * Label does not move on focus/dirty
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-single-line
     */
    singleLine?: boolean;
    /**
     * Changes the style of the input
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-solo
     */
    solo?: boolean;
    /**
     * Reduces element opacity until focused
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-solo-inverted
     */
    soloInverted?: boolean;
    /**
     * Puts the input in a manual success state
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-success
     */
    success?: boolean;
    /**
     * Puts the input in a success state and passes through custom success messages.
     * @default []
     * @see https://vuetifyjs.com/api/v-text-field#props-success-messages
     */
    successMessages?: string | any[];
    /**
     * Displays suffix text
     * @default undefined
     * @see https://vuetifyjs.com/api/v-text-field#props-suffix
     */
    suffix?: string;
    /**
     * Sets input type
     * @default 'text'
     * @see https://vuetifyjs.com/api/v-text-field#props-type
     */
    type?: string;
    /**
     * Delays validation until blur event
     * @default false
     * @see https://vuetifyjs.com/api/v-text-field#props-validate-on-blur
     */
    validateOnBlur?: boolean;
    /**
     * The input's value
     * @see https://vuetifyjs.com/api/v-text-field#props-value
     */
    value?: any;
  }

  export interface VTextFieldSlots {
    /**
     * Adds an item inside the input and after input content
     * @see https://vuetifyjs.com/api/v-text-field#slots-append
     */
    append: Slotted;
    /**
     * Adds an item outside the input and after input content
     * @see https://vuetifyjs.com/api/v-text-field#slots-append-outer
     */
    appendOuter: Slotted;
    /** @see https://vuetifyjs.com/api/v-text-field#slots-counter */
    counter: Slotted<VTextFieldcounter>;
    /**
     * Replaces the default label
     * @see https://vuetifyjs.com/api/v-text-field#slots-label
     */
    label: Slotted;
    /** @see https://vuetifyjs.com/api/v-text-field#slots-message */
    message: Slotted<VTextFieldmessage>;
    /**
     * Adds an item outside the input and before input content
     * @see https://vuetifyjs.com/api/v-text-field#slots-prepend
     */
    prepend: Slotted;
    /**
     * Adds an item inside the input and before input content
     * @see https://vuetifyjs.com/api/v-text-field#slots-prepend-inner
     */
    prependInner: Slotted;
    /**
     * Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)
     * @see https://vuetifyjs.com/api/v-text-field#slots-progress
     */
    progress: Slotted;
  }

  export interface VTextFieldcounter {
    /** */
    props: {
      dark: boolean;
      light: boolean;
      max: string | number;
      value: string;
    };
  }

  export interface VTextFieldmessage {
    /** */
    key: number;
    /** */
    message: string; // the message;
  }

  const VTextField: GlobalComponent<VTextFieldProps, VTextFieldSlots>;

  export interface VThemeProviderProps {
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-theme-provider#props-dark
     */
    dark?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-theme-provider#props-light
     */
    light?: boolean;
    /**
     * Use the current value of `$vuetify.theme.dark` as opposed to the provided one.
     * @default false
     * @see https://vuetifyjs.com/api/v-theme-provider#props-root
     */
    root?: boolean;
  }

  export interface VThemeProviderSlots {}

  const VThemeProvider: GlobalComponent<VThemeProviderProps, VThemeProviderSlots>;

  export interface VTimelineProps {
    /**
     * Align caret and dot of timeline items to the top
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline#props-align-top
     */
    alignTop?: boolean;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline#props-dark
     */
    dark?: boolean;
    /**
     * Hide opposite slot content, and position all items to one side of timeline
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline#props-dense
     */
    dense?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline#props-light
     */
    light?: boolean;
    /**
     * Reverse direction of timeline items
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline#props-reverse
     */
    reverse?: boolean;
  }

  export interface VTimelineSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-timeline#slots-default
     */
    default: Slotted;
  }

  const VTimeline: GlobalComponent<VTimelineProps, VTimelineSlots>;

  export interface VTimelineItemProps {
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-timeline-item#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline-item#props-dark
     */
    dark?: boolean;
    /**
     * Remove padding from dot container
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline-item#props-fill-dot
     */
    fillDot?: boolean;
    /**
     * Hide display of timeline dot
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline-item#props-hide-dot
     */
    hideDot?: boolean;
    /**
     * Specify icon for dot container
     * @default undefined
     * @see https://vuetifyjs.com/api/v-timeline-item#props-icon
     */
    icon?: string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-timeline-item#props-icon-color
     */
    iconColor?: string;
    /**
     * Large size dot
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline-item#props-large
     */
    large?: boolean;
    /**
     * Explicitly set the item to a left orientation
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline-item#props-left
     */
    left?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline-item#props-light
     */
    light?: boolean;
    /**
     * Explicitly set the item to a right orientation
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline-item#props-right
     */
    right?: boolean;
    /**
     * Small size dot
     * @default false
     * @see https://vuetifyjs.com/api/v-timeline-item#props-small
     */
    small?: boolean;
  }

  export interface VTimelineItemSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-timeline-item#slots-default
     */
    default: Slotted;
    /**
     * Used to customize the icon inside the timeline item's dot
     * @see https://vuetifyjs.com/api/v-timeline-item#slots-icon
     */
    icon: Slotted;
    /**
     * Used to customize the opposite side of timeline items
     * @see https://vuetifyjs.com/api/v-timeline-item#slots-opposite
     */
    opposite: Slotted;
  }

  const VTimelineItem: GlobalComponent<VTimelineItemProps, VTimelineItemSlots>;

  export interface VTimePickerProps {
    /**
     * Restricts which hours can be selected
     * @default undefined
     * @see https://vuetifyjs.com/api/v-time-picker#props-allowed-hours
     */
    allowedHours?: Function | any[];
    /**
     * Restricts which minutes can be selected
     * @default undefined
     * @see https://vuetifyjs.com/api/v-time-picker#props-allowed-minutes
     */
    allowedMinutes?: Function | any[];
    /**
     * Restricts which seconds can be selected
     * @default undefined
     * @see https://vuetifyjs.com/api/v-time-picker#props-allowed-seconds
     */
    allowedSeconds?: Function | any[];
    /**
     * Place AM/PM switch in title, not near the clock.
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-ampm-in-title
     */
    ampmInTitle?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-time-picker#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-dark
     */
    dark?: boolean;
    /**
     * disables picker
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-disabled
     */
    disabled?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-time-picker#props-elevation
     */
    elevation?: number | string;
    /**
     * Removes  elevation
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-flat
     */
    flat?: boolean;
    /**
     * Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`.
     * @default 'ampm'
     * @see https://vuetifyjs.com/api/v-time-picker#props-format
     */
    format?: string;
    /**
     * Forces 100% width
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-full-width
     */
    fullWidth?: boolean;
    /**
     * Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color
     * @default undefined
     * @see https://vuetifyjs.com/api/v-time-picker#props-header-color
     */
    headerColor?: string;
    /**
     * Orients picker horizontal
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-landscape
     */
    landscape?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-light
     */
    light?: boolean;
    /**
     * Maximum allowed time
     * @default undefined
     * @see https://vuetifyjs.com/api/v-time-picker#props-max
     */
    max?: string;
    /**
     * Minimum allowed time
     * @default undefined
     * @see https://vuetifyjs.com/api/v-time-picker#props-min
     */
    min?: string;
    /**
     * Hide the picker title
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-no-title
     */
    noTitle?: boolean;
    /**
     * Puts picker in readonly state
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-readonly
     */
    readonly?: boolean;
    /**
     * Allows changing hour/minute with mouse scroll
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-scrollable
     */
    scrollable?: boolean;
    /**
     * Toggles the use of seconds in picker
     * @default false
     * @see https://vuetifyjs.com/api/v-time-picker#props-use-seconds
     */
    useSeconds?: boolean;
    /**
     * Time picker model (ISO 8601 format, 24hr hh:mm)
     * @default undefined
     * @see https://vuetifyjs.com/api/v-time-picker#props-value
     */
    value?: any;
    /**
     * Width of the picker
     * @default 290
     * @see https://vuetifyjs.com/api/v-time-picker#props-width
     */
    width?: number | string;
  }

  export interface VTimePickerSlots {
    /**
     * Displayed below the clock, can be used for example for adding action button (`OK` and `Cancel`)
     * @see https://vuetifyjs.com/api/v-time-picker#slots-default
     */
    default: Slotted;
  }

  const VTimePicker: GlobalComponent<VTimePickerProps, VTimePickerSlots>;

  export interface VToolbarProps {
    /**
     * Applies position: absolute to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-absolute
     */
    absolute?: boolean;
    /**
     * Aligns the component towards the bottom.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-bottom
     */
    bottom?: boolean;
    /**
     * Puts the toolbar into a collapsed state reducing its maximum width.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-collapse
     */
    collapse?: boolean;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-toolbar#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-dark
     */
    dark?: boolean;
    /**
     * Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop).
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-dense
     */
    dense?: boolean;
    /**
     * Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-toolbar#props-elevation
     */
    elevation?: number | string;
    /**
     * Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-extended
     */
    extended?: boolean;
    /**
     * Specify an explicit height for the `extension` slot.
     * @default 48
     * @see https://vuetifyjs.com/api/v-toolbar#props-extension-height
     */
    extensionHeight?: number | string;
    /**
     * Removes the toolbar's box-shadow.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-flat
     */
    flat?: boolean;
    /**
     * Applies **display: inline-flex** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-floating
     */
    floating?: boolean;
    /**
     * Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-toolbar#props-height
     */
    height?: number | string;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-light
     */
    light?: boolean;
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-toolbar#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-toolbar#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-toolbar#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-toolbar#props-min-width
     */
    minWidth?: number | string;
    /**
     * Removes elevation (box-shadow) and adds a *thin* border.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-outlined
     */
    outlined?: boolean;
    /**
     * Increases the height of the toolbar content to 128px.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-prominent
     */
    prominent?: boolean;
    /**
     * Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-toolbar#props-rounded
     */
    rounded?: boolean | string;
    /**
     * Applies a large border radius on the top left and bottom right of the card.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-shaped
     */
    shaped?: boolean;
    /**
     * Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop).
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-short
     */
    short?: boolean;
    /**
     * Specifies a [v-img](/components/images) as the component's background.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-toolbar#props-src
     */
    src?: string | object;
    /**
     * Specify a custom tag used on the root element.
     * @default 'header'
     * @see https://vuetifyjs.com/api/v-toolbar#props-tag
     */
    tag?: string;
    /**
     * Removes the component's **border-radius**.
     * @default false
     * @see https://vuetifyjs.com/api/v-toolbar#props-tile
     */
    tile?: boolean;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-toolbar#props-width
     */
    width?: number | string;
  }

  export interface VToolbarSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-toolbar#slots-default
     */
    default: Slotted;
    /**
     * Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead.
     * @see https://vuetifyjs.com/api/v-toolbar#slots-extension
     */
    extension: Slotted;
    /**
     * Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`.
     * @see https://vuetifyjs.com/api/v-toolbar#slots-img
     */
    img: Slotted<VToolbarimg>;
  }

  export interface VToolbarimg {
    /** */
    props: { height: string; src: string | srcObject };
  }

  const VToolbar: GlobalComponent<VToolbarProps, VToolbarSlots>;

  export interface VToolbarItemsProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-toolbar-items#props-tag
     */
    tag?: string;
  }

  export interface VToolbarItemsSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-toolbar-items#slots-default
     */
    default: Slotted;
  }

  const VToolbarItems: GlobalComponent<VToolbarItemsProps, VToolbarItemsSlots>;

  export interface VToolbarTitleProps {
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-toolbar-title#props-tag
     */
    tag?: string;
  }

  export interface VToolbarTitleSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-toolbar-title#slots-default
     */
    default: Slotted;
  }

  const VToolbarTitle: GlobalComponent<VToolbarTitleProps, VToolbarTitleSlots>;

  export interface VTooltipProps {
    /**
     * Applies **position: absolute** to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-absolute
     */
    absolute?: boolean;
    /**
     * Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tooltip#props-activator
     */
    activator?: any;
    /**
     * Removes overflow re-positioning for the content
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-allow-overflow
     */
    allowOverflow?: boolean;
    /**
     * Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-attach
     */
    attach?: any;
    /**
     * Aligns the component towards the bottom.
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-bottom
     */
    bottom?: boolean;
    /**
     * Delay (in ms) after which menu closes (when open-on-hover prop is set to true)
     * @default 0
     * @see https://vuetifyjs.com/api/v-tooltip#props-close-delay
     */
    closeDelay?: number | string;
    /**
     * Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tooltip#props-color
     */
    color?: string;
    /**
     * Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tooltip#props-content-class
     */
    contentClass?: string;
    /**
     * Disables the tooltip
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-eager
     */
    eager?: boolean;
    /**
     * Designates whether to use an internal activator
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-internal-activator
     */
    internalActivator?: boolean;
    /**
     * Aligns the component towards the left.
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-left
     */
    left?: boolean;
    /**
     * Sets the maximum width for the content
     * @default auto
     * @see https://vuetifyjs.com/api/v-tooltip#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum width for the content
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tooltip#props-min-width
     */
    minWidth?: number | string;
    /**
     * Nudge the content to the bottom
     * @default 0
     * @see https://vuetifyjs.com/api/v-tooltip#props-nudge-bottom
     */
    nudgeBottom?: number | string;
    /**
     * Nudge the content to the left
     * @default 0
     * @see https://vuetifyjs.com/api/v-tooltip#props-nudge-left
     */
    nudgeLeft?: number | string;
    /**
     * Nudge the content to the right
     * @default 0
     * @see https://vuetifyjs.com/api/v-tooltip#props-nudge-right
     */
    nudgeRight?: number | string;
    /**
     * Nudge the content to the top
     * @default 0
     * @see https://vuetifyjs.com/api/v-tooltip#props-nudge-top
     */
    nudgeTop?: number | string;
    /**
     * Nudge the content width
     * @default 0
     * @see https://vuetifyjs.com/api/v-tooltip#props-nudge-width
     */
    nudgeWidth?: number | string;
    /**
     * Causes the component to flip to the opposite side when repositioned due to overflow
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-offset-overflow
     */
    offsetOverflow?: boolean;
    /**
     * Delay (in ms) after which tooltip opens (when `open-on-hover` prop is set to **true**)
     * @default 0
     * @see https://vuetifyjs.com/api/v-tooltip#props-open-delay
     */
    openDelay?: number | string;
    /**
     * Designates whether the tooltip should open on activator click
     * @default true
     * @see https://vuetifyjs.com/api/v-tooltip#props-open-on-click
     */
    openOnClick?: boolean;
    /**
     * @default true
     * @see https://vuetifyjs.com/api/v-tooltip#props-open-on-focus
     */
    openOnFocus?: boolean;
    /**
     * Designates whether the tooltip should open on activator hover
     * @default true
     * @see https://vuetifyjs.com/api/v-tooltip#props-open-on-hover
     */
    openOnHover?: boolean;
    /**
     * Used to position the content when not using an activator slot
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tooltip#props-position-x
     */
    positionX?: number;
    /**
     * Used to position the content when not using an activator slot
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tooltip#props-position-y
     */
    positionY?: number;
    /**
     * Aligns the component towards the right.
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-right
     */
    right?: boolean;
    /**
     * Specifies a custom tag for the activator wrapper
     * @default 'span'
     * @see https://vuetifyjs.com/api/v-tooltip#props-tag
     */
    tag?: string;
    /**
     * Aligns the content towards the top.
     * @default false
     * @see https://vuetifyjs.com/api/v-tooltip#props-top
     */
    top?: boolean;
    /**
     * Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tooltip#props-transition
     */
    transition?: string;
    /**
     * Controls whether the component is visible or hidden.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tooltip#props-value
     */
    value?: any;
    /**
     * The z-index used for the component
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tooltip#props-z-index
     */
    zIndex?: number | string;
  }

  export interface VTooltipSlots {
    /**
     * When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation
     * @see https://vuetifyjs.com/api/v-tooltip#slots-activator
     */
    activator: Slotted<VTooltipactivator>;
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-tooltip#slots-default
     */
    default: Slotted;
  }

  export interface VTooltipactivator {
    /** */
    on: { [eventName: string]: eventHandler };
    /** */
    value: boolean;
  }

  const VTooltip: GlobalComponent<VTooltipProps, VTooltipSlots>;

  export interface VTreeviewProps {
    /**
     * Allows user to mark a node as active by clicking on it
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-activatable
     */
    activatable?: boolean;
    /**
     * Syncable prop that allows one to control which nodes are active. The array consists of the `item-key` of each active item.
     * @default []
     * @see https://vuetifyjs.com/api/v-treeview#props-active
     */
    active?: any[];
    /**
     * The class applied to the node when active
     * @default 'v-treeview-node--active'
     * @see https://vuetifyjs.com/api/v-treeview#props-active-class
     */
    activeClass?: string;
    /**
     * Sets the color of the active node
     * @default 'primary'
     * @see https://vuetifyjs.com/api/v-treeview#props-color
     */
    color?: string;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-dark
     */
    dark?: boolean;
    /**
     * Decreases the height of the items
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-dense
     */
    dense?: boolean;
    /**
     * Prevents disabling children nodes
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-disable-per-node
     */
    disablePerNode?: boolean;
    /**
     * Disables selection for all nodes
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-disabled
     */
    disabled?: boolean;
    /**
     * Icon used to indicate that a node can be expanded
     * @default '$subgroup'
     * @see https://vuetifyjs.com/api/v-treeview#props-expand-icon
     */
    expandIcon?: string;
    /**
     * Custom item filtering function. By default it will use case-insensitive search in item's label.
     * @default null
     * @see https://vuetifyjs.com/api/v-treeview#props-filter
     */
    filter?: Function;
    /**
     * Applies a hover class when mousing over nodes
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-hoverable
     */
    hoverable?: boolean;
    /**
     * Icon used when node is in an indeterminate state. Only visible when `selectable` is `true`.
     * @default '$checkboxIndeterminate'
     * @see https://vuetifyjs.com/api/v-treeview#props-indeterminate-icon
     */
    indeterminateIcon?: string;
    /**
     * Property on supplied `items` that contains its children
     * @default 'children'
     * @see https://vuetifyjs.com/api/v-treeview#props-item-children
     */
    itemChildren?: string;
    /**
     * Property on supplied `items` that contains the disabled state of the item
     * @default 'disabled'
     * @see https://vuetifyjs.com/api/v-treeview#props-item-disabled
     */
    itemDisabled?: string;
    /**
     * Property on supplied `items` used to keep track of node state. The value of this property has to be unique among all items.
     * @default 'id'
     * @see https://vuetifyjs.com/api/v-treeview#props-item-key
     */
    itemKey?: string;
    /**
     * Property on supplied `items` that contains its label text
     * @default 'name'
     * @see https://vuetifyjs.com/api/v-treeview#props-item-text
     */
    itemText?: string;
    /**
     * An array of items used to build the treeview
     * @default []
     * @see https://vuetifyjs.com/api/v-treeview#props-items
     */
    items?: any[];
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-light
     */
    light?: boolean;
    /**
     * A function used when dynamically loading children. If this prop is set, then the supplied function will be run if expanding an item that has a `item-children` property that is an empty array. Supports returning a Promise.
     * @default null
     * @see https://vuetifyjs.com/api/v-treeview#props-load-children
     */
    loadChildren?: Function;
    /**
     * Icon used when node is in a loading state
     * @default '$loading'
     * @see https://vuetifyjs.com/api/v-treeview#props-loading-icon
     */
    loadingIcon?: string;
    /**
     * When `true`, allows user to have multiple active nodes at the same time
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-multiple-active
     */
    multipleActive?: boolean;
    /**
     * Icon used when node is not selected. Only visible when `selectable` is `true`.
     * @default '$checkboxOff'
     * @see https://vuetifyjs.com/api/v-treeview#props-off-icon
     */
    offIcon?: string;
    /**
     * Icon used when leaf node is selected or when a branch node is fully selected. Only visible when `selectable` is `true`.
     * @default '$checkboxOn'
     * @see https://vuetifyjs.com/api/v-treeview#props-on-icon
     */
    onIcon?: string;
    /**
     * Syncable prop that allows one to control which nodes are open. The array consists of the `item-key` of each open item.
     * @default []
     * @see https://vuetifyjs.com/api/v-treeview#props-open
     */
    open?: any[];
    /**
     * When `true` will cause all branch nodes to be opened when component is mounted
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-open-all
     */
    openAll?: boolean;
    /**
     * When `true` will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon. When using this prop with `activatable` you will be unable to mark nodes with children as active.
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-open-on-click
     */
    openOnClick?: boolean;
    /**
     * When `true` will make `v-model`, `active.sync` and `open.sync` return the complete object instead of just the key
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-return-object
     */
    returnObject?: boolean;
    /**
     * Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `shaped` prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-rounded
     */
    rounded?: boolean;
    /**
     * The search model for filtering results
     * @default undefined
     * @see https://vuetifyjs.com/api/v-treeview#props-search
     */
    search?: string;
    /**
     * Will render a checkbox next to each node allowing them to be selected
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-selectable
     */
    selectable?: boolean;
    /**
     * The color of the selection checkbox
     * @default 'accent'
     * @see https://vuetifyjs.com/api/v-treeview#props-selected-color
     */
    selectedColor?: string;
    /**
     * Controls how the treeview selects nodes. There are two modes available: 'leaf' and 'independent'
     * @default 'leaf'
     * @see https://vuetifyjs.com/api/v-treeview#props-selection-type
     */
    selectionType?: string;
    /**
     * Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `rounded` prop.
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-shaped
     */
    shaped?: boolean;
    /**
     * Applies a transition when nodes are opened and closed
     * @default false
     * @see https://vuetifyjs.com/api/v-treeview#props-transition
     */
    transition?: boolean;
    /**
     * Allows one to control which nodes are selected. The array consists of the `item-key` of each selected item. Is used with `@input` event to allow for `v-model` binding.
     * @default []
     * @see https://vuetifyjs.com/api/v-treeview#props-value
     */
    value?: any[];
  }

  export interface VTreeviewSlots {
    /**
     * Appends content after label
     * @see https://vuetifyjs.com/api/v-treeview#slots-append
     */
    append: Slotted<VTreeviewappend>;
    /**
     * Label content
     * @see https://vuetifyjs.com/api/v-treeview#slots-label
     */
    label: Slotted<VTreeviewlabel>;
    /**
     * Prepends content before label
     * @see https://vuetifyjs.com/api/v-treeview#slots-prepend
     */
    prepend: Slotted<VTreeviewprepend>;
  }

  export interface VTreeviewappend {
    /** */
    item: any;
    /** */
    leaf: boolean;
    /** */
    selected: boolean;
    /** */
    indeterminate: boolean;
    /** */
    active: boolean;
    /** */
    open: boolean;
  }

  export interface VTreeviewlabel {
    /** */
    item: any;
    /** */
    leaf: boolean;
    /** */
    selected: boolean;
    /** */
    indeterminate: boolean;
    /** */
    active: boolean;
    /** */
    open: boolean;
  }

  export interface VTreeviewprepend {
    /** */
    item: any;
    /** */
    leaf: boolean;
    /** */
    selected: boolean;
    /** */
    indeterminate: boolean;
    /** */
    active: boolean;
    /** */
    open: boolean;
  }

  const VTreeview: GlobalComponent<VTreeviewProps, VTreeviewSlots>;

  export interface VVirtualScrollProps {
    /**
     * The number of items **outside** the user view that are rendered (even if they are **not** viewable); to help prevent empty white space when scrolling *fast*.
     * @default 0
     * @see https://vuetifyjs.com/api/v-virtual-scroll#props-bench
     */
    bench?: number | string;
    /**
     * Height of the component as a css value
     * @default undefined
     * @see https://vuetifyjs.com/api/v-virtual-scroll#props-height
     */
    height?: number | string;
    /**
     * Height in pixels of the items to display
     * @default undefined
     * @see https://vuetifyjs.com/api/v-virtual-scroll#props-item-height
     */
    itemHeight?: number | string;
    /**
     * The array of items to display
     * @default []
     * @see https://vuetifyjs.com/api/v-virtual-scroll#props-items
     */
    items?: any[];
    /**
     * Sets the maximum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-virtual-scroll#props-max-height
     */
    maxHeight?: number | string;
    /**
     * Sets the maximum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-virtual-scroll#props-max-width
     */
    maxWidth?: number | string;
    /**
     * Sets the minimum height for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-virtual-scroll#props-min-height
     */
    minHeight?: number | string;
    /**
     * Sets the minimum width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-virtual-scroll#props-min-width
     */
    minWidth?: number | string;
    /**
     * Sets the width for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-virtual-scroll#props-width
     */
    width?: number | string;
  }

  export interface VVirtualScrollSlots {
    /**
     * Default slot to customize items appearance
     * @see https://vuetifyjs.com/api/v-virtual-scroll#slots-default
     */
    default: Slotted<VVirtualScrolldefault>;
  }

  export interface VVirtualScrolldefault {
    /** */
    index: number;
    /** */
    item: any;
  }

  const VVirtualScroll: GlobalComponent<VVirtualScrollProps, VVirtualScrollSlots>;

  export interface VWindowProps {
    /**
     * The **active-class** applied to children when they are activated.
     * @default 'v-window-item--active'
     * @see https://vuetifyjs.com/api/v-window#props-active-class
     */
    activeClass?: string;
    /**
     * If `true`, window will "wrap around" from the last item to the first, and from the first item to the last
     * @default false
     * @see https://vuetifyjs.com/api/v-window#props-continuous
     */
    continuous?: boolean;
    /**
     * Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
     * @default false
     * @see https://vuetifyjs.com/api/v-window#props-dark
     */
    dark?: boolean;
    /**
     * Applies the light theme variant to the component.
     * @default false
     * @see https://vuetifyjs.com/api/v-window#props-light
     */
    light?: boolean;
    /**
     * Icon used for the "next" button if `show-arrows` is `true`
     * @default $next
     * @see https://vuetifyjs.com/api/v-window#props-next-icon
     */
    nextIcon?: boolean | string;
    /**
     * Icon used for the "prev" button if `show-arrows` is `true`
     * @default $prev
     * @see https://vuetifyjs.com/api/v-window#props-prev-icon
     */
    prevIcon?: boolean | string;
    /**
     * Reverse the normal transition direction.
     * @default false
     * @see https://vuetifyjs.com/api/v-window#props-reverse
     */
    reverse?: boolean;
    /**
     * Display the "next" and "prev" buttons
     * @default false
     * @see https://vuetifyjs.com/api/v-window#props-show-arrows
     */
    showArrows?: boolean;
    /**
     * Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set.
     * @default false
     * @see https://vuetifyjs.com/api/v-window#props-show-arrows-on-hover
     */
    showArrowsOnHover?: boolean;
    /**
     * Specify a custom tag used on the root element.
     * @default 'div'
     * @see https://vuetifyjs.com/api/v-window#props-tag
     */
    tag?: string;
    /**
     * Provide a custom **left** and **right** function when swiped left or right.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-window#props-touch
     */
    touch?: object;
    /**
     * Disable touch support.
     * @default false
     * @see https://vuetifyjs.com/api/v-window#props-touchless
     */
    touchless?: boolean;
    /**
     * The designated model value for the component.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-window#props-value
     */
    value?: any;
    /**
     * Apply a custom value comparator function
     * @default null
     * @see https://vuetifyjs.com/api/v-window#props-value-comparator
     */
    valueComparator?: Function;
    /**
     * Uses a vertical transition when changing windows.
     * @default false
     * @see https://vuetifyjs.com/api/v-window#props-vertical
     */
    vertical?: boolean;
  }

  export interface VWindowSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-window#slots-default
     */
    default: Slotted;
    /**
     * Slot displaying the arrow switching to the next item
     * @see https://vuetifyjs.com/api/v-window#slots-next
     */
    next: Slotted<VWindownext>;
    /**
     * Slot displaying the arrow switching to the previous item
     * @see https://vuetifyjs.com/api/v-window#slots-prev
     */
    prev: Slotted<VWindowprev>;
  }

  export interface VWindownext {
    /** */
    attrs: any;
    /** */
    on: { click: eventHandler };
  }

  export interface VWindowprev {
    /** */
    attrs: any;
    /** */
    on: { click: eventHandler };
  }

  const VWindow: GlobalComponent<VWindowProps, VWindowSlots>;

  export interface VWindowItemProps {
    /**
     * Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.
     * @see https://vuetifyjs.com/api/v-window-item#props-active-class
     */
    activeClass?: string;
    /**
     * Prevents the item from becoming active when using the "next" and "prev" buttons or the `toggle` method
     * @default false
     * @see https://vuetifyjs.com/api/v-window-item#props-disabled
     */
    disabled?: boolean;
    /**
     * Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
     * @default false
     * @see https://vuetifyjs.com/api/v-window-item#props-eager
     */
    eager?: boolean;
    /**
     * Sets the reverse transition
     * @default undefined
     * @see https://vuetifyjs.com/api/v-window-item#props-reverse-transition
     */
    reverseTransition?: boolean | string;
    /**
     * The transition used when the component progressing through items. Can be one of the [built in transitions](/styles/transitions) or one your own.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-window-item#props-transition
     */
    transition?: boolean | string;
    /**
     * The value used when the component is selected in a group. If not provided, the index will be used.
     * @default undefined
     * @see https://vuetifyjs.com/api/v-window-item#props-value
     */
    value?: any;
  }

  export interface VWindowItemSlots {
    /**
     * The default Vue slot.
     * @see https://vuetifyjs.com/api/v-window-item#slots-default
     */
    default: Slotted;
  }

  const VWindowItem: GlobalComponent<VWindowItemProps, VWindowItemSlots>;

  export interface VCarouselTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-carousel-transition#props-origin
     */
    origin?: string;
  }

  export interface VCarouselTransitionSlots {}

  const VCarouselTransition: GlobalComponent<VCarouselTransitionProps, VCarouselTransitionSlots>;

  export interface VCarouselReverseTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-reverse-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-reverse-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-carousel-reverse-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-carousel-reverse-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-carousel-reverse-transition#props-origin
     */
    origin?: string;
  }

  export interface VCarouselReverseTransitionSlots {}

  const VCarouselReverseTransition: GlobalComponent<VCarouselReverseTransitionProps, VCarouselReverseTransitionSlots>;

  export interface VTabTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-tab-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-tab-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-tab-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-tab-transition#props-origin
     */
    origin?: string;
  }

  export interface VTabTransitionSlots {}

  const VTabTransition: GlobalComponent<VTabTransitionProps, VTabTransitionSlots>;

  export interface VTabReverseTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-tab-reverse-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-tab-reverse-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-tab-reverse-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-tab-reverse-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-tab-reverse-transition#props-origin
     */
    origin?: string;
  }

  export interface VTabReverseTransitionSlots {}

  const VTabReverseTransition: GlobalComponent<VTabReverseTransitionProps, VTabReverseTransitionSlots>;

  export interface VMenuTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-menu-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-menu-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-menu-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-menu-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-menu-transition#props-origin
     */
    origin?: string;
  }

  export interface VMenuTransitionSlots {}

  const VMenuTransition: GlobalComponent<VMenuTransitionProps, VMenuTransitionSlots>;

  export interface VFabTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-fab-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-fab-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-fab-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default 'out-in'
     * @see https://vuetifyjs.com/api/v-fab-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'center center'
     * @see https://vuetifyjs.com/api/v-fab-transition#props-origin
     */
    origin?: string;
  }

  export interface VFabTransitionSlots {}

  const VFabTransition: GlobalComponent<VFabTransitionProps, VFabTransitionSlots>;

  export interface VDialogTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-dialog-transition#props-origin
     */
    origin?: string;
  }

  export interface VDialogTransitionSlots {}

  const VDialogTransition: GlobalComponent<VDialogTransitionProps, VDialogTransitionSlots>;

  export interface VDialogBottomTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog-bottom-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog-bottom-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog-bottom-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog-bottom-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-dialog-bottom-transition#props-origin
     */
    origin?: string;
  }

  export interface VDialogBottomTransitionSlots {}

  const VDialogBottomTransition: GlobalComponent<VDialogBottomTransitionProps, VDialogBottomTransitionSlots>;

  export interface VDialogTopTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog-top-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog-top-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-dialog-top-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-dialog-top-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-dialog-top-transition#props-origin
     */
    origin?: string;
  }

  export interface VDialogTopTransitionSlots {}

  const VDialogTopTransition: GlobalComponent<VDialogTopTransitionProps, VDialogTopTransitionSlots>;

  export interface VFadeTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-fade-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-fade-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-fade-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-fade-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-fade-transition#props-origin
     */
    origin?: string;
  }

  export interface VFadeTransitionSlots {}

  const VFadeTransition: GlobalComponent<VFadeTransitionProps, VFadeTransitionSlots>;

  export interface VScaleTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-scale-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-scale-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-scale-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-scale-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-scale-transition#props-origin
     */
    origin?: string;
  }

  export interface VScaleTransitionSlots {}

  const VScaleTransition: GlobalComponent<VScaleTransitionProps, VScaleTransitionSlots>;

  export interface VScrollXTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-x-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-x-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-x-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-scroll-x-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-scroll-x-transition#props-origin
     */
    origin?: string;
  }

  export interface VScrollXTransitionSlots {}

  const VScrollXTransition: GlobalComponent<VScrollXTransitionProps, VScrollXTransitionSlots>;

  export interface VScrollXReverseTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-x-reverse-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-x-reverse-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-x-reverse-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-scroll-x-reverse-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-scroll-x-reverse-transition#props-origin
     */
    origin?: string;
  }

  export interface VScrollXReverseTransitionSlots {}

  const VScrollXReverseTransition: GlobalComponent<VScrollXReverseTransitionProps, VScrollXReverseTransitionSlots>;

  export interface VScrollYTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-y-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-y-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-y-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-scroll-y-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-scroll-y-transition#props-origin
     */
    origin?: string;
  }

  export interface VScrollYTransitionSlots {}

  const VScrollYTransition: GlobalComponent<VScrollYTransitionProps, VScrollYTransitionSlots>;

  export interface VScrollYReverseTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-y-reverse-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-y-reverse-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-scroll-y-reverse-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-scroll-y-reverse-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-scroll-y-reverse-transition#props-origin
     */
    origin?: string;
  }

  export interface VScrollYReverseTransitionSlots {}

  const VScrollYReverseTransition: GlobalComponent<VScrollYReverseTransitionProps, VScrollYReverseTransitionSlots>;

  export interface VSlideXTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-x-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-x-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-x-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slide-x-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-slide-x-transition#props-origin
     */
    origin?: string;
  }

  export interface VSlideXTransitionSlots {}

  const VSlideXTransition: GlobalComponent<VSlideXTransitionProps, VSlideXTransitionSlots>;

  export interface VSlideXReverseTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-x-reverse-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-x-reverse-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-x-reverse-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slide-x-reverse-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-slide-x-reverse-transition#props-origin
     */
    origin?: string;
  }

  export interface VSlideXReverseTransitionSlots {}

  const VSlideXReverseTransition: GlobalComponent<VSlideXReverseTransitionProps, VSlideXReverseTransitionSlots>;

  export interface VSlideYTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-y-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-y-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-y-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slide-y-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-slide-y-transition#props-origin
     */
    origin?: string;
  }

  export interface VSlideYTransitionSlots {}

  const VSlideYTransition: GlobalComponent<VSlideYTransitionProps, VSlideYTransitionSlots>;

  export interface VSlideYReverseTransitionProps {
    /**
     * Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-y-reverse-transition#props-group
     */
    group?: boolean;
    /**
     * Hides the leaving element (no exit animation)
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-y-reverse-transition#props-hide-on-leave
     */
    hideOnLeave?: boolean;
    /**
     * Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))
     * @default false
     * @see https://vuetifyjs.com/api/v-slide-y-reverse-transition#props-leave-absolute
     */
    leaveAbsolute?: boolean;
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default undefined
     * @see https://vuetifyjs.com/api/v-slide-y-reverse-transition#props-mode
     */
    mode?: string;
    /**
     * Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
     * @default 'top center 0'
     * @see https://vuetifyjs.com/api/v-slide-y-reverse-transition#props-origin
     */
    origin?: string;
  }

  export interface VSlideYReverseTransitionSlots {}

  const VSlideYReverseTransition: GlobalComponent<VSlideYReverseTransitionProps, VSlideYReverseTransitionSlots>;

  export interface VExpandTransitionProps {
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default 'in-out'
     * @see https://vuetifyjs.com/api/v-expand-transition#props-mode
     */
    mode?: string;
  }

  export interface VExpandTransitionSlots {}

  const VExpandTransition: GlobalComponent<VExpandTransitionProps, VExpandTransitionSlots>;

  export interface VExpandXTransitionProps {
    /**
     * Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
     * @default 'in-out'
     * @see https://vuetifyjs.com/api/v-expand-x-transition#props-mode
     */
    mode?: string;
  }

  export interface VExpandXTransitionSlots {}

  const VExpandXTransition: GlobalComponent<VExpandXTransitionProps, VExpandXTransitionSlots>;
}
