'use client'

// import { useInView, useScroll, motion } from 'motion/react'
// import { useRef } from 'react'

// const problems = [
//   'Struggle to speak without overthinking?',
//   'Fear of making grammar mistakes?',
//   'Freeze during interviews in English?',
//   'Feel like your vocabulary is too basic?',
//   'Can’t understand fast native speakers?',
//   'Don’t know how to sound more natural?',
//   'Lack confidence in business meetings?',
//   'Avoid conversations due to anxiety?',
// ]

// export function ProblemsSection() {
//   const sectionRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   })

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full py-28 px-6 sm:px-10 lg:px-20 bg-background"
//     >
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
//         {/* Left Title */}
//         <div className="lg:w-1/3">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground sticky top-28 lg:text-left text-center">
//             Any of these <span className="text-[var(--color-accent)]">seem familiar?</span>
//           </h2>
//         </div>

//         {/* Timeline Area */}
//         <div className="relative lg:w-2/3 pl-8">
//           {/* Full Line Behind */}
//           <div className="absolute left-5 top-0 bottom-0 w-1 bg-muted rounded-full" />

//           {/* Animated Progress Line */}
//           <motion.div
//             className="absolute left-5 top-0 w-1 bg-[var(--color-accent)] origin-top rounded-full"
//             style={{ height: `${scrollYProgress.get() * 100}%` }}
//           />

//           <ul className="space-y-24 relative z-10">
//             {problems.map((problem, index) => {
//               const itemRef = useRef(null)
//               const isVisible = useInView(itemRef, { once: true })

//               return (
//                 <li
//                   key={index}
//                   ref={itemRef}
//                   className="relative pl-14 text-foreground"
//                 >
//                   {/* Dot */}
//                   <motion.div
//                     initial={{ scale: 0.5, backgroundColor: 'hsl(var(--muted))' }}
//                     animate={
//                       isVisible
//                         ? { scale: 1, backgroundColor: 'hsl(var(--color-accent))' }
//                         : { scale: 0.5 }
//                     }
//                     transition={{ type: 'spring', stiffness: 300 }}
//                     className="absolute left-4 top-1 w-6 h-6 rounded-full"
//                   />

//                   {/* Text */}
//                   <p className="text-lg sm:text-xl font-medium leading-relaxed">
//                     {problem}
//                   </p>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }

// deepseek

// import { useRef } from 'react'
// import { motion, useScroll, useTransform, useInView } from 'motion/react'

// export function ProblemsSection() {
//   const problems = [
//     {
//       id: 1,
//       title: 'Struggling with inconsistent branding',
//       description:
//         "Your marketing materials don't have a cohesive look and feel across different platforms.",
//     },
//     {
//       id: 2,
//       title: 'Low website conversion rates',
//       description:
//         "Visitors come to your site but don't take the desired actions like signing up or purchasing.",
//     },
//     {
//       id: 3,
//       title: 'Ineffective social media presence',
//       description:
//         "Your posts don't get much engagement and you're not seeing ROI from social efforts.",
//     },
//     {
//       id: 4,
//       title: 'Outdated design',
//       description:
//         "Your visual identity looks old-fashioned and doesn't appeal to your target audience.",
//     },
//     {
//       id: 5,
//       title: 'Poor user experience',
//       description:
//         'Customers find your digital products confusing or frustrating to use.',
//     },
//     {
//       id: 6,
//       title: 'Lack of clear messaging',
//       description:
//         "Your value proposition isn't clear and customers don't understand what makes you special.",
//     },
//   ]

//   const containerRef = useRef(null)
//   const titleRef = useRef(null)

//   // Track when title is in view
//   const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })

//   // Track scroll progress through the timeline container
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start center', 'end center'],
//   })

//   // Transform scroll progress into line fill percentage
//   const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

//   // Calculate active index based on scroll progress
//   const activeIndex = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, problems.length - 1]
//   )

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Mobile title */}
//         <motion.h2
//           ref={titleRef}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//           className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:hidden"
//         >
//           Any of these seems familiar?
//         </motion.h2>

//         <div className="flex flex-col sm:flex-row gap-12">
//           {/* Desktop title */}
//           <div className="hidden sm:flex sm:w-1/3 items-center justify-center">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-3xl sm:text-4xl font-bold text-gray-900"
//             >
//               Any of these seems familiar?
//             </motion.h2>
//           </div>

//           {/* Timeline */}
//           <div className="sm:w-2/3" ref={containerRef}>
//             <div className="relative">
//               {/* Vertical line */}
//               <div className="absolute left-6 sm:left-8 top-0 h-full w-0.5 bg-gray-200">
//                 <motion.div
//                   className="absolute top-0 left-0 w-full h-full bg-orange-500 origin-top"
//                   style={{ scaleY: lineProgress }}
//                 />
//               </div>

//               {/* Problem items */}
//               <div className="space-y-16 pl-16 sm:pl-24">
//                 {problems.map((problem, index) => {
//                   const itemRef = useRef(null)
//                   const isInView = useInView(itemRef, {
//                     margin: '-50px 0px -100px 0px',
//                     amount: 0.5,
//                   })

//                   return (
//                     <div key={problem.id} className="relative" ref={itemRef}>
//                       {/* Dot */}
//                       <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                         <motion.div
//                           className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
//                           animate={{
//                             backgroundColor: isInView ? '#f97316' : '#e5e7eb',
//                           }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <motion.div
//                             className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"
//                             initial={{ scale: 0 }}
//                             animate={{ scale: isInView ? 1 : 0 }}
//                             transition={{ duration: 0.3 }}
//                           />
//                         </motion.div>
//                       </div>

//                       {/* Content */}
//                       <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={isInView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                         className={`p-6 rounded-lg ${
//                           isInView ? 'bg-gray-50 shadow-md' : 'bg-white'
//                         }`}
//                       >
//                         <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
//                           {problem.title}
//                         </h3>
//                         <p className="text-gray-600">{problem.description}</p>
//                       </motion.div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

//deepseek v2
import { useRef } from 'react'
import { useInView, motion } from 'motion/react'

interface Problem {
  id: number
  title: string
  description: string
}

export function ProblemsSection() {
  const problems: Problem[] = [
    {
      id: 1,
      title: 'Struggle to speak without overthinking?',
      description:
        "Your marketing materials don't have a cohesive look and feel across different platforms.",
    },
    {
      id: 2,
      title: 'Fear of making grammar mistakes?',
      description:
        "Visitors come to your site but don't take the desired actions like signing up or purchasing.",
    },
    {
      id: 3,
      title: 'Freeze during interviews in English?',
      description:
        "Your posts don't get much engagement and you're not seeing ROI from social efforts.",
    },
    {
      id: 4,
      title: 'Feel like your vocabulary is too basic?',
      description:
        "Your visual identity looks old-fashioned and doesn't appeal to your target audience.",
    },
    {
      id: 5,
      title: 'Can’t understand fast native speakers?',
      description:
        'Customers find your digital products confusing or frustrating to use.',
    },
    {
      id: 6,
      title: 'Don’t know how to sound more natural?',
      description:
        "Your value proposition isn't clear and customers don't understand what makes you special.",
    },
    {
      id: 6,
      title: 'Lack confidence in business meetings?',
      description:
        "Your value proposition isn't clear and customers don't understand what makes you special.",
    },
    {
      id: 6,
      title: 'Avoid conversations due to anxiety?',
      description:
        "Your value proposition isn't clear and customers don't understand what makes you special.",
    },
  ]

  const titleRef = useRef<HTMLHeadingElement>(null)
  const isTitleInView = useInView(titleRef, { once: true })

  return (
    <section className="w-full py-28 px-6 sm:px-10 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Title - Sticky */}
        <div className="lg:w-1/3">
          <motion.h2
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold sticky top-28 lg:text-left text-center"
          >
            Any of these{' '}
            <span className="text-[var(--color-accent)]">seem familiar?</span>
          </motion.h2>
        </div>

        {/* Timeline Area */}
        <div className="relative lg:w-2/3 pl-8 sm:pl-16">
          <div className="space-y-16">
            {problems.map((problem, index) => (
              <ProblemItem key={problem.id} problem={problem} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProblemItemProps {
  problem: Problem
  index: number
}

const ProblemItem = ({ problem, index }: ProblemItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: '-50px 0px -100px 0px',
    amount: 0.5,
  })

  return (
    <div ref={ref} className="relative">
      {/* Dot */}
      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
          animate={{
            backgroundColor: isInView
              ? 'var(--color-accent)'
              : 'var(--color-muted)',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`p-6 rounded-lg ${
          isInView ? 'bg-gray-50 shadow-md' : 'bg-white'
        } ml-8`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
          {problem.title}
        </h3>
        <p className="text-gray-600">{problem.description}</p>
      </motion.div>
    </div>
  )
}
