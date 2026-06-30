import ArcRevealHero from "./ui/arc-preloader-hero";

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  return (
    <ArcRevealHero
      sentence="Building secure solutions for a connected world."
      holdDuration={1800}
      revealDuration={1300}
      onComplete={onEnter}
    />
  );
}
