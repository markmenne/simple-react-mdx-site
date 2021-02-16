# About

This project is a simple browser only site for hosting [MDX](https://mdxjs.com/) articles.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It was written for my own use.  It is running at [ds2data](https://ds2data.com/post/).

However, the structure might be useful for others.


## Running

Clone the project.

```
cd simple-react-mdx-site/
yarn install
yarn start
```

### Structure

Under `src/Posts`, there is one folder per article.  The article must be called `index.mdx`.  Any resources it needs should go in the same subfolder.

Add the defined article to the `POST_ITEMS` structure in `src/PostLoader/PostsConfig.ts`.

The banner is defined under `src/components/menus`.  If you do not want a banner, delete the folder, along with the reference to it in `src/App.tsx`.


