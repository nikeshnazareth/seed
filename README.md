# Seed Project: React Typescript Redux

## Overview

This branch creates a sample React Typescript app that uses Redux.

The app is a sub-folder of this project, since I think it is preferable to re-run `create-react-app`
for every project, instead of cloning this repo. Nevertheless, it should serve as a guide for how to wire
React and Redux together.

This project was created by following the tutorial [here](https://www.youtube.com/watch?v=93p3LxR9xfM&t=683s)
and adding Typescript annotations where appropriate.

## Steps to reproduce

1. Create react app
```
npm install -g create-react-app
create-react-app sample-app --scripts-version=react-scripts-ts
```

1. Install the redux modules
```
npm install redux react-redux redux-thunk @types/react-redux
```

1. Copy `store.ts`

1. Wrap the `App` component in a `Provider` tag, using `sample-app/App.tsx` as a guide

1. Create `Actions` and `Reducers` as desired, using the `sample-app/reducers` folder as a guide

1. Modify components as desired, using the components in the sample app as a guide

1. Connect the `Action Dispatchers` and `state` to the component properties as desired, using the 
last line (with the `connect` function) of the components in the sample app as a guide.