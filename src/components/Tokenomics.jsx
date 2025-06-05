import React from 'react';

const tokenData = [
  { label: 'Burn', percentage: 30, color: '#F97316' }, // orange-500
  { label: 'Community', percentage: 40, color: '#FBBF24' }, // yellow-400
  { label: 'Dev & Marketing', percentage: 15, color: '#34D399' }, // green-400
  { label: 'Liquidity', percentage: 15, color: '#60A5FA' }, // blue-400
];

// Helper to create pie slices
const createPieSlices = (data) => {
  const total = data.reduce((acc, d) => acc + d.percentage, 0);
  let cumulativePercent = 0;

  return data.map((slice, index) => {
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
    cumulativePercent += slice.percentage / total;
    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

    // If slice > 50%, large-arc-flag is 1
    const largeArcFlag = slice.percentage / total > 0.5 ? 1 : 0;

    const pathData = `
      M 0 0
      L ${startX} ${startY}
      A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}
      Z
    `;

    return (
      <path key={index} d={pathData} fill={slice.color} />
    );
  });
};

// Converts a percentage (0 to 1) to x,y coords on the unit circle
const getCoordinatesForPercent = (percent) => {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
};

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Tokenomics Breakdown</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Pie chart */}
          <svg
            viewBox="-1 -1 2 2"
            style={{ transform: 'rotate(-90deg)' }}
            className="w-56 h-56 mx-auto"
          >
            {createPieSlices(tokenData)}
          </svg>

          {/* Details */}
          <div className="md:w-1/2 space-y-6 text-left">
            {tokenData.map(({ label, percentage, color }) => (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
                <p className="text-lg font-medium text-gray-700">
                  {label}: <span className="text-gray-900">{percentage}%</span>
                </p>
              </div>
            ))}

            {/* Contract address */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contract Address</h3>
              <div className="bg-white p-4 rounded-md shadow-sm break-all font-mono text-sm">
                9ibewRtF2yGBNumg3K3uL2GahsUeQ1zsBjb76Eypump
              </div>
              <a
                href="https://explorer.solana.com/address/9ibewRtF2yGBNumg3K3uL2GahsUeQ1zsBjb76Eypump"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-orange-500 hover:underline"
              >
                View on Solana Explorer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
