"use client"

import blog from './blog.json';
import BlogContainer from '@/app/components/Container.js';
import { updateBlogData } from '@/app/actions/update-text-file';

import { useState } from "react";

let blogText = blog.body;
let lineHeight = 25;

export default function Home() {

  const blogPath = 'app/projects/blog/blog.txt';

  const [editable, setEditable] = useState(false);
  const [textContent, setTextContent] = useState(blogText);

  const saveToPage = () => {
    blogText = textContent;
    updateBlogData(textContent);
    setEditable(false);
  }

  const editableButton = "absolute bottom-4 right-8 text-primary-900 hover:underline hover:text-secondary-600 duration-300";

  return(
  <div className="mt-28 sm:mt-32 justify-center">
    <BlogContainer title="My Blog" style="text-center mx-0 sm:mx-[20vw]">
      <div className="flex flex-col space=y-4 mx-8 text-justify">
        {(!editable) && <>{formatBlogData(blogText)}</>}
        {(editable) && <textarea style={{height : lineHeight + 'px'}} id="savableText" value={textContent} onChange={e => setTextContent(e.target.value)} className="border border-primary-500"/>}
      </div>
      <div className="mt-4 w-full h-8 bg-primary-50">
        {(!editable) && <button onClick={() => setEditable(true)} className={editableButton}>Edit</button>}
        {(editable) && <button onClick={() => saveToPage()} className={editableButton}>Save</button>}
      </div>
    </BlogContainer>
  </div>
  )
}

function formatBlogData(data) {
  const lineBreaks = data.split('\n');
  lineHeight = lineBreaks.length * 24;
  let output = [];
  for (let index = 0; index < lineBreaks.length; index++) {
    output.push(<p key={index}>{lineBreaks[index]}</p>);
  }
  return output;
}