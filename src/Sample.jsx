const Sample = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#141b2d] text-white flex items-center justify-center">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Glass window */}
      <div className="relative z-10 max-w-3xl w-[90%] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
          Aesthetic Transparent Grid Window
        </h1>
        <p className="mt-4 text-white/80 max-w-prose">
          Clean glass card with a frosted blur over a subtle grid. Perfect for hero sections,
          modals, or feature callouts.
        </p>

        {/* Grid content inside the glass window */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">Item 1</div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">Item 2</div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">Item 3</div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Sample;