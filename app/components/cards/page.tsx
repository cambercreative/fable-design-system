import * as React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { StoryCard } from "@/components/patterns/story-card";
import { MemoryCollectionCard } from "@/components/patterns/memory-collection-card";
import ComponentExample from "@/components/component-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Cards",
  description: "Card components for displaying content with preview and metadata.",
};

const storyCardCode = `import { StoryCard } from "@/components/patterns/story-card";

export default function StoriesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <StoryCard 
        title="My Summer Vacation in Italy"
        timestamp={new Date(2025, 2, 15)}
        duration={180}
        thumbnail="/images/italy-thumbnail.jpg"
        onPress={() => console.log('Story pressed')}
      />
      <StoryCard 
        title="Grandma's Apple Pie Recipe"
        timestamp={new Date(2025, 1, 28)}
        duration={420}
        onPress={() => console.log('Story pressed')}
      />
      <StoryCard 
        title="First Day at New Job"
        timestamp={new Date(2025, 3, 1)}
        duration={300}
        thumbnail="/images/office-thumbnail.jpg"
        selected
        onPress={() => console.log('Story pressed')}
      />
    </div>
  )
}`;

const memoryCollectionCardCode = `import { MemoryCollectionCard } from "@/components/patterns/memory-collection-card";

export default function CollectionsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MemoryCollectionCard 
        title="Summer Vacation 2024"
        description="Our family trip to the Mediterranean"
        coverImage="/images/vacation-cover.jpg"
        itemCount={12}
        progress={75}
        onPress={() => console.log('Collection pressed')}
      />
      <MemoryCollectionCard 
        title="Grandparents' Stories"
        description="Memories and wisdom from both sides of the family"
        coverImage="/images/grandparents-cover.jpg"
        itemCount={8}
        progress={25}
        selected
        onPress={() => console.log('Collection pressed')}
      />
    </div>
  )
}`;

export default function CardsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-display font-faro font-bold mb-4">Cards</h1>
      <p className="text-body font-atkinson mb-8">
        Card components for displaying content with preview and metadata.
        Cards provide a consistent visual container for content with clear hierarchy
        and interaction states.
      </p>

      <Tabs defaultValue="story-card" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="story-card">Story Card</TabsTrigger>
          <TabsTrigger value="memory-collection">Memory Collection Card</TabsTrigger>
        </TabsList>
        
        <TabsContent value="story-card" className="space-y-8">
          <h2 className="text-title-1 font-faro font-bold">Story Card</h2>
          <p className="text-body font-atkinson">
            Displays a single story entry with preview and metadata. Used for displaying
            stories in lists and grids.
          </p>

          <ComponentExample 
            title="Basic Usage" 
            description="A basic story card with title, timestamp, and duration."
            code={`<StoryCard 
  title="My First Memory"
  timestamp={new Date(2025, 2, 15)}
  duration={180}
  onPress={() => console.log('Story pressed')}
/>`}
          >
            <div className="w-full max-w-md mx-auto">
              <StoryCard 
                title="My First Memory"
                timestamp={new Date(2025, 2, 15)}
                duration={180}
                onPress={() => console.log('Story pressed')}
              />
            </div>
          </ComponentExample>

          <ComponentExample 
            title="With Thumbnail" 
            description="A story card with an optional thumbnail image."
            code={`<StoryCard 
  title="Trip to the Beach"
  timestamp={new Date(2025, 3, 10)}
  duration={240}
  thumbnail="/placeholder/300/200"
  onPress={() => console.log('Story pressed')}
/>`}
          >
            <div className="w-full max-w-md mx-auto">
              <StoryCard 
                title="Trip to the Beach"
                timestamp={new Date(2025, 3, 10)}
                duration={240}
                thumbnail="/api/placeholder/300/200"
                onPress={() => console.log('Story pressed')}
              />
            </div>
          </ComponentExample>

          <ComponentExample 
            title="Selected State" 
            description="A story card in the selected state."
            code={`<StoryCard 
  title="Wedding Anniversary"
  timestamp={new Date(2025, 1, 20)}
  duration={360}
  thumbnail="/placeholder/300/200"
  selected
  onPress={() => console.log('Story pressed')}
/>`}
          >
            <div className="w-full max-w-md mx-auto">
              <StoryCard 
                title="Wedding Anniversary"
                timestamp={new Date(2025, 1, 20)}
                duration={360}
                thumbnail="/api/placeholder/300/200"
                selected
                onPress={() => console.log('Story pressed')}
              />
            </div>
          </ComponentExample>

          <ComponentExample 
            title="Long Title" 
            description="A story card with a long title that truncates after two lines."
            code={`<StoryCard 
  title="This is a very long story title that will be truncated after two lines to ensure proper display and maintain the design's visual hierarchy"
  timestamp={new Date(2025, 0, 5)}
  duration={180}
  onPress={() => console.log('Story pressed')}
/>`}
          >
            <div className="w-full max-w-md mx-auto">
              <StoryCard 
                title="This is a very long story title that will be truncated after two lines to ensure proper display and maintain the design's visual hierarchy"
                timestamp={new Date(2025, 0, 5)}
                duration={180}
                onPress={() => console.log('Story pressed')}
              />
            </div>
          </ComponentExample>

          <ComponentExample 
            title="Grid Layout" 
            description="Multiple story cards in a responsive grid layout."
            code={storyCardCode}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <StoryCard 
                title="My Summer Vacation in Italy"
                timestamp={new Date(2025, 2, 15)}
                duration={180}
                thumbnail="/api/placeholder/300/200"
                onPress={() => console.log('Story pressed')}
              />
              <StoryCard 
                title="Grandma's Apple Pie Recipe"
                timestamp={new Date(2025, 1, 28)}
                duration={420}
                onPress={() => console.log('Story pressed')}
              />
              <StoryCard 
                title="First Day at New Job"
                timestamp={new Date(2025, 3, 1)}
                duration={300}
                thumbnail="/api/placeholder/300/200"
                selected
                onPress={() => console.log('Story pressed')}
              />
            </div>
          </ComponentExample>

          <h3 className="text-headline font-faro font-medium">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left text-body font-faro">Prop</th>
                  <th className="py-2 px-4 text-left text-body font-faro">Type</th>
                  <th className="py-2 px-4 text-left text-body font-faro">Default</th>
                  <th className="py-2 px-4 text-left text-body font-faro">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">title</td>
                  <td className="py-2 px-4 font-atkinson text-body">string</td>
                  <td className="py-2 px-4 font-atkinson text-body">-</td>
                  <td className="py-2 px-4 font-atkinson text-body">The title of the story.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">timestamp</td>
                  <td className="py-2 px-4 font-atkinson text-body">string | Date</td>
                  <td className="py-2 px-4 font-atkinson text-body">-</td>
                  <td className="py-2 px-4 font-atkinson text-body">The timestamp when the story was recorded or created.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">duration</td>
                  <td className="py-2 px-4 font-atkinson text-body">number</td>
                  <td className="py-2 px-4 font-atkinson text-body">-</td>
                  <td className="py-2 px-4 font-atkinson text-body">The duration of the story in seconds.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">thumbnail</td>
                  <td className="py-2 px-4 font-atkinson text-body">string</td>
                  <td className="py-2 px-4 font-atkinson text-body">undefined</td>
                  <td className="py-2 px-4 font-atkinson text-body">Optional URL to a thumbnail image.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">selected</td>
                  <td className="py-2 px-4 font-atkinson text-body">boolean</td>
                  <td className="py-2 px-4 font-atkinson text-body">false</td>
                  <td className="py-2 px-4 font-atkinson text-body">Whether the card is in the selected state.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">onPress</td>
                  <td className="py-2 px-4 font-atkinson text-body">() => void</td>
                  <td className="py-2 px-4 font-atkinson text-body">undefined</td>
                  <td className="py-2 px-4 font-atkinson text-body">Callback function when the card is clicked.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-headline font-faro font-medium">Accessibility</h3>
          <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
            <li>The card is implemented with the <code>role="article"</code> attribute.</li>
            <li>Selected state is communicated via <code>aria-selected</code> attribute.</li>
            <li>Interactive cards have appropriate focus indicators.</li>
            <li>Card content follows a logical heading structure.</li>
          </ul>
        </TabsContent>
        
        <TabsContent value="memory-collection" className="space-y-8">
          <h2 className="text-title-1 font-faro font-bold">Memory Collection Card</h2>
          <p className="text-body font-atkinson">
            Displays a grouping of related stories with progress indication. Used for
            thematic or chronological story collections.
          </p>

          <ComponentExample 
            title="Basic Usage" 
            description="A memory collection card with title and progress."
            code={`<MemoryCollectionCard 
  title="Family Recipes"
  itemCount={5}
  progress={40}
  onPress={() => console.log('Collection pressed')}
/>`}
          >
            <div className="w-full max-w-md mx-auto">
              <MemoryCollectionCard 
                title="Family Recipes"
                itemCount={5}
                progress={40}
                onPress={() => console.log('Collection pressed')}
              />
            </div>
          </ComponentExample>

          <ComponentExample 
            title="With Cover Image and Description" 
            description="A memory collection card with cover image and description."
            code={`<MemoryCollectionCard 
  title="Travel Memories"
  description="Our favorite trips around the world"
  coverImage="/placeholder/600/300"
  itemCount={12}
  progress={75}
  onPress={() => console.log('Collection pressed')}
/>`}
          >
            <div className="w-full max-w-md mx-auto">
              <MemoryCollectionCard 
                title="Travel Memories"
                description="Our favorite trips around the world"
                coverImage="/api/placeholder/600/300"
                itemCount={12}
                progress={75}
                onPress={() => console.log('Collection pressed')}
              />
            </div>
          </ComponentExample>

          <ComponentExample 
            title="Selected State" 
            description="A memory collection card in the selected state."
            code={`<MemoryCollectionCard 
  title="Childhood Moments"
  description="Growing up in the 90s"
  coverImage="/placeholder/600/300"
  itemCount={8}
  progress={50}
  selected
  onPress={() => console.log('Collection pressed')}
/>`}
          >
            <div className="w-full max-w-md mx-auto">
              <MemoryCollectionCard 
                title="Childhood Moments"
                description="Growing up in the 90s"
                coverImage="/api/placeholder/600/300"
                itemCount={8}
                progress={50}
                selected
                onPress={() => console.log('Collection pressed')}
              />
            </div>
          </ComponentExample>

          <ComponentExample 
            title="Grid Layout" 
            description="Multiple memory collection cards in a responsive grid layout."
            code={memoryCollectionCardCode}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MemoryCollectionCard 
                title="Summer Vacation 2024"
                description="Our family trip to the Mediterranean"
                coverImage="/api/placeholder/600/300"
                itemCount={12}
                progress={75}
                onPress={() => console.log('Collection pressed')}
              />
              <MemoryCollectionCard 
                title="Grandparents' Stories"
                description="Memories and wisdom from both sides of the family"
                coverImage="/api/placeholder/600/300"
                itemCount={8}
                progress={25}
                selected
                onPress={() => console.log('Collection pressed')}
              />
            </div>
          </ComponentExample>

          <h3 className="text-headline font-faro font-medium">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left text-body font-faro">Prop</th>
                  <th className="py-2 px-4 text-left text-body font-faro">Type</th>
                  <th className="py-2 px-4 text-left text-body font-faro">Default</th>
                  <th className="py-2 px-4 text-left text-body font-faro">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">title</td>
                  <td className="py-2 px-4 font-atkinson text-body">string</td>
                  <td className="py-2 px-4 font-atkinson text-body">-</td>
                  <td className="py-2 px-4 font-atkinson text-body">The title of the collection.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">description</td>
                  <td className="py-2 px-4 font-atkinson text-body">string</td>
                  <td className="py-2 px-4 font-atkinson text-body">undefined</td>
                  <td className="py-2 px-4 font-atkinson text-body">Optional description of the collection.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">coverImage</td>
                  <td className="py-2 px-4 font-atkinson text-body">string</td>
                  <td className="py-2 px-4 font-atkinson text-body">undefined</td>
                  <td className="py-2 px-4 font-atkinson text-body">Optional URL to a cover image.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">itemCount</td>
                  <td className="py-2 px-4 font-atkinson text-body">number</td>
                  <td className="py-2 px-4 font-atkinson text-body">-</td>
                  <td className="py-2 px-4 font-atkinson text-body">The number of items (stories) in the collection.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">progress</td>
                  <td className="py-2 px-4 font-atkinson text-body">number</td>
                  <td className="py-2 px-4 font-atkinson text-body">-</td>
                  <td className="py-2 px-4 font-atkinson text-body">The progress value (0-100) showing completion percentage.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">selected</td>
                  <td className="py-2 px-4 font-atkinson text-body">boolean</td>
                  <td className="py-2 px-4 font-atkinson text-body">false</td>
                  <td className="py-2 px-4 font-atkinson text-body">Whether the card is in the selected state.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-atkinson text-body font-medium">onPress</td>
                  <td className="py-2 px-4 font-atkinson text-body">() => void</td>
                  <td className="py-2 px-4 font-atkinson text-body">undefined</td>
                  <td className="py-2 px-4 font-atkinson text-body">Callback function when the card is clicked.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-headline font-faro font-medium">Accessibility</h3>
          <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
            <li>The card is implemented with the <code>role="group"</code> attribute.</li>
            <li>Progress bar has appropriate ARIA attributes for screen readers.</li>
            <li>Selected state is communicated via <code>aria-selected</code> attribute.</li>
            <li>Interactive cards have appropriate focus indicators.</li>
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
