import Image from 'next/image';

export function ImageSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Team Images */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-regent-gray-900 mb-2">
                Vårt team
              </h3>
              <p className="text-regent-gray-600">
                Kompetenta konsulter som brinner för teknik och samarbete
              </p>
            </div>
            
            {/* Individual Team Member Photos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">              
              <div className="text-center">
                <div className="relative w-48 h-60 mx-auto mb-4">
                  <Image
                    src="/images/team-member-2.jpg"
                    alt="Tech Lead - Professional headshot"
                    fill
                    className="rounded-lg shadow-md object-cover"
                    priority
                  />
                </div>
                <h4 className="font-semibold text-regent-gray-900 mb-1">CEO</h4>
                <p className="text-sm text-regent-gray-600">Ledning & Styrning</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-48 h-60 mx-auto mb-4">
                  <Image
                    src="/images/team-member-1.jpg"
                    alt="Senior Consultant - Professional headshot"
                    fill
                    className="rounded-lg shadow-md object-cover"
                    priority
                  />
                </div>
                <h4 className="font-semibold text-regent-gray-900 mb-1">Sales</h4>
                <p className="text-sm text-regent-gray-600"></p>
              </div>

              <div className="text-center">
                <div className="relative w-48 h-60 mx-auto mb-4">
                  <Image
                    src="/images/team-member-3.jpg"
                    alt="Project Manager - Professional headshot"
                    fill
                    className="rounded-lg shadow-md object-cover"
                    priority
                  />
                </div>
                <h4 className="font-semibold text-regent-gray-900 mb-1">Senior Consultant</h4>
                <p className="text-sm text-regent-gray-600">Full-stack</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-regent-gray-500">
                + 100+ andra experter inom IT
              </p>
            </div>
          </div>

          {/* Office Image */}
          <div className="space-y-4">
            <Image
              src="/images/office-photo.jpg"
              alt="Regent office - Modern open-plan workspace with employees"
              width={800}
              height={450}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-regent-gray-900 mb-2">
                Vårt kontor
              </h3>
              <p className="text-regent-gray-600">
                Modernt kontor i hjärtat av Stockholm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
