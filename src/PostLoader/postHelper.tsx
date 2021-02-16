/* eslint-disable import/no-webpack-loader-syntax */
import React, { ComponentType, lazy, LazyExoticComponent } from "react";
import { Link } from "react-router-dom";
import { findPostItemByName, findPostItemByUrlIn, POST_ROOT, POST_TYPE } from "./PostsConfig";

export type MetadataType = {
    title: string,
}

export const loadPost = (urlIn: string): { component: LazyExoticComponent<ComponentType>, postItem: POST_TYPE } => {
    const postItem = findPostItemByUrlIn(urlIn);
    const targetComponent = postItem?.targetComponent;
    return {
        component: lazy(() => import(`!babel-loader!@mdx-js/loader!../Posts/${targetComponent}/index.mdx`)),
        postItem,
    }
}

export const buildPath = (key: string) => `${POST_ROOT}/${key}`

export const getFilePart = (filePath: string) => {
    var fileName = filePath;
    if (filePath.lastIndexOf("/") === filePath.length - 1) {
        fileName.slice(0, -1);
    }
    fileName = fileName.substr(filePath.lastIndexOf("/") + 1);
    return fileName;
}

export const buildLinkFromName = (name: string) => {
    const postItem = findPostItemByName(name);
    return <Link to={buildPath(postItem.targetUrl)}>{postItem.name}</Link>
}