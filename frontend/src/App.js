import React, {useState} from 'react';

import './App.css';

import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion';


import MenuBar from './components/tiptap_rte/MenuBar'

function App() {
    const editor = useEditor({
        extensions: [
            StarterKit.configure(),
            Highlight,
            TaskList,
            TaskItem,
            CharacterCount.configure({
                limit: 10000,
            }),
        ],
    })


    const [showNoteList, setShowNoteList] = useState(false);
      return (

          <div className="flex flex-row w-screen bg-gray-100">
              <div>
                  <div
                      className="my-8 h-[calc(100vh-4rem)] w-16 font-bold bg-gray-100 text-gray-700 justify-center items-center flex flex-col font-mono">
                      <div className=" w-fit ">
                          <button
                              className="size-6 rounded-full bg-gray-400 flex justify-center align-middle mb-8"
                          >
                          </button>
                          <ul>
                              <li className="mb-16 flex py-4 rounded-full justify-center">
                                  <button
                                      className="[writing-mode:vertical-lr] rotate-180 hover:underline transition-all duration-500"
                                      onClick={() => setShowNoteList(!showNoteList)}>
                                      NOTES
                                  </button>
                              </li>
                              <li className="mb-16 flex py-4 rounded-full justify-center">
                                  <button className="[writing-mode:vertical-lr] rotate-180">
                                      CATEGORIES
                                  </button>
                              </li>
                              <li className="mb-16 flex py-4 rounded-full justify-center">
                                  <button className="[writing-mode:vertical-lr] rotate-180">
                                      SETTINGS
                                  </button>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              {showNoteList && (
                  <div className={`notelist ${showNoteList ? 'show' : 'hide'} flex flex-row w-1/4 bg-gray-300 border-l border-black`}>
                      <div className="my-8 overflow-y-scroll w-full h-[calc(100vh-4rem)] font-semibold text-black justify-center items-center flex flex-col">

                          <div className="w-full px-6">
                              <div className="border-b border-gray-400 text-xs hover:bg-gray-300 transition-all duration-100">
                                  <h4 className="px-6 pt-2 font-mono font-bold">Lorem ipsum dolor</h4>
                              </div>
                              <div className="border-b border-gray-400 text-xs hover:bg-gray-300 transition-all duration-100">
                                  <h4 className="px-6 pt-2 font-mono font-bold">Lorem ipsum dolor</h4>
                              </div>
                          </div>
                      </div>
                  </div>
              )}

              <div className="flex w-full border-l border-black">
                  <div className="editor p-3 my-8 bg-gray-100 w-[calc(100vw-7rem-25%)] ">
                      <EditorContent className="editor__content  h-full w-full rounded-2xl" editor={editor}/>
                  </div>

              </div>
              <div className="flex w-16 border-l border-black">
                  <div
                      className="my-8 py-8  w-16 flex items-center justify-center  rounded-r-2xl bg-gray-100 ">
                      <MenuBar editor={editor}/>
                  </div>
              </div>


          </div>
      );
}

export default App;
