import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Hola</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>

      <Button variant="outline" size="icon" aria-label="Submit">
        +
      </Button>

      <Button variant="outline" size="sm">
        {/* <IconGitBranch /> New Branch */}
        New Branch
      </Button>

      <Button variant="outline" size="icon" className="rounded-full">
        {/* <ArrowUpRightIcon /> */}
        +
      </Button>

      <Button size="sm" variant="outline" disabled>
        {/* <Spinner /> */} +
        Submit
      </Button>

    </div>
  );
}
