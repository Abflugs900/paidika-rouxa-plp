import React from 'react';
import { MapPin, Phone, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Παιδικά Ρούχα Online</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Λ. Ειρήνης, 179, 18863 Πόρτα</p>
                  <p>Αττική</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>6948 064 254</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>6969 891 479</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>210 44 16 621</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Λ. Ειρήνης, 109, 18863 Πόρτα</p>
                    <p>Αττική</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>211 40 17 681</span>
                </div>
              </div>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Πληροφορίες</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Κατάστημα</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Όροι Χρήσης</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Προσωπικά Δεδομένα</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Μεγεθολόγιο - Πίνακας</a></li>
            </ul>
          </div>

          {/* Order Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Παραγγελίες</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Παραγγελίες</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Πληρωμές</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Αποστολές</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Επιστροφές - Αλλαγές</a></li>
            </ul>
          </div>

          {/* User Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Χρήστης</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Λογαριασμός</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Κουπόνι</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Αναζήτηση παραγγελίας</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © 2024, All Rights Reserved | Powered By Protasoft
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded">
              <span className="text-sm font-medium">4.9</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm">1655 Αξιολογήσεις Πελατών</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

