// Roadmap Data
const roadmapData = [
  {
    id: 1,
    title: "Kotlin Mastery",
    description: "Foundation for modern Android development",
    color: "#667eea",
    checkpoints: [
      {
        id: "1.1",
        title: "Kotlin Language Fundamentals",
        description:
          "Master basic syntax, variables, functions, and control flow",
        actions:
          "Complete Kotlin Bootcamp on Udacity or Google Codelabs. Build 3-5 small Kotlin programs to practice.",
        difficulty: "beginner",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "1.2",
        title: "Object-Oriented Programming in Kotlin",
        description:
          "Classes, inheritance, interfaces, and extension functions",
        actions:
          "Study OOP concepts in Kotlin. Refactor one of your existing Java projects to use Kotlin classes.",
        difficulty: "beginner",
        estimatedTime: "2 weeks",
      },
      {
        id: "1.3",
        title: "Functional Programming Concepts",
        description:
          "Lambdas, higher-order functions, scope functions, and collections",
        actions:
          "Practice with Kotlin collections (map, filter, reduce). Implement functional approach in Mini Amazon project.",
        difficulty: "intermediate",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "1.4",
        title: "Coroutines Fundamentals",
        description:
          "Async programming with launch, async, and suspend functions",
        actions:
          "Study official Kotlin Coroutines documentation. Build a simple async data fetching app.",
        difficulty: "intermediate",
        estimatedTime: "3 weeks",
      },
      {
        id: "1.5",
        title: "Kotlin Flow & Reactive Programming",
        description: "Stream-based asynchronous data handling",
        actions:
          "Learn Flow API. Implement Flow in a real project for handling real-time updates.",
        difficulty: "advanced",
        estimatedTime: "2-3 weeks",
      },
    ],
  },
  {
    id: 2,
    title: "Modern Android Architecture",
    description: "Build scalable and maintainable applications",
    color: "#764ba2",
    checkpoints: [
      {
        id: "2.1",
        title: "Android Lifecycle & Components",
        description:
          "Deep dive into Activity, Fragment lifecycle, and lifecycle awareness",
        actions:
          "Review Android documentation on lifecycle. Debug your Spotify Clone to understand lifecycle behavior.",
        difficulty: "beginner",
        estimatedTime: "2 weeks",
      },
      {
        id: "2.2",
        title: "MVVM Architecture Pattern",
        description: "Separate concerns with Model-View-ViewModel architecture",
        actions:
          "Study MVVM pattern. Refactor ReadMate project to implement MVVM properly with ViewModel.",
        difficulty: "intermediate",
        estimatedTime: "3 weeks",
      },
      {
        id: "2.3",
        title: "Repository Pattern & Data Layer",
        description: "Abstraction layer between UI and data sources",
        actions:
          "Implement Repository pattern. Create data layer abstraction for mini-amazon project.",
        difficulty: "intermediate",
        estimatedTime: "2 weeks",
      },
      {
        id: "2.4",
        title: "Jetpack ViewModel & LiveData",
        description: "Lifecycle-aware state management and data observation",
        actions:
          "Study ViewModel and LiveData lifecycle. Implement in a new project with real-time updates.",
        difficulty: "intermediate",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "2.5",
        title: "Clean Architecture Implementation",
        description: "Layered architecture: Presentation, Domain, Data",
        actions:
          "Study Clean Architecture principles. Redesign one project with distinct layers.",
        difficulty: "advanced",
        estimatedTime: "4 weeks",
      },
      {
        id: "2.6",
        title: "Dependency Injection with Hilt",
        description: "Android-specific DI framework built on Dagger",
        actions:
          "Learn Hilt framework. Implement Hilt in a project with multiple dependencies.",
        difficulty: "advanced",
        estimatedTime: "2-3 weeks",
      },
    ],
  },
  {
    id: 3,
    title: "Jetpack & Modern UI Development",
    description: "Build responsive and modern user interfaces",
    color: "#f093fb",
    checkpoints: [
      {
        id: "3.1",
        title: "Navigation Component",
        description: "Fragment navigation with type-safe arguments",
        actions:
          "Study Navigation Component documentation. Refactor Spotify Clone navigation using NavGraph.",
        difficulty: "intermediate",
        estimatedTime: "2 weeks",
      },
      {
        id: "3.2",
        title: "RecyclerView & Data Binding",
        description: "Efficient list rendering and declarative UI binding",
        actions:
          "Implement advanced RecyclerView with multiple view types. Use Data Binding in UI components.",
        difficulty: "intermediate",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "3.3",
        title: "Jetpack Compose Fundamentals",
        description: "Declarative UI framework for modern Android",
        actions:
          "Complete Google's Jetpack Compose course. Build 5 reusable Compose components.",
        difficulty: "intermediate",
        estimatedTime: "3-4 weeks",
      },
      {
        id: "3.4",
        title: "Advanced Compose Patterns",
        description: "State management, reusability, and theming in Compose",
        actions:
          "Study advanced Compose patterns. Convert a screen from XML to Compose.",
        difficulty: "advanced",
        estimatedTime: "3 weeks",
      },
      {
        id: "3.5",
        title: "Material Design 3 Implementation",
        description: "Modern Material Design guidelines and components",
        actions:
          "Study Material Design 3. Implement MD3 in a new project with proper theming.",
        difficulty: "intermediate",
        estimatedTime: "2 weeks",
      },
    ],
  },
  {
    id: 4,
    title: "Data Management & APIs",
    description: "Handle data efficiently from various sources",
    color: "#4facfe",
    checkpoints: [
      {
        id: "4.1",
        title: "RESTful API Integration",
        description: "Retrofit 2 for API communication and error handling",
        actions:
          "Review Retrofit 2 documentation. Integrate a real API in your projects with proper error handling.",
        difficulty: "beginner",
        estimatedTime: "2 weeks",
      },
      {
        id: "4.2",
        title: "JSON Parsing & Serialization",
        description: "GSON and Moshi for JSON data handling",
        actions:
          "Practice JSON parsing. Implement custom serialization for complex objects.",
        difficulty: "beginner",
        estimatedTime: "1-2 weeks",
      },
      {
        id: "4.3",
        title: "Local Database with Room",
        description: "SQLite abstraction layer for persistent data storage",
        actions:
          "Study Room database. Implement Room in Spotify Clone for offline caching.",
        difficulty: "intermediate",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "4.4",
        title: "Offline-First Architecture",
        description: "Sync strategies and conflict resolution",
        actions:
          "Design offline-first strategy. Implement sync mechanism in a project.",
        difficulty: "advanced",
        estimatedTime: "3-4 weeks",
      },
      {
        id: "4.5",
        title: "Firebase Integration",
        description: "Firestore, Authentication, Storage, Cloud Messaging",
        actions:
          "Integrate Firebase into a new project. Implement real-time updates and push notifications.",
        difficulty: "intermediate",
        estimatedTime: "3 weeks",
      },
    ],
  },
  {
    id: 5,
    title: "Testing & Quality Assurance",
    description: "Ensure code reliability and quality",
    color: "#43e97b",
    checkpoints: [
      {
        id: "5.1",
        title: "Unit Testing Fundamentals",
        description: "JUnit and Mockito for testing business logic",
        actions:
          "Learn unit testing best practices. Write 20+ unit tests for utility functions.",
        difficulty: "intermediate",
        estimatedTime: "2 weeks",
      },
      {
        id: "5.2",
        title: "Testing ViewModels & LiveData",
        description: "Test lifecycle-aware components effectively",
        actions:
          "Study testing architecture components. Write tests for ViewModel logic.",
        difficulty: "intermediate",
        estimatedTime: "2 weeks",
      },
      {
        id: "5.3",
        title: "UI Testing with Espresso",
        description: "End-to-end testing of user interactions",
        actions:
          "Learn Espresso framework. Write 10+ UI tests for critical user flows.",
        difficulty: "intermediate",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "5.4",
        title: "Code Coverage & Best Practices",
        description: "Measuring and improving test coverage",
        actions:
          "Set up code coverage tools. Achieve 70%+ coverage in one project.",
        difficulty: "advanced",
        estimatedTime: "2 weeks",
      },
      {
        id: "5.5",
        title: "Performance Testing & Profiling",
        description: "Android Profiler for memory, CPU, and battery analysis",
        actions:
          "Profile your Spotify Clone. Identify and fix performance bottlenecks.",
        difficulty: "advanced",
        estimatedTime: "3 weeks",
      },
    ],
  },
  {
    id: 6,
    title: "Advanced Topics & Deployment",
    description: "Production-ready development practices",
    color: "#fa709a",
    checkpoints: [
      {
        id: "6.1",
        title: "App Publishing to Google Play",
        description: "Release process, versioning, and store listing",
        actions:
          "Publish one of your projects to Google Play. Learn store optimization.",
        difficulty: "beginner",
        estimatedTime: "1-2 weeks",
      },
      {
        id: "6.2",
        title: "CI/CD Pipeline Setup",
        description: "GitHub Actions, Jenkins, or Firebase Test Lab",
        actions: "Set up GitHub Actions for automated testing and deployment.",
        difficulty: "advanced",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "6.3",
        title: "Security Best Practices",
        description: "Data encryption, authentication, and API security",
        actions:
          "Implement SSL pinning, secure storage for tokens. Review OWASP guidelines.",
        difficulty: "advanced",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "6.4",
        title: "Analytics & Crash Reporting",
        description: "Firebase Analytics and Crashlytics integration",
        actions: "Implement Firebase Analytics and Crashlytics in a project.",
        difficulty: "intermediate",
        estimatedTime: "1-2 weeks",
      },
      {
        id: "6.5",
        title: "Modularization & Scalability",
        description: "Multi-module project architecture for large teams",
        actions: "Refactor one project into multiple modules for scalability.",
        difficulty: "advanced",
        estimatedTime: "3-4 weeks",
      },
    ],
  },
];

// Learning Resources Data
const resourcesData = [
  {
    category: "Kotlin Mastery",
    resources: [
      {
        title: "Kotlin Bootcamp for Programmers",
        description: "Official Google course on Udacity",
        type: "Course",
      },
      {
        title: "Kotlin Official Documentation",
        description: "Comprehensive language reference",
        type: "Documentation",
      },
      {
        title: "Atomic Kotlin",
        description: "Book by Bruce Eckel and Svetlana Isakova",
        type: "Book",
      },
      {
        title: "Kotlin Coroutines Official Guide",
        description: "Detailed coroutines documentation",
        type: "Documentation",
      },
    ],
  },
  {
    category: "Modern Android Architecture",
    resources: [
      {
        title: "Modern Android Development (MAD)",
        description: "Official Google architecture guidance",
        type: "Course",
      },
      {
        title: "Architecture Blueprints",
        description: "Example projects from Google",
        type: "Repository",
      },
      {
        title: "Clean Architecture Book",
        description: "Robert C. Martin's software architecture principles",
        type: "Book",
      },
      {
        title: "MVVM Tutorial Series",
        description: "Phil Lack's comprehensive MVVM guide",
        type: "Tutorial",
      },
    ],
  },
  {
    category: "Jetpack Libraries",
    resources: [
      {
        title: "Jetpack Documentation",
        description: "Official Google Jetpack library guides",
        type: "Documentation",
      },
      {
        title: "Navigation Component Codelab",
        description: "Google official navigation tutorial",
        type: "Codelab",
      },
      {
        title: "Jetpack Compose Tutorial",
        description: "Step-by-step Compose guide from Google",
        type: "Tutorial",
      },
      {
        title: "Room Database Codelab",
        description: "Hands-on Room database experience",
        type: "Codelab",
      },
    ],
  },
  {
    category: "Data & APIs",
    resources: [
      {
        title: "Retrofit 2 Documentation",
        description: "HTTP client for Android",
        type: "Documentation",
      },
      {
        title: "Firebase Documentation",
        description: "Complete Firebase services guide",
        type: "Documentation",
      },
      {
        title: "RESTful API Design",
        description: "Best practices for API design",
        type: "Guide",
      },
      {
        title: "Postman",
        description: "API testing and prototyping tool",
        type: "Tool",
      },
    ],
  },
  {
    category: "Testing",
    resources: [
      {
        title: "JUnit 4 Documentation",
        description: "Unit testing framework guide",
        type: "Documentation",
      },
      {
        title: "Espresso Testing Codelab",
        description: "UI testing with Espresso",
        type: "Codelab",
      },
      {
        title: "Testing Codelab Collection",
        description: "Comprehensive testing tutorials from Google",
        type: "Codelab",
      },
      {
        title: "Mockito Documentation",
        description: "Mocking framework for testing",
        type: "Documentation",
      },
    ],
  },
  {
    category: "Deployment & DevOps",
    resources: [
      {
        title: "Google Play Developer Console",
        description: "App publishing platform",
        type: "Tool",
      },
      {
        title: "GitHub Actions Documentation",
        description: "CI/CD automation guide",
        type: "Documentation",
      },
      {
        title: "Firebase Test Lab",
        description: "Cloud-based app testing",
        type: "Tool",
      },
      {
        title: "Gradle Build System Guide",
        description: "Android build automation",
        type: "Guide",
      },
    ],
  },
];

// Initialize App
function initApp() {
  loadProgress();
  renderRoadmap();
  renderResources();
  updateStats();
}

// Render Roadmap Stages
function renderRoadmap() {
  const container = document.getElementById("roadmapContainer");
  container.innerHTML = "";

  roadmapData.forEach((stage, index) => {
    const stageEl = createStageElement(stage, index);
    container.appendChild(stageEl);
  });
}

// Create Stage Element
function createStageElement(stage, stageIndex) {
  const stageDiv = document.createElement("div");
  stageDiv.className = "stage";
  stageDiv.id = `stage-${stage.id}`;

  const completedCheckpoints = stage.checkpoints.filter((cp) =>
    isCheckpointCompleted(stage.id, cp.id),
  ).length;
  const completionPercent = Math.round(
    (completedCheckpoints / stage.checkpoints.length) * 100,
  );

  stageDiv.innerHTML = `
                <div class="stage-header">
                    <div class="stage-number">${String(stage.id).padStart(2, "0")}</div>
                    <div class="stage-title">
                        <h2>${stage.title}</h2>
                        <p>${stage.description}</p>
                    </div>
                    <div class="stage-completion">${completedCheckpoints}/${stage.checkpoints.length}</div>
                </div>
                <div class="stage-body" id="stage-body-${stage.id}">
                    ${stage.checkpoints.map((cp) => createCheckpointElement(stage.id, cp)).join("")}
                </div>
                <div class="stage-footer">
                    ${completionPercent}% Complete - Est. ${calculateStageDuration(stage.checkpoints)} weeks
                </div>
            `;

  return stageDiv;
}

// Create Checkpoint Element
function createCheckpointElement(stageId, checkpoint) {
  const isCompleted = isCheckpointCompleted(stageId, checkpoint.id);

  return `
                <div class="checkpoint ${isCompleted ? "completed" : ""}" id="checkpoint-${stageId}-${checkpoint.id}">
                    <div class="checkpoint-header" onclick="toggleCheckpoint('${stageId}', '${checkpoint.id}')">
                        <div class="checkpoint-checkbox ${isCompleted ? "checked" : ""}">
                            <input type="checkbox" ${isCompleted ? "checked" : ""}>
                            <span class="checkmark"></span>
                        </div>
                        <div class="checkpoint-title">
                            <h4>${checkpoint.title}</h4>
                            <p class="checkpoint-description">${checkpoint.description}</p>
                        </div>
                    </div>
                    <div class="checkpoint-actions">
                        <strong>💡 Action Items:</strong>
                        <p>${checkpoint.actions}</p>
                        <div style="display: flex; gap: 10px; margin-top: 8px;">
                            <span class="difficulty ${checkpoint.difficulty}">${checkpoint.difficulty.toUpperCase()}</span>
                            <span style="background: #e0e0e0; padding: 4px 8px; border-radius: 4px; font-size: 0.75em; font-weight: bold; color: #333;">⏱️ ${checkpoint.estimatedTime}</span>
                        </div>
                    </div>
                </div>
            `;
}

// Toggle Checkpoint Completion
function toggleCheckpoint(stageId, checkpointId) {
  const key = `checkpoint-${stageId}-${checkpointId}`;
  const isCompleted = localStorage.getItem(key) === "true";
  localStorage.setItem(key, String(!isCompleted));

  const checkpointEl = document.getElementById(
    `checkpoint-${stageId}-${checkpointId}`,
  );
  const checkbox = checkpointEl.querySelector(".checkpoint-checkbox");

  if (!isCompleted) {
    checkpointEl.classList.add("completed");
    checkbox.classList.add("checked");
  } else {
    checkpointEl.classList.remove("completed");
    checkbox.classList.remove("checked");
  }

  const stage = roadmapData.find((s) => s.id === parseInt(stageId));
  const completedCount = stage.checkpoints.filter((cp) =>
    isCheckpointCompleted(stageId, cp.id),
  ).length;
  const footer = document.querySelector(`#stage-${stageId} .stage-footer`);
  const completionPercent = Math.round(
    (completedCount / stage.checkpoints.length) * 100,
  );
  footer.innerHTML = `
                ${completionPercent}% Complete - Est. ${calculateStageDuration(stage.checkpoints)} weeks
            `;

  updateStats();
}

// Check if Checkpoint is Completed
function isCheckpointCompleted(stageId, checkpointId) {
  return (
    localStorage.getItem(`checkpoint-${stageId}-${checkpointId}`) === "true"
  );
}

// Calculate Stage Duration
function calculateStageDuration(checkpoints) {
  const durations = checkpoints.map((cp) => {
    const match = cp.estimatedTime.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  });
  return Math.max(...durations);
}

// Update Statistics
function updateStats() {
  let totalCompleted = 0;
  let totalCheckpoints = 0;

  roadmapData.forEach((stage) => {
    stage.checkpoints.forEach((cp) => {
      totalCheckpoints++;
      if (isCheckpointCompleted(stage.id, cp.id)) {
        totalCompleted++;
      }
    });
  });

  const completionPercent =
    totalCheckpoints > 0
      ? Math.round((totalCompleted / totalCheckpoints) * 100)
      : 0;

  document.getElementById("completedCount").textContent = totalCompleted;
  document.getElementById("totalCount").textContent = totalCheckpoints;
  document.getElementById("completionRate").textContent =
    completionPercent + "%";

  const progressFill = document.getElementById("overallProgress");
  progressFill.style.width = completionPercent + "%";
  progressFill.textContent = completionPercent + "%";
}

// Render Resources
function renderResources() {
  const container = document.getElementById("resourcesContainer");
  container.innerHTML = "";

  resourcesData.forEach((category) => {
    category.resources.forEach((resource) => {
      const resourceEl = document.createElement("div");
      resourceEl.className = "resource-card";
      resourceEl.innerHTML = `
                        <h4>📚 ${resource.title}</h4>
                        <p>${resource.description}</p>
                        <span class="resource-type">${resource.type}</span>
                    `;
      container.appendChild(resourceEl);
    });
  });
}

// Load Progress from localStorage
function loadProgress() {
  console.log("Progress loaded from localStorage");
}

// Reset All Progress
function resetProgress() {
  if (
    confirm(
      "Are you sure you want to reset all progress? This action cannot be undone.",
    )
  ) {
    roadmapData.forEach((stage) => {
      stage.checkpoints.forEach((cp) => {
        localStorage.removeItem(`checkpoint-${stage.id}-${cp.id}`);
      });
    });
    renderRoadmap();
    updateStats();
    alert("Progress has been reset!");
  }
}

// Export Progress
function exportProgress() {
  let exportData = {
    exportDate: new Date().toLocaleString(),
    overallCompletion: document.getElementById("completionRate").textContent,
    checkpoints: [],
  };

  roadmapData.forEach((stage) => {
    stage.checkpoints.forEach((cp) => {
      if (isCheckpointCompleted(stage.id, cp.id)) {
        exportData.checkpoints.push({
          stage: stage.title,
          checkpoint: cp.title,
          completed: true,
        });
      }
    });
  });

  const jsonString = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `android-roadmap-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  alert("Progress exported successfully!");
}

// Toggle All Stages
function toggleAllStages() {
  const bodies = document.querySelectorAll(".stage-body");
  bodies.forEach((body) => {
    body.style.display = body.style.display === "none" ? "block" : "none";
  });
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", initApp);
