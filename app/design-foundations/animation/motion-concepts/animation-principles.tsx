import React from 'react';
import { motion } from 'framer-motion';

// Animation Principle Card component
const PrincipleCard = ({ title, description, icon, color }: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <motion.div 
      className={`rounded-lg p-6 border border-border ${color}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)",
        transition: { duration: 0.2, ease: [0.0, 0.0, 0.2, 1] }
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export function AnimationPrinciples() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold mb-6">Animation Principles</h2>
      <p className="text-lg mb-6 text-muted-foreground">
        These five core principles guide all animation decisions in Fable, ensuring a consistent, delightful, and accessible motion experience.
      </p>

      <div className="grid grid-cols-1 gap-6">
        <PrincipleCard
          title="Responsive"
          description="Animations respond instantly to user input, never causing delays or friction. Interactive elements provide immediate feedback, and all animations can be interrupted by user actions."
          color="bg-card"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 0 1-9 9" />
              <path d="M3 12a9 9 0 0 1 9-9" />
              <path d="M12 3v9" />
              <path d="m9 9 3 3 3-3" />
              <path d="M3 21h18" />
            </svg>
          }
        />

        <PrincipleCard
          title="Natural"
          description="Movements follow natural physics with appropriate easing, giving interface elements a sense of weight and physicality. Objects accelerate and decelerate naturally rather than moving at constant speeds."
          color="bg-card"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12c0-3.56 4.03-6.5 9-6.5s9 2.94 9 6.5-4.03 6.5-9 6.5c-1.54 0-3-.19-4.31-.54" />
              <path d="M3.27 15.38A9.87 9.87 0 0 1 2 12c0-3.56 4.03-6.5 9-6.5M18.63 6.62A9.9 9.9 0 0 1 20 12c0 3.56-4.03 6.5-9 6.5" />
              <path d="M7 16.45c.95.42 2.03.55 3.07.55 3.57 0 6.34-1.34 7.47-3.7" />
              <path d="M14 21.29c-.78.46-1.63.71-2.5.71-.87 0-1.72-.25-2.5-.71-1.32-.78-2.29-2.15-2.72-3.79.43 1.64 1.4 3.01 2.72 3.79.62.37 1.3.59 2 .68" />
              <path d="M4.5 14c-.82-.47-1.5-1.06-2-1.75.5.69 1.18 1.28 2 1.75" />
              <path d="M22 8c-1.33-2.5-5-4-9-4S5.33 5.5 4 8c1.33 2.5 5 4 9 4s7.67-1.5 9-4" />
              <path d="M19.5 20.5c1.5-1.5 2.5-3.75 2.5-6.5 0-5.52-4.48-10-10-10S2 8.48 2 14c0 2.31.75 4.25 2 5.88" />
              <path d="M2 20.5c1.5-1.5 2.5-3.75 2.5-6.5 0-.87-.09-1.71-.25-2.5" />
              <path d="M17 18.88c1.27-1.63 2-3.57 2-5.88a9.83 9.83 0 0 0-.25-2.5" />
              <path d="M18.42 9a40.73 40.73 0 0 0-2.92-2" />
            </svg>
          }
        />

        <PrincipleCard
          title="Purposeful"
          description="Animation serves functional purposes, never purely decorative. Every motion should help users understand what's happening, guide attention, establish relationships between elements, or provide feedback."
          color="bg-card"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V8" />
              <path d="m2 2 20 20" />
              <path d="M22 2 2 22" />
              <path d="m8 12 4-4 4 4" />
              <path d="M16 8V6c0-1.1-.9-2-2-2H8" />
            </svg>
          }
        />

        <PrincipleCard
          title="Cohesive"
          description="Related elements move together in choreographed sequences. Components in the same functional group should move in harmony, and similar interface elements should animate in similar ways across the application."
          color="bg-card"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z" />
              <path d="M8 8c-1.36 1.26-3 3.26-3 5a3 3 0 0 0 6 0c0-2-1.8-4-3-5" />
              <path d="M16 8c1.36 1.26 3 3.26 3 5a3 3 0 0 1-6 0c0-2 1.8-4 3-5" />
              <path d="M9 18H4" />
              <path d="M9 21v-4.5a2.5 2.5 0 0 1 5 0V21" />
              <path d="M20 18h-5" />
            </svg>
          }
        />

        <PrincipleCard
          title="Efficient"
          description="Animations optimize for performance and battery life. We balance visual richness with technical efficiency, prioritizing the 60fps performance target for all animations, especially on mobile devices."
          color="bg-card"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2v4" />
              <path d="M15 2h-2" />
              <path d="M11 6h4" />
              <path d="M17.15 19.5A9 9 0 0 0 21 13c0-2.4-1.8-4.8-4.45-5.77" />
              <path d="M21 13h-4M8.36 18.73 6 21l-1.5-5.18L4.47 17" />
              <path d="M10.32 17.67 13 17 10.73 16 9.3 14" />
              <path d="M15.03 9.04 9.59 14.41" />
              <path d="M8.24 15.76l-1.66 1.65" />
              <path d="M12.33 11.86l-.59.59" />
              <path d="M9.45 14.74l-.6.59" />
              <path d="M18.74 10.25l-3.75 3.74" />
              <path d="M13.89 15.09l-.58.58" />
              <path d="M11 21 5.4 4.7M16.7 5.33l-3.07 2.46" />
              <path d="m8.89 9.55-3.14 2.51" />
            </svg>
          }
        />
      </div>

      <div className="mt-8 bg-card border border-border rounded-lg p-6">
        <h3 className="font-display text-xl font-medium mb-4">Accessibility & Animation</h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4 text-muted-foreground">
              All animation in Fable respects accessibility considerations. We ensure animations never create barriers for users with motion sensitivity, vestibular disorders, or other accessibility needs.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Honor <code>prefers-reduced-motion</code> settings</li>
              <li>Provide alternative indicators for users with motion sensitivity</li>
              <li>Never use animation as the only means to convey important information</li>
              <li>Keep essential state transitions within 100ms when motion is reduced</li>
              <li>Ensure all animations can be paused or stopped</li>
            </ul>
          </div>
          <div className="flex-1">
            <pre className="p-4 rounded bg-muted font-mono text-sm h-full overflow-auto">
{`// Example of respecting reduced motion preferences
import { useReducedMotion } from "framer-motion";

function AnimatedComponent() {
  // Automatically detects user preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Use different animation settings based on preference
  const animationSettings = prefersReducedMotion
    ? { 
        // Simple opacity change for reduced motion
        animate: { opacity: 1 },
        transition: { duration: 0.1 }
      }
    : {
        // Full animation for standard motion
        animate: { opacity: 1, y: 0 },
        transition: { 
          duration: 0.3,
          ease: [0.4, 0.0, 0.2, 1]
        }
      };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      {...animationSettings}
    >
      Content
    </motion.div>
  );
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}