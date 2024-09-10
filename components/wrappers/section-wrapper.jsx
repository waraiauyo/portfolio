"use client"

export default function SectionWrapper({children, className}) {
    return(
        <section className={"px-8 " + className}>
            {children}
        </section>
    );
}