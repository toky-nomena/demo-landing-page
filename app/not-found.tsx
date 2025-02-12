import { Container } from "@/components/container";
import { Title } from "@/components/ui/title";
import { BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <Container>
      <BookOpen className="w-10 h-10" />
      <span>Page introuvable</span>
    </Container>
  );
}
