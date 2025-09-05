// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--gradient-bg)' }}>
      <div className="text-center p-8 rounded-3xl" style={{ 
        background: 'var(--gradient-primary)', 
        boxShadow: 'var(--shadow-glow)' 
      }}>
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ✨ Welcome to Your Beautiful App ✨
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Start building your amazing project with these gorgeous pastel colors!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="w-6 h-6 rounded-full bg-primary shadow-lg"></div>
            <div className="w-6 h-6 rounded-full bg-secondary shadow-lg"></div>
            <div className="w-6 h-6 rounded-full bg-accent shadow-lg"></div>
            <div className="w-6 h-6 rounded-full bg-muted shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
