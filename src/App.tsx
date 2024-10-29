import './App.css';
import { Logo } from './components/Logo';
import LeaveReasonGenerator from './LeaveReasonGenerator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-6">
          <div className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Logo />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Reason for Leave Generator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Currently, the work is in progress, and I need to focus on enhancing
            the prompt structure and templates.
          </p>
        </div>
        <section className="max-w-4xl mx-auto">
          <LeaveReasonGenerator />

          <footer className="mt-8 text-center text-gray-500 text-sm">
            <p className="p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-gray-100">
              Note: The outputs from the prompts are currently generic and being
              improved.
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default App;
