'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

import { useSectionInView } from '@/lib/hooks'

export default function About() {

    const { ref } = useSectionInView("About")


    return (
        <motion.section

            ref={ref}

            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            id='about'>
            <SectionHeading title='About Me'></SectionHeading>
            <p className='mb-3 text-justify'>Software Engineer with 2 years experience on the field. Focused on web development, designing and implementing solutions with React, .NET framework, C#, as well as Entity Framework. Furthermore, utilizing user flows and managing resource groups and providing web security with Azure.
                Developed automatization solutions such as signing and approval of documents with Power Automate and Power Apps from Microsoft.
                With responsability, dedication, excellent comunication and leadership skills and endless enthusiasm to learn something new, I look forward to continue growing my career as a web developer with all knowledge I can get.</p>
        </motion.section>
    )
}