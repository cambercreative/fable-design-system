"use client";

import React, { useEffect, useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';

interface NodeData {
  id: string;
  group: string;
  file: string | null;
}

interface LinkData {
  source: number;
  target: number;
  value: number;
}

interface GraphData {
  nodes: NodeData[];
  links: LinkData[];
}

interface MetadataType {
  totalComponents: number;
  uiComponents: number;
  patternComponents: number;
  themeComponents: number;
  layoutComponents: number;
  totalDependencies: number;
  generatedAt: string;
}

interface FullData {
  graph: GraphData;
  metadata: MetadataType;
}

export default function DependenciesPage() {
  const [graphData, setGraphData] = useState<FullData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Node color map based on component group
  const groupColors: { [key: string]: string } = {
    ui: '#FF3300', // Fable Red
    pattern: '#FFB800', // Fable Amber
    theme: '#5B267B', // Fable Deep Purple
    layout: '#1A5FB4', // Fable Deep Blue
    external: '#666666',
    other: '#AAAAAA'
  };

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        const response = await fetch('/data/component-dependencies.json');
        
        if (!response.ok) {
          throw new Error(`Failed to load dependency data: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        setGraphData(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading dependency graph:', err);
        setError(err instanceof Error ? err.message : 'Failed to load dependency graph');
        setIsLoading(false);
      }
    };

    fetchGraphData();

    // Set dimensions based on window size
    const handleResize = () => {
      setDimensions({
        width: Math.max(window.innerWidth * 0.9, 300),
        height: Math.max(window.innerHeight * 0.7, 400)
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center p-12">
        <div className="text-center">
          <div className="fable-gradient inline-block h-12 w-12 animate-spin rounded-full"></div>
          <p className="mt-4 text-body">Loading component dependency graph...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="mb-4 text-display font-faro">Component Dependencies</h1>
        <div className="rounded-m border border-status-error bg-surface-secondary p-4 text-status-error">
          <h2 className="mb-2 text-title-2">Error Loading Dependency Graph</h2>
          <p>{error}</p>
          <p className="mt-4">
            The dependency graph may not have been generated. Try running <code className="rounded-xs bg-surface-tertiary px-2 py-1">npm run generate-dep-graph</code> and then rebuild the site.
          </p>
        </div>
      </div>
    );
  }

  if (!graphData) {
    return (
      <div className="p-6">
        <h1 className="mb-4 text-display font-faro">Component Dependencies</h1>
        <div className="rounded-m border border-status-warning bg-surface-secondary p-4 text-status-warning">
          <h2 className="mb-2 text-title-2">No Dependency Data Available</h2>
          <p>
            The component dependency graph has not been generated. Run <code className="rounded-xs bg-surface-tertiary px-2 py-1">npm run generate-dep-graph</code> to create it.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-4 text-display font-faro">Component Dependencies</h1>
      
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="rounded-m bg-surface-secondary p-4">
          <h3 className="text-headline">Total Components</h3>
          <p className="text-display text-gradient">{graphData.metadata.totalComponents}</p>
        </div>
        <div className="rounded-m bg-surface-secondary p-4">
          <h3 className="text-headline">UI Components</h3>
          <p className="text-display text-gradient">{graphData.metadata.uiComponents}</p>
        </div>
        <div className="rounded-m bg-surface-secondary p-4">
          <h3 className="text-headline">Pattern Components</h3>
          <p className="text-display text-gradient">{graphData.metadata.patternComponents}</p>
        </div>
        <div className="rounded-m bg-surface-secondary p-4">
          <h3 className="text-headline">Theme Components</h3>
          <p className="text-display text-gradient">{graphData.metadata.themeComponents}</p>
        </div>
        <div className="rounded-m bg-surface-secondary p-4">
          <h3 className="text-headline">Dependencies</h3>
          <p className="text-display text-gradient">{graphData.metadata.totalDependencies}</p>
        </div>
      </div>
      
      <div className="mb-6 rounded-m bg-surface-secondary p-4">
        <h2 className="mb-4 text-title-1">Dependency Graph</h2>
        <p className="mb-6 text-body text-text-secondary">
          This graph shows the relationships between components in the Fable Design System.
          Each node represents a component, and each link represents a dependency.
          Hover over a node to see its details.
        </p>
        
        <div className="rounded-m border border-border-default bg-surface-tertiary">
          {/* @ts-ignore - ForceGraph has type issues but works correctly */}
          <ForceGraph2D
            graphData={graphData.graph}
            width={dimensions.width}
            height={dimensions.height}
            nodeLabel={(node: any) => `${node.id} (${node.group})`}
            nodeColor={(node: any) => groupColors[node.group] || groupColors.other}
            linkColor={() => 'rgba(255, 180, 0, 0.2)'}
            linkWidth={1}
            nodeRelSize={6}
            cooldownTime={2000}
            onNodeClick={(node: any) => {
              if (node.file) {
                alert(`Component: ${node.id}\nFile: ${node.file}\nGroup: ${node.group}`);
              }
            }}
          />
        </div>
        
        <div className="mt-4 flex flex-wrap gap-4">
          {Object.entries(groupColors).map(([group, color]) => (
            <div key={group} className="flex items-center">
              <div
                className="mr-2 h-4 w-4 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-caption capitalize">{group}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-caption text-text-tertiary">
        Last updated: {new Date(graphData.metadata.generatedAt).toLocaleString()}
      </div>
    </div>
  );
}
