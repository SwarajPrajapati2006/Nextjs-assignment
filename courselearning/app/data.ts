// Simple types for courses and lessons
export interface Lesson {
  id: string;
  title: string;
  detail: string;
  duration: string;
}

export interface CourseModule {
  moduleNumber: number;
  title: string;
  lessonsCount: number;
  duration: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  lessonsCount: number;
  duration: string;
  instructor: string;
  instructorRole: string;
  instructorInitials: string;
  description: string;
  fullDescription: string;
  modules?: CourseModule[];
}

export interface TopicModule {
  moduleNumber: string;
  title: string;
  lessonsCount: number;
  level: string;
  instructor: string;
  instructorRole: string;
  instructorInitials: string;
  description: string;
  courseId: string;
}

// 6 Core Courses Data
export const coursesData: Course[] = [
  {
    id: "nextjs-app-router",
    title: "Next.js App Router Fundamentals",
    category: "Frontend",
    level: "Intermediate",
    lessonsCount: 14,
    duration: "3.5 hrs",
    instructor: "Alex Rivera",
    instructorRole: "Staff Frontend Architect",
    instructorInitials: "AR",
    description: "Deep dive into server components, dynamic segment rendering, caching architectures, and streaming SSR.",
    fullDescription: "Master server components, streaming SSR, nested routing layouts, catch-all parameters, and route interceptors in modern web applications.",
    modules: [
      {
        moduleNumber: 1,
        title: "Routing Architecture & File Conventions",
        lessonsCount: 4,
        duration: "55 min",
        lessons: [
          { id: "01", title: "Introduction & Philosophy", detail: "Mental shift from Pages router to React Server Components (RSC).", duration: "12 min" },
          { id: "02", title: "Server vs Client Components", detail: "The 'use client' directive boundary, component trees, and serialization.", duration: "16 min" },
          { id: "03", title: "Nested Layouts & Templates", detail: "State preservation between route segments and template remounting.", duration: "14 min" },
          { id: "04", title: "Dynamic & Catch-All Routes", detail: "Parametric patterns, optional catch-all brackets, and type safety.", duration: "13 min" }
        ]
      },
      {
        moduleNumber: 2,
        title: "Data Fetching & Caching Tiers",
        lessonsCount: 3,
        duration: "48 min",
        lessons: [
          { id: "05", title: "Server-side Fetching & Cache", detail: "Extended fetch API, request memoization, and Data Cache mechanics.", duration: "15 min" },
          { id: "06", title: "Revalidation Strategies", detail: "Time-based ISR versus on-demand revalidatePath and revalidateTag.", duration: "15 min" },
          { id: "07", title: "Parallel & Intercepting Routes", detail: "Simultaneous contextual displays, modals, and conditional slots.", duration: "18 min" }
        ]
      },
      {
        moduleNumber: 3,
        title: "Mutation & Boundary Handling",
        lessonsCount: 4,
        duration: "54 min",
        lessons: [
          { id: "08", title: "Server Actions & Forms", detail: "Progressive enhancement, pending states with useFormStatus and useActionState.", duration: "18 min" },
          { id: "09", title: "Error Boundaries & notFound()", detail: "Segment error recovery, nested fail-soft UI trees, and 404 responses.", duration: "10 min" },
          { id: "10", title: "Loading States & Suspense", detail: "Granular streaming architectures and skeleton boundary segmentation.", duration: "14 min" },
          { id: "11", title: "Route Handlers & Webhooks", detail: "Building RESTful primitives, signature verifications, and custom responses.", duration: "12 min" }
        ]
      },
      {
        moduleNumber: 4,
        title: "Deployment & Optimization",
        lessonsCount: 3,
        duration: "42 min",
        lessons: [
          { id: "12", title: "Metadata & OpenGraph", detail: "Static and dynamic metadata, file-based OG generation with ImageResponse.", duration: "12 min" },
          { id: "13", title: "Static Generation (generateStaticParams)", detail: "Pre-rendering dynamic routes ahead of time for edge deployment latency.", duration: "14 min" },
          { id: "14", title: "Production Auditing", detail: "Analyzing bundle size, server-timing headers, and node runtime diagnostics.", duration: "16 min" }
        ]
      }
    ]
  },
  {
    id: "typescript-enterprise-patterns",
    title: "TypeScript Enterprise Patterns",
    category: "Language",
    level: "Advanced",
    lessonsCount: 18,
    duration: "4.5 hrs",
    instructor: "Maya Lin",
    instructorRole: "Principal Systems Engineer",
    instructorInitials: "ML",
    description: "Compile-time guarantees, conditional type engines, domain-driven modeling, and resilient Monorepos.",
    fullDescription: "Learn robust TypeScript patterns for enterprise systems including branded types, conditional types, and generics.",
    modules: [
      {
        moduleNumber: 1,
        title: "Advanced Generics & Constraints",
        lessonsCount: 2,
        duration: "30 min",
        lessons: [
          { id: "01", title: "Generic Function Contracts", detail: "Understanding inference limits and keyof operators.", duration: "15 min" },
          { id: "02", title: "Conditional Type Mapping", detail: "Distributive conditional types and infer keyword.", duration: "15 min" }
        ]
      }
    ]
  },
  {
    id: "distributed-cache-architecture",
    title: "Distributed Cache Architecture",
    category: "Architecture",
    level: "Advanced",
    lessonsCount: 12,
    duration: "3.0 hrs",
    instructor: "Dr. Elena Vance",
    instructorRole: "Distributed Systems Researcher",
    instructorInitials: "EV",
    description: "Cache invalidation heuristics, consistent hashing algorithms, Redis ring topologies, and high-throughput.",
    fullDescription: "Design resilient caching tiers with consistent hashing, Redis clustering, and stale-while-revalidate strategies.",
    modules: [
      {
        moduleNumber: 1,
        title: "Caching Fundamentals",
        lessonsCount: 2,
        duration: "30 min",
        lessons: [
          { id: "01", title: "Cache Eviction Policies", detail: "LRU, LFU, and ARC cache replacement algorithms.", duration: "15 min" },
          { id: "02", title: "Consistent Hashing & Ring Partitions", detail: "Node balancing and failover mechanisms.", duration: "15 min" }
        ]
      }
    ]
  },
  {
    id: "modern-state-management",
    title: "Modern State Management & Signals",
    category: "Frontend",
    level: "Intermediate",
    lessonsCount: 10,
    duration: "2.5 hrs",
    instructor: "Aarav Mehta",
    instructorRole: "Reactive Systems Lead",
    instructorInitials: "AM",
    description: "Fine-grained reactivity paradigms, comparing signals vs selectors, mutation boundaries, and memory leaks.",
    fullDescription: "Explore reactivity patterns in modern frontend applications comparing Signals with React state and atomic state trees.",
    modules: [
      {
        moduleNumber: 1,
        title: "Reactivity Models",
        lessonsCount: 2,
        duration: "25 min",
        lessons: [
          { id: "01", title: "Signals vs Dirty Checking", detail: "Dependency graphs and targeted DOM updates.", duration: "12 min" },
          { id: "02", title: "Preventing Memory Leaks", detail: "Managing computed subscriptions and teardowns.", duration: "13 min" }
        ]
      }
    ]
  },
  {
    id: "restful-api-design",
    title: "RESTful API Design & OpenAPI Spec",
    category: "Backend",
    level: "Beginner",
    lessonsCount: 8,
    duration: "2.0 hrs",
    instructor: "Marcus Chen",
    instructorRole: "API Infrastructure Architect",
    instructorInitials: "MC",
    description: "Semantic HTTP verb compliance, hypermedia structures, schema auto-generation, and contract testing.",
    fullDescription: "Build consistent RESTful APIs following standard HTTP RFCs and automate client code generation using OpenAPI 3.1.",
    modules: [
      {
        moduleNumber: 1,
        title: "HTTP Semantics & Verbs",
        lessonsCount: 2,
        duration: "20 min",
        lessons: [
          { id: "01", title: "Idempotency & Safe Methods", detail: "Proper status code selection and error shapes.", duration: "10 min" },
          { id: "02", title: "OpenAPI Specifications", detail: "Writing declarative schemas and testing contracts.", duration: "10 min" }
        ]
      }
    ]
  },
  {
    id: "database-indexing",
    title: "Database Indexing & Query Tuning",
    category: "Database",
    level: "Intermediate",
    lessonsCount: 16,
    duration: "4.0 hrs",
    instructor: "Tariq Al-Mansoor",
    instructorRole: "Database Operations Lead",
    instructorInitials: "TA",
    description: "B-Tree internals, composite index orders, EXPLAIN output interpretation, and deadlock resolution.",
    fullDescription: "Master SQL indexing strategies, scan types, index-only scans, and analyze query execution plans with EXPLAIN ANALYZE.",
    modules: [
      {
        moduleNumber: 1,
        title: "Storage Engines & B-Trees",
        lessonsCount: 2,
        duration: "30 min",
        lessons: [
          { id: "01", title: "B-Tree Node Splits & Reads", detail: "How storage engines traverse pages on disk.", duration: "15 min" },
          { id: "02", title: "Composite Index Ordering", detail: "Left-most prefix rule and selectivity analysis.", duration: "15 min" }
        ]
      }
    ]
  }
];

// Topic Track Modules (React & Next.js Ecosystem)
export const topicModules: TopicModule[] = [
  {
    moduleNumber: "Module 01",
    title: "Next.js App Router Fundamentals",
    lessonsCount: 14,
    level: "Intermediate",
    instructor: "Alex Rivera",
    instructorRole: "Senior Platform Architect",
    instructorInitials: "AR",
    description: "Master nested layouts, parallel slots, intercepting routes, dynamic segment matching, and optimized loading boundaries in modern Next.js architectures.",
    courseId: "nextjs-app-router"
  },
  {
    moduleNumber: "Module 02",
    title: "Modern State Management & Signals",
    lessonsCount: 10,
    level: "Intermediate",
    instructor: "Aarav Mehta",
    instructorRole: "Reactive Systems Lead",
    instructorInitials: "AM",
    description: "Compare atom-based paradigms, reactive signals, finite state machines, and context optimization strategies without unnecessary component re-renders.",
    courseId: "modern-state-management"
  },
  {
    moduleNumber: "Module 03",
    title: "React Server Components Under the Hood",
    lessonsCount: 8,
    level: "Advanced",
    instructor: "Sarah Lin",
    instructorRole: "Compilers & Runtimes Researcher",
    instructorInitials: "SL",
    description: "Dissect serialized flight data streams, module boundary graph splitting, selective client hydration, and zero-bundle server logic primitives.",
    courseId: "nextjs-app-router"
  },
  {
    moduleNumber: "Module 04",
    title: "Enterprise Monorepo Architectures with React",
    lessonsCount: 12,
    level: "Advanced",
    instructor: "Marcus Chen",
    instructorRole: "Enterprise Infrastructure Lead",
    instructorInitials: "MC",
    description: "Build isolated UI design component packages, orchestrate Turborepo pipelines, configure isolated bundlers, and enforce package isolation boundaries.",
    courseId: "typescript-enterprise-patterns"
  }
];
