'use client'
import {react} from 'react'
import './skill.css'
export default function Skill({skill}){
    return(
        <div className='main_skill_container'>
            <h1>{skill}</h1>
        </div>
    )
}