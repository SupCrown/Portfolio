import { useState } from 'react';

export default function Terminal() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([]);

  const sendCommand = async () => {
    // Remplacer l'URL par l'adresse de votre backend.
    const response = await fetch('http://localhost:8000/api/ssh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command }),
    });

    const data = await response.json();
    setOutput((prev) => [...prev, `> ${command}`, data.output]);
    setCommand('');
  };

  return (
    <section className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Terminal SSH</h1>
      <div className="bg-gray-800 rounded p-4 mb-4">
        {output.map((line, idx) => (
          <div key={idx} className="text-green-400">{line}</div>
        ))}
      </div>
      <input
        type="text"
        className="w-full p-2 rounded bg-gray-700 text-white"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Entrez une commande..."
      />
      <button
        onClick={sendCommand}
        className="mt-4 bg-blue-500 p-2 rounded hover:bg-blue-600"
      >
        Envoyer
      </button>
    </section>
  );
}