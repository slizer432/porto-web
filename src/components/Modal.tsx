import Modal from "react-modal";
import { ExternalLink, X } from "lucide-react";
import { FiGithub } from "react-icons/fi";

Modal.setAppElement("#root");

type ProjectDetails = {
  image: string;
  title: string;
  desc: string;
  category: string;
  tech: string[];
  links: {
    github: string;
    live?: string;
  };
};

function CustomModal({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project?: ProjectDetails | null;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={200}
      className={{
        base: "modal-content bg-white w-full max-w-3xl rounded-xl shadow-2xl outline-none overflow-hidden",
        afterOpen: "modal-content--after-open",
        beforeClose: "modal-content--before-close",
      }}
      overlayClassName={{
        base: "modal-overlay fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",
        afterOpen: "modal-overlay--after-open",
        beforeClose: "modal-overlay--before-close",
      }}
    >
      <div className="relative bg-white">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 rounded-full border border-black/20 bg-white/90 p-2 text-black shadow-sm transition hover:bg-black hover:text-white"
        >
          <X size={16} />
        </button>
        <div className="h-64 w-full bg-black">
          <img
            src={project?.image}
            alt={project?.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {project?.category}
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-900">
            {project?.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {project?.desc}
          </p>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Technologies
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project?.tech?.map((item) => (
                <span
                  key={item}
                  className="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {project?.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded border border-slate-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-black"
              >
                View Live
                <ExternalLink size={14} />
              </a>
            )}
            <a
              href={project?.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-black bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
            >
              Source Code
              <FiGithub size={14} />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CustomModal;
