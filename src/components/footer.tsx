// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-50 text-gray-900 text-sm py-6 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto space-y-4">
          <p>
            <span className="font-semibold">Disclaimer:</span> We are an authorised marketing partner for this project.
            Provided content is given by respective owners and this website and content is for information purpose only and
            it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior
            notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details
            registered with us.
          </p>
  
          <hr className="border-gray-300" />
  
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <p>
              Contact Us at - #2304, Cyber One, Sector 30(A), Vashi, Navi Mumbai - 400703
            </p>
            <p>© Copyright</p>
          </div>
        </div>
      </footer>
    );
  }
  