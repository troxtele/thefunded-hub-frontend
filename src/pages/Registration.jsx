import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { arrow, tringle } from "../ui/images";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Registration() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section className="registration relative">
        <div className="container">
          <div className="wrapper flex justify-center items-center min-h-[40vh] py-20">
            <form
              className="grid gap-6 sm:gap-8 md:gap-10 p-7 sm:p-9 md:p-12 relative z-10 rounded-xl bg-primary/[5%] max-w-[35rem]  border-primary"
              action=""
            >
              <div className="heading flex justify-center items-center">
                <h1 className="text-center text-xl xs:text-2xl sm:text-3xl px-4 sm:px-8">
                  Registration
                </h1>
              </div>
              {/* Slected */}
              <div className="selecte-title">
                <div className="wrapper relative mt-2">
                  {/* arrow */}
                  <img
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-5"
                    src={arrow}
                    alt="arrow"
                  />
                  <select
                    id="country"
                    name="country"
                    className="form-control w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200 bg-[#13121f]"
                  >
                    <option value="Mr.">Select Title</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mr.">Ms.</option>
                    <option value="Mr.">Mrs.</option>
                    <option value="Mr.">Mx.</option>
                  </select>
                </div>
              </div>
              {/* First name */}
              <div className="first-name">
                <input
                  name="first-name"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              {/* Last name */}
              <div className="last-name">
                <input
                  name="last-name"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              {/* Email */}
              <div className="email">
                <input
                  name="email"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  type="email"
                  placeholder="Email"
                />
              </div>
              {/* Mobile */}
              <div className="mobile">
                <input
                  name="mobile"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200 appearance-none m-0"
                  type="number"
                  placeholder="Mobile"
                />
              </div>
              {/* Password */}
              <div className="password">
                <input
                  name="password"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  type="password"
                  placeholder="Password"
                />
              </div>
              {/* Confirm Password */}
              <div className="confirm-pass">
                <input
                  name="confirm-pass"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              {/* Country Residence */}
              <div className="country-residence">
                <div className="wrapper relative">
                  {/* arrow */}
                  <img
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-5"
                    src={arrow}
                    alt="arrow"
                  />
                  <select
                    id="country"
                    name="country"
                    className="form-control w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200 bg-[#13121f]"
                  >
                    <option selected>Choose a country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, The Democratic Republic of The">
                      Congo, The Democratic Republic of The
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'ivoire">Cote D&apos;ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-bissau">Guinea-bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See (Vatican City State)">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">
                      Korea, Democratic People&apos;s Republic of
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">
                      Lao People&apos;s Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">
                      Palestinian Territory, Occupied
                    </option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and The Grenadines">
                      Saint Vincent and The Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and The South Sandwich Islands">
                      South Georgia and The South Sandwich Islands
                    </option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">
                      Syrian Arab Republic
                    </option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-leste">Timor-leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">
                      Virgin Islands, British
                    </option>
                    <option value="Virgin Islands, U.S.">
                      Virgin Islands, U.S.
                    </option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
              </div>

              {/* Checkboxs */}
              <div className="checkboxs grid gap-3 justify-start max-w-[35rem] mt-8">
                {/* checkbox */}
                <div className="checkbox flex gap-3 justify-start items-center">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label htmlFor="checkbox1" className="sm:cursor-pointer">
                    I agree to the processing of personal data according to
                    PRIVACY POLICY.
                  </label>
                </div>
                {/* checkbox */}
                <div className="checkbox flex gap-3 justify-start items-center">
                  <input
                    type="checkbox"
                    id="checkbox2"
                    className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label htmlFor="checkbox2" className="sm:cursor-pointer">
                    Do you want to receive news about our project? Sign up to
                    our NEWSLETTER.
                  </label>
                </div>
                {/* checkbox */}
                <div className="checkbox flex gap-3 justify-start items-center">
                  <input
                    type="checkbox"
                    id="checkbox3"
                    className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label htmlFor="checkbox3" className="sm:cursor-pointer">
                    I acknowledge my name is correct and corresponds to the
                    government issued identification.
                  </label>
                </div>
              </div>

              {/* Para */}
              <div className="para w-full text-center">
                <p className="w-full text-base md:text-[1.1rem]">
                  Note that only one registration is allowed per client.
                  Multiple registrations or registrations with invalid data may
                  lead to the termination of the services.
                </p>
              </div>
              {/* Registration button */}
              <div className="login-btn mt-6 flex justify-center items-center">
                <button className="py-2 px-16 border-[4px] border-all hover:border-all/50 transition-all duration-300 rounded-lg">
                  Register
                </button>
              </div>
              {/* already have an account */}
              <div className="signup grid gap-4">
                <div className="flex gap-1 justify-center text-center items-center">
                  <Link to="/login">
                    <span className="font-codePro text-base sm: text-[1.12rem]">
                      Already have an account?{" "}
                      <span className="underline font-codePro text-base sm:text-[1.12rem]">
                        Login
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* triangle */}
        <img
          className="triangle absolute -left-[28%] bottom-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1] md:opacity-[0.25]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute -bottom-[5%] -right-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1]  md:opacity-[0.2]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute bottom-[90%] md:-bottom-[2%] -left-[20%]  w-[35rem] rotate-[-80deg] opacity-[0.07]  md:opacity-[0.25]"
          src={tringle}
          alt="tringle"
        />
      </section>
      <Footer />
    </>
  );
}
