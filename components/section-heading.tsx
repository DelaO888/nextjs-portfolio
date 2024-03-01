import React from "react";

type SectionHeadingProps = {
    title: string
}

export default function SectionHeading(props: SectionHeadingProps) {
    return (
        <h2 className='text-2xl font-medium capitalize mb-8 text-center'>{props.title}</h2>
    )
}