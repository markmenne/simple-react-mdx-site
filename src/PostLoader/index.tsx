import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock';
import { loadPost } from './postHelper';
import './Post.css';
import Posts from '../Posts';

const PostLoader = () => {

    const components = {
        code: CodeBlock,
        wrapper: (props: any) => (
            <div style={{ padding: '0 20px' }}>
                <main {...props} />
            </div>
        ),
    }

    const location = useLocation();

    const { component: Content, postItem } = loadPost(location.pathname);

    return (
        <article>
            <div className="post-layout">
                <h1>{postItem.name}</h1>
                <div className="meta-data">
                    <p>Created : {postItem.updatedDate.toLocaleDateString()}</p>
                    <p>Updated : {postItem.createdDate.toLocaleDateString()}</p>
                </div>
                <MDXProvider components={components}>
                    <Content />
                </MDXProvider>
                <div className="post-footer">
                    <hr />
                    <Posts />
                </div>
            </div>
        </article>
    );
}

export default memo(PostLoader);
