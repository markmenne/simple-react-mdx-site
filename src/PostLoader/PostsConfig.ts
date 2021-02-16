import { getFilePart } from "./postHelper";

// Note that changing this probably means finding and changing the path within mdx files,
// because their links are hard coded.
export const POST_ROOT = '/post';

export type POST_TYPE = {
    name: string;
    targetUrl: string;
    targetComponent: string;
    createdDate: Date;
    updatedDate: Date;
}

export const POST_ITEMS = [
    {
        name: 'Install MDX for Create React App and Typescript',
        targetUrl: 'install-mdx-for-cra-typescript',
        targetComponent: 'installMdxForCra',
        createdDate: new Date(2021,1,10),
        updatedDate: new Date(2021,1,10),
    },
    {
        name: 'How to Create Modern Looking Inline Labels with React JSX and CSS',
        targetUrl: 'how-to-create-html-control-inline-labels',
        targetComponent: 'howToInlineLabels',
        createdDate: new Date(2021,1,12),
        updatedDate: new Date(2021,1,12),
    },
    {
        name: 'How to Animate Input Borders with React JSX and CSS',
        targetUrl: 'how-to-animate-input-borders',
        targetComponent: 'howToAnimateBorders',
        createdDate: new Date(2021,1,15),
        updatedDate: new Date(2021,1,15),
    },
] as const;

export const findPostItemByName = (name: string): POST_TYPE => {
    const postItem = POST_ITEMS.find((item) => name === item.name);
    if (!postItem) {
        throw new PostError(`Page ${name} not found`);
    }
    return postItem;
}

export const findPostItemByUrlIn = (url: string): POST_TYPE => {
    const filePart: string | undefined = getFilePart(url) ?? undefined;

    const postItem = POST_ITEMS.find((item) => item.targetUrl === filePart);
    if (!postItem) {
        throw new PostError(`Page ${url} not found`);
    }
    return postItem;
}

export class PostError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PostError";
    }
}
