type ModalProps = {
  children: React.ReactNode
  onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className='
          relative
          w-[calc(100svw*9/12)]
          h-[calc(100svh-7rem)]
          rounded-3xl
          bg-white/70
          backdrop-blur-2xl 
          border 
          border-white/20 
          shadow-xl p-8 
          transition 
          duration-500 
          hover:shadow-2xl
          p-10
        '
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            text-slate-400 hover:text-slate-600
          "
        >
          ปิดหน้าต่าง
        </button>
        {children}
      </div>
    </div>
  )
}
