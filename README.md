# With Anchor Bug

This is a minimal reproducible example for an expo router bug in v6

withAnchor is not respected when navigating to a nested stack.

This is because the `initial` property is only set on the root node of the dispatched react navigation event (not the leaf node)

This can be fixed by setting the property in nested navigation params

Reproducing:

- go to the source stack page
- then navigate to the target page in a nested parallel stack

For example:

```
/expo-router@6.0.9/build/global-state/routing.js
```

```
    if (withAnchor !== undefined) {
        if (rootPayload.params.initial) {
            if (process.env.NODE_ENV !== 'production') {
                console.warn(`The parameter 'initial' is a reserved parameter name in React Navigation`);
            }
        }
        /*
         * The logic for initial can seen backwards depending on your perspective
         *   True: The initialRouteName is not loaded. The incoming screen is the initial screen (default)
         *   False: The initialRouteName is loaded. THe incoming screen is placed after the initialRouteName
         *
         * withAnchor flips the perspective.
         *   True: You want the initialRouteName to load.
         *   False: You do not want the initialRouteName to load.
         */

        rootPayload.params.initial = !withAnchor;
        let currentPayload = rootPayload;
        while (currentPayload.params) {
            currentPayload.params.initial = !withAnchor;
            currentPayload = currentPayload.params;
            }
        }

```

We have patched this locally
