## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Proposed Solution

I've build an poc for the map that zooms in and out and makes sure that all markers are kept within the bounds of the map. The repo for this can be found [here](https://github.com/cam-made/gmaps-test).

In order to make the map work you just need to create an .env file and add the variable `GMAPS_API_KEY=AIzaSyB4_KKApwktWz75BeyWX3IACkxNlveW8U4`

The package I've used for this solution is `@googlemaps/react-wrapper` . It helps enable using google maps in react applications by providing a wrapper component that hides most of the complexity when it comes to mounting the map itself. It's also tiny at 35KB. The only issue is that it's pretty new and not that widely used yet but as it seems to be [maintained by google](https://cloud.google.com/blog/products/maps-platform/loading-google-maps-platform-javascript-modern-web-applications) so we should be alright . Also it's only dependency is `@googlemap/js-api-loader` which is a very widely used package for dynamically loading the Google Maps JavaScript API script which limits the room for issues further down the line.

## Other Packages We Could Use

2. `google-map-react` is a very widely used package at 224,000 weekly downloads. Doesn't have many dependencies and is smaller than `@react-google-maps/api` (below) at ~497kb but still nothing on `@googlemaps/react-wrapper`.
3. `@react-google-maps/api` ; This seems to be a very popular library and gives us the ability to just use google maps api as react components. Downside is that it's pretty massive at ~2MB for the package.
4. We could also just use vanilla js for using the api without any react using `@googlemap/js-api-loader` .
