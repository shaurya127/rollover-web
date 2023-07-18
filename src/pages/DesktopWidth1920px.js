import styles from "./DesktopWidth1920px.module.css";
import React, { useState } from "react";

const DesktopWidth1920px = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const scrollToContactUs = () => {
    const contactUsSection = document.getElementById("contactus");
    contactUsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.desktopWidth1920px}>
      <div className={styles.section1}>
        <div className={styles.frameParent}>
          <div className={styles.invoicingBenefitsThatAutomaParent}>
            <b className={styles.invoicingBenefitsThat}>
              Business Loan financing up to 50 Lakh within 3 days
            </b>
            <div className={styles.withRolloverMoneyInvoicingWrapper}>
              <div className={styles.withRolloverMoney}>
                With rollover money get your business running with collateral
                free business loans.
              </div>
            </div>
          </div>
          <div
            className={styles.earlyAccessButtonframe3}
            onClick={scrollToContactUs}
          >
            <img
              className={styles.thunderAnimationIcon}
              alt=""
              src="/thunder-animation.svg"
            />
            <b className={styles.getEarlyAccess}>GET EARLY ACCESS</b>
          </div>
        </div>
        <img
          className={styles.consultativeSalesBro1}
          alt=""
          src="/consultative-salesbro-1.svg"
        />
      </div>
      <div className={styles.whatMakeUsSpecialParent}>
        <b className={styles.whatMakeUs}>What Make Us Special</b>
        <div className={styles.frameGroup}>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-26095371.svg"
            />
            <div className={styles.invoiceDiscountingParent}>
              <div className={styles.invoiceDiscounting}>Simple Process</div>
              <div className={styles.secureFinancingBy}>
                Easy one-click apply and receive funds within 24-48 hours.
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-26095372.svg"
            />
            <div className={styles.invoiceDiscountingParent}>
              <div className={styles.invoiceDiscounting}>Competitive Rates</div>
              <div className={styles.secureFinancingBy}>
                Access working capital at lower rates than traditional financing
                options.
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-26095373.svg"
            />
            <div className={styles.invoiceDiscountingParent}>
              <div className={styles.invoiceDiscounting}>Transparent Fees</div>
              <div className={styles.secureFinancingBy}>
                No hidden fees or complex terms to worry about.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.salesDashboardFinalUiParent}>
          <div className={styles.salesDashboardFinalUi}>
            <div className={styles.createInvoiceToSeeAllYourWrapper}>
              <div
                className={styles.createInvoiceTo}
              >{`Create invoice to see all your transactions `}</div>
            </div>
            <img
              className={styles.salesDashboardFinalUiChild}
              alt=""
              src="/arrow-1.svg"
            />
            <img
              className={styles.salesDashboardFinalUiItem}
              alt=""
              src="/arrow-2.svg"
            />
            <div className={styles.logoParent}>
              <div className={styles.logo}>
                <div className={styles.frame}>
                  <div className={styles.frameChild1} />
                  <div className={styles.onTheGo}>Money</div>
                </div>
                <img
                  className={styles.rectangle2203Stroke}
                  alt=""
                  src="/rectangle-2203-stroke.svg"
                />
                <img
                  className={styles.rectangle2204Stroke}
                  alt=""
                  src="/rectangle-2204-stroke.svg"
                />
                <div className={styles.ver}>ver</div>
                <div className={styles.roll}>Roll</div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.openmojioverviewParent}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/openmojioverview.svg"
                  />
                  <div className={styles.overview}>Overview</div>
                </div>
                <div className={styles.vuesaxboldheadphoneParent}>
                  <img
                    className={styles.vuesaxboldheadphoneIcon}
                    alt=""
                    src="/vuesaxboldheadphone.svg"
                  />
                  <div className={styles.overview}>Dashboard</div>
                </div>
                <div className={styles.solarticketSaleLinearParent}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/solarticketsalelinear.svg"
                  />
                  <div className={styles.sales}>Sales</div>
                </div>
                <div className={styles.openmojioverviewParent}>
                  <img
                    className={styles.vuesaxboldheadphoneIcon}
                    alt=""
                    src="/vuesaxboldheadphone1.svg"
                  />
                  <div className={styles.overview}>Banking</div>
                </div>
                <div className={styles.openmojioverviewParent}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/icoutlinepayments.svg"
                  />
                  <div className={styles.overview}>Payments</div>
                </div>
                <div className={styles.openmojioverviewParent}>
                  <img
                    className={styles.entypocreditIcon}
                    alt=""
                    src="/entypocredit.svg"
                  />
                  <div className={styles.overview}>Credit</div>
                </div>
                <div className={styles.openmojioverviewParent}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/mdifilereportoutline.svg"
                  />
                  <div className={styles.overview}>Reports</div>
                </div>
                <div className={styles.openmojioverviewParent}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/phlink.svg"
                  />
                  <div className={styles.overview}>Link ERP</div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.vuesaxboldheadphoneParent}>
                  <img
                    className={styles.vuesaxboldheadphoneIcon2}
                    alt=""
                    src="/vuesaxboldheadphone2.svg"
                  />
                  <div className={styles.sales}>{`Help & Center`}</div>
                </div>
              </div>
              <div className={styles.frameChild2} />
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.salesWrapper}>
                <div className={styles.sales}>Sales</div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.salesDashboardWrapper}>
                  <div className={styles.salesDashboard}>Sales Dashboard</div>
                </div>
                <div className={styles.customerWrapper}>
                  <div className={styles.salesDashboard}>Customer</div>
                </div>
                <div className={styles.customerWrapper}>
                  <div className={styles.salesDashboard}>Invoice</div>
                </div>
                <div className={styles.customerWrapper}>
                  <div className={styles.salesDashboard}>Cash Memo</div>
                </div>
                <div className={styles.customerWrapper}>
                  <div className={styles.salesDashboard}>Credit Note</div>
                </div>
                <div className={styles.customerWrapper}>
                  <div className={styles.salesDashboard}>Sales Order</div>
                </div>
                <div className={styles.customerWrapper}>
                  <div className={styles.salesDashboard}>Delivery Challan</div>
                </div>
              </div>
            </div>
            <div className={styles.salesDashboardFinalUiInner}>
              <div className={styles.frameParent7}>
                <div className={styles.vuesaxboldsearchZoomOutParent}>
                  <img
                    className={styles.vuesaxboldsearchZoomOutIcon}
                    alt=""
                    src="/vuesaxboldsearchzoomout.svg"
                  />
                  <div className={styles.search}>Search</div>
                </div>
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/frame-1408.svg"
                />
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/frame-2609441.svg"
                />
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/frame-2609442.svg"
                />
                <img
                  className={styles.frameChild6}
                  alt=""
                  src="/frame-1360@2x.png"
                />
              </div>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.salesDashboardContainer}>
                <div className={styles.sales}>Sales Dashboard</div>
              </div>
              <div className={styles.buttonSignInParent}>
                <div className={styles.buttonSignIn}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/materialsymbolsadd.svg"
                  />
                  <div className={styles.create}>Create</div>
                </div>
                <img
                  className={styles.frameChild7}
                  alt=""
                  src="/frame-14081.svg"
                />
                <img
                  className={styles.frameChild7}
                  alt=""
                  src="/frame-2609455.svg"
                />
              </div>
            </div>
            <div className={styles.basilinvoiceSolidParent}>
              <img
                className={styles.basilinvoiceSolidIcon}
                alt=""
                src="/basilinvoicesolid.svg"
              />
              <div className={styles.financeActivityWrapper}>
                <div className={styles.salesRunTheBusinessWrapper}>
                  <div className={styles.create}>Sales run the business</div>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.salesRunTheBusinessWrapper}>
                  <div className={styles.trackPaymentsInContainer}>
                    <ul className={styles.trackPaymentsInBetterAndF}>
                      <li className={styles.trackPaymentsIn}>
                        Track payments in better and faster way
                      </li>
                      <li
                        className={styles.trackPaymentsIn}
                      >{`Know the status of your receivables `}</li>
                      <li className={styles.trackPaymentsIn}>
                        Get reminders for unpaid invoices for faster payment
                      </li>
                      <li>
                        Plan your budget easily with better picture of cash flow
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.buttonSignIn1}>
                <div className={styles.create}>Create Invoice</div>
              </div>
            </div>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-2061.svg" />
          <div className={styles.buttonSignIn2}>
            <div className={styles.viewAll}>View All</div>
          </div>
          <div className={styles.overview1}>
            <img
              className={styles.salesDashboardFinalUiChild}
              alt=""
              src="/arrow-11.svg"
            />
            <img
              className={styles.salesDashboardFinalUiItem}
              alt=""
              src="/arrow-21.svg"
            />
            <div className={styles.logoParent}>
              <div className={styles.logo}>
                <div className={styles.frame}>
                  <div className={styles.frameChild1} />
                  <div className={styles.onTheGo}>Money</div>
                </div>
                <img
                  className={styles.rectangle2203Stroke}
                  alt=""
                  src="/rectangle-2203-stroke1.svg"
                />
                <img
                  className={styles.rectangle2204Stroke}
                  alt=""
                  src="/rectangle-2204-stroke1.svg"
                />
                <div className={styles.ver}>ver</div>
                <div className={styles.roll}>Roll</div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.openmojioverviewGroup}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/openmojioverview1.svg"
                  />
                  <div className={styles.overview}>Overview</div>
                </div>
                <div className={styles.vuesaxboldheadphoneParent1}>
                  <img
                    className={styles.vuesaxboldheadphoneIcon}
                    alt=""
                    src="/vuesaxboldheadphone3.svg"
                  />
                  <div className={styles.overview}>Dashboard</div>
                </div>
                <div className={styles.solarticketSaleLinearGroup}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/solarticketsalelinear1.svg"
                  />
                  <div className={styles.sales}>Sales</div>
                </div>
                <div className={styles.solarticketSaleLinearGroup}>
                  <img
                    className={styles.vuesaxboldheadphoneIcon}
                    alt=""
                    src="/vuesaxboldheadphone4.svg"
                  />
                  <div className={styles.overview}>Banking</div>
                </div>
                <div className={styles.solarticketSaleLinearGroup}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/icoutlinepayments1.svg"
                  />
                  <div className={styles.overview}>Payments</div>
                </div>
                <div className={styles.solarticketSaleLinearGroup}>
                  <img
                    className={styles.entypocreditIcon}
                    alt=""
                    src="/entypocredit1.svg"
                  />
                  <div className={styles.overview}>Credit</div>
                </div>
                <div className={styles.solarticketSaleLinearGroup}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/mdifilereportoutline1.svg"
                  />
                  <div className={styles.overview}>Reports</div>
                </div>
                <div className={styles.solarticketSaleLinearGroup}>
                  <img
                    className={styles.openmojioverviewIcon}
                    alt=""
                    src="/phlink1.svg"
                  />
                  <div className={styles.overview}>Link ERP</div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.vuesaxboldheadphoneParent1}>
                  <img
                    className={styles.vuesaxboldheadphoneIcon2}
                    alt=""
                    src="/vuesaxboldheadphone5.svg"
                  />
                  <div className={styles.sales}>{`Help & Center`}</div>
                </div>
              </div>
              <div className={styles.frameChild10} />
            </div>
            <div className={styles.salesDashboardFinalUiInner}>
              <div className={styles.frameParent7}>
                <div className={styles.vuesaxboldsearchZoomOutGroup}>
                  <img
                    className={styles.vuesaxboldsearchZoomOutIcon}
                    alt=""
                    src="/vuesaxboldsearchzoomout1.svg"
                  />
                  <div className={styles.search}>Search</div>
                </div>
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/frame-14082.svg"
                />
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/frame-26094411.svg"
                />
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/frame-26094421.svg"
                />
                <img
                  className={styles.frameChild6}
                  alt=""
                  src="/frame-13601@2x.png"
                />
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.lineDiv} />
              <div className={styles.frameChild15} />
              <div className={styles.groupWrapper}>
                <div className={styles.timeParent}>
                  <div className={styles.time}>
                    <div className={styles.nov2021}>₹100k</div>
                    <div className={styles.nov2022}>₹ 80k</div>
                    <div className={styles.nov2023}>₹ 60k</div>
                    <div className={styles.nov2024}>₹ 40k</div>
                    <div className={styles.nov2025}>₹20k</div>
                    <div className={styles.nov2026}>0</div>
                  </div>
                  <div className={styles.chartParent}>
                    <img className={styles.chartIcon} alt="" src="/chart.svg" />
                    <div className={styles.nov2019Parent}>
                      <div className={styles.nov2019}>MON</div>
                      <div className={styles.nov2020}>TUE</div>
                      <div className={styles.nov20221}>WED</div>
                      <div className={styles.nov20231}>THU</div>
                      <div className={styles.nov2028}>FRI</div>
                      <div className={styles.nov2029}>SAT</div>
                      <div className={styles.nov2030}>SUN</div>
                    </div>
                  </div>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="/group-39732.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent11}>
                <div className={styles.financeActivityWrapper}>
                  <div className={styles.financeActivity}>Finance Activity</div>
                </div>
                <div className={styles.weeklyParent}>
                  <div className={styles.weekly}>Weekly</div>
                  <img
                    className={styles.caretrightIcon}
                    alt=""
                    src="/caretright.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.lineGroup}>
              <div className={styles.frameChild16} />
              <div className={styles.frameWrapper4}>
                <div className={styles.frameParent12}>
                  <div className={styles.frameParent13}>
                    <div className={styles.dividerParent}>
                      <div className={styles.divider} />
                      <div className={styles.inv1359874830Wrapper}>
                        <div className={styles.ibm}>INV1359874830</div>
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.dividerParent}>
                      <div className={styles.inv1359874830Wrapper}>
                        <div className={styles.ibm}>INV1357902468</div>
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.dividerParent}>
                      <div className={styles.inv1359874830Wrapper}>
                        <div className={styles.ibm}>INV3525893010</div>
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.dividerParent}>
                      <div className={styles.inv1359874830Wrapper}>
                        <div className={styles.ibm}>INV2983649020</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent16}>
                    <div className={styles.dividerGroup}>
                      <div className={styles.divider} />
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.text}>
                          <div className={styles.sep012022}>Sep 01, 2022</div>
                          <div className={styles.subText}>Sub-text</div>
                        </div>
                        <div className={styles.subIcon} />
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.dividerGroup}>
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.text}>
                          <div className={styles.aug302022}>Aug 30, 2022</div>
                          <div className={styles.subText}>Sub-text</div>
                        </div>
                        <div className={styles.subIcon} />
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.dividerGroup}>
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.text}>
                          <div className={styles.aug292022}>Aug 29, 2022</div>
                          <div className={styles.subText}>Sub-text</div>
                        </div>
                        <div className={styles.subIcon} />
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.dividerGroup}>
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.text}>
                          <div className={styles.aug292022}>Aug 29, 2022</div>
                          <div className={styles.subText}>Sub-text</div>
                        </div>
                        <div className={styles.subIcon} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent16}>
                    <div className={styles.dividerGroup}>
                      <div className={styles.divider} />
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.text}>
                          <div className={styles.div}>₹ 1,800</div>
                          <div className={styles.subText}>Sub-text</div>
                        </div>
                        <div className={styles.subIcon} />
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.dividerGroup}>
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.text}>
                          <div className={styles.div1}>₹ 2,800</div>
                          <div className={styles.subText}>Sub-text</div>
                        </div>
                        <div className={styles.subIcon} />
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.dividerGroup}>
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.text}>
                          <div className={styles.div2}>₹ 800</div>
                          <div className={styles.subText}>Sub-text</div>
                        </div>
                        <div className={styles.subIcon} />
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.dividerGroup}>
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.text}>
                          <div className={styles.div3}>₹ 700</div>
                          <div className={styles.subText}>Sub-text</div>
                        </div>
                        <div className={styles.subIcon} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent18}>
                    <div className={styles.dividerGroup}>
                      <div className={styles.divider} />
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.subIcon} />
                        <img
                          className={styles.caretrightIcon}
                          alt=""
                          src="/caretright1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.dividerGroup}>
                      <div className={styles.divider} />
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.subIcon} />
                        <img
                          className={styles.caretrightIcon}
                          alt=""
                          src="/caretright2.svg"
                        />
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.dividerGroup}>
                      <div className={styles.divider} />
                      <div className={styles.content}>
                        <div className={styles.icon} />
                        <div className={styles.subIcon} />
                        <img
                          className={styles.caretrightIcon}
                          alt=""
                          src="/caretright3.svg"
                        />
                      </div>
                      <div className={styles.divider} />
                    </div>
                    <div className={styles.iconParent}>
                      <div className={styles.icon} />
                      <div className={styles.subIcon} />
                      <img
                        className={styles.caretrightIcon}
                        alt=""
                        src="/caretright4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.chngKhon}>New Invoice</div>
              <div className={styles.sentToParent}>
                <div className={styles.sentTo}>Sent To</div>
                <div className={styles.date}>{`Date `}</div>
                <div className={styles.amount}>Amount</div>
              </div>
            </div>
            <div className={styles.frameParent19}>
              <div className={styles.frameParent20}>
                <div className={styles.frameParent21}>
                  <div className={styles.microsoftOfficeLogo2019prWrapper}>
                    <img
                      className={styles.microsoftOfficeLogo2019prIcon}
                      alt=""
                      src="/microsoft-office-logo-2019present-1@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent22}>
                    <div className={styles.microsoftWrapper}>
                      <div className={styles.microsoft}>Microsoft</div>
                    </div>
                    <div className={styles.inv3485930572}>INV3485930572</div>
                  </div>
                  <div className={styles.sep540}>1 Sep 5: 40 am</div>
                </div>
                <div className={styles.frameParent23}>
                  <div className={styles.microsoftOfficeLogo2019prWrapper}>
                    <img
                      className={styles.downloadIcon}
                      alt=""
                      src="/download@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent22}>
                    <div className={styles.tcsServicesWrapper}>
                      <div className={styles.microsoft}>TCS Services</div>
                    </div>
                    <div className={styles.inv3485930572}>INV8478290103</div>
                  </div>
                  <div className={styles.sep540}>30 Aug 6: 45 pm</div>
                </div>
                <div className={styles.frameParent23}>
                  <div className={styles.microsoftOfficeLogo2019prWrapper}>
                    <img
                      className={styles.infosysLogoIcon}
                      alt=""
                      src="/infosys-logo@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent22}>
                    <div className={styles.infosysWrapper}>
                      <div className={styles.microsoft}>Infosys</div>
                    </div>
                    <div className={styles.inv3485930572}>INV78549031111</div>
                  </div>
                  <div className={styles.sep540}>28 Aug 8: 20 pm</div>
                </div>
                <div className={styles.frameParent21}>
                  <div className={styles.microsoftOfficeLogo2019prWrapper}>
                    <img
                      className={styles.ibmLogoIcon}
                      alt=""
                      src="/ibm-logo@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent22}>
                    <div className={styles.ibmWrapper}>
                      <div className={styles.ibm}>IBM</div>
                    </div>
                    <div className={styles.inv3485930572}>INV4523352070</div>
                  </div>
                  <div className={styles.sep540}>27 Aug 7: 30 pm</div>
                </div>
              </div>
              <div className={styles.recentActivityWrapper}>
                <div className={styles.financeActivity}>Recent Activity</div>
              </div>
              <div className={styles.buttonSignIn3}>
                <div className={styles.create}>View All</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent29}>
            <div className={styles.frameParent20}>
              <div className={styles.frameParent21}>
                <div className={styles.microsoftOfficeLogo2019prWrapper}>
                  <img
                    className={styles.microsoftOfficeLogo2019prIcon}
                    alt=""
                    src="/microsoft-office-logo-2019present-11@2x.png"
                  />
                </div>
                <div className={styles.frameParent22}>
                  <div className={styles.microsoftWrapper}>
                    <div className={styles.microsoft}>Microsoft</div>
                  </div>
                  <div className={styles.inv3485930572}>INV3485930572</div>
                </div>
                <div className={styles.sep540}>1 Sep 5: 40 am</div>
              </div>
              <div className={styles.frameParent23}>
                <div className={styles.microsoftOfficeLogo2019prWrapper}>
                  <img
                    className={styles.downloadIcon}
                    alt=""
                    src="/download1@2x.png"
                  />
                </div>
                <div className={styles.frameParent22}>
                  <div className={styles.tcsServicesWrapper}>
                    <div className={styles.microsoft}>TCS Services</div>
                  </div>
                  <div className={styles.inv3485930572}>INV8478290103</div>
                </div>
                <div className={styles.sep540}>30 Aug 6: 45 pm</div>
              </div>
              <div className={styles.frameParent23}>
                <div className={styles.microsoftOfficeLogo2019prWrapper}>
                  <img
                    className={styles.infosysLogoIcon}
                    alt=""
                    src="/infosys-logo1@2x.png"
                  />
                </div>
                <div className={styles.frameParent22}>
                  <div className={styles.infosysWrapper}>
                    <div className={styles.microsoft}>Infosys</div>
                  </div>
                  <div className={styles.inv3485930572}>INV78549031111</div>
                </div>
                <div className={styles.sep540}>28 Aug 8: 20 pm</div>
              </div>
              <div className={styles.frameParent21}>
                <div className={styles.microsoftOfficeLogo2019prWrapper}>
                  <img
                    className={styles.ibmLogoIcon}
                    alt=""
                    src="/ibm-logo1@2x.png"
                  />
                </div>
                <div className={styles.frameParent22}>
                  <div className={styles.ibmWrapper}>
                    <div className={styles.ibm}>IBM</div>
                  </div>
                  <div className={styles.inv3485930572}>INV4523352070</div>
                </div>
                <div className={styles.sep540}>27 Aug 7: 30 pm</div>
              </div>
            </div>
            <div className={styles.recentActivityWrapper}>
              <div className={styles.financeActivity}>Recent Activity</div>
            </div>
            <div className={styles.buttonSignIn3}>
              <div className={styles.create}>View All</div>
            </div>
          </div>
          <div className={styles.frameParent39}>
            <div className={styles.frameWrapper6}>
              <div className={styles.frameParent40}>
                <div className={styles.financeActivityWrapper}>
                  <div className={styles.div4}>
                    <span className={styles.span}>₹</span>
                    <b className={styles.b}>21</b>
                    <span className={styles.span}>,000</span>
                  </div>
                </div>
                <img
                  className={styles.bigraphUpArrowIcon}
                  alt=""
                  src="/bigraphuparrow.svg"
                />
              </div>
            </div>
            <img
              className={styles.mdidotsVerticalIcon}
              alt=""
              src="/mdidotsvertical.svg"
            />
            <div className={styles.payables}>Payables</div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle} />
              <div className={styles.rectangle1} />
            </div>
          </div>
        </div>
        <div className={styles.frameParent41}>
          <div className={styles.revolutionizeYourBusinessUsParent}>
            <b className={styles.revolutionizeYourBusiness}>
              Revolutionize Your Business Using Analytics Dashboard
            </b>
            <div className={styles.welcomeToRollovermoney}>
              Grow your business with easy access to working capital financing
              in a click and fund disbursement within 3 working days
            </div>
          </div>
          <div className={styles.whyChooseOurDashboardParent}>
            <div className={styles.invoiceDiscounting}>
              Why choose our Dashboard?
            </div>
            <div className={styles.withRolloverMoneyInvoicingWrapper}>
              <div className={styles.invoicingMadeSimpleParent}>
                <div className={styles.getEarlyAccess}>
                  Interest rates starting at 1%
                </div>
                <img
                  className={styles.vuesaxlineararrowDownIcon}
                  alt=""
                  src="/vuesaxlineararrowdown.svg"
                />
              </div>
              <div className={styles.invoicingMadeSimpleParent}>
                <div className={styles.getEarlyAccess}>Zero documentation</div>
                <img
                  className={styles.vuesaxlineararrowDownIcon}
                  alt=""
                  src="/vuesaxlineararrowdown.svg"
                />
              </div>
              <div className={styles.invoicingMadeSimpleParent}>
                <div className={styles.getEarlyAccess}>No collateral</div>
                <img
                  className={styles.vuesaxlineararrowDownIcon}
                  alt=""
                  src="/vuesaxlineararrowdown.svg"
                />
              </div>
              <div className={styles.invoicingMadeSimpleParent}>
                <div className={styles.getEarlyAccess}>
                  Upto 40 months period
                </div>
                <img
                  className={styles.vuesaxlineararrowDownIcon}
                  alt=""
                  src="/vuesaxlineararrowdown.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ourSolution}>
        <b className={styles.ourSolution1}> Our Solution</b>
        <div className={styles.frameParent43}>
          <button
            className={`${styles.tab} ${activeTab === 1 ? styles.activeTab : ""
              }`}
            onClick={() => handleTabChange(1)}
          >
            For Business
          </button>
          {/* <button
            className={`${styles.tab} ${activeTab === 2 ? styles.activeTab : ""}`}
            onClick={() => handleTabChange(2)}
          >
            For Investors
          </button> */}
        </div>

        <div className={styles.ourSolutionInner}>
          {activeTab === 1 && (
            <div className={styles.workingCapitalSolutionsForParent}>
              <b
                className={styles.workingCapitalSolutions}
              >{`Working Capital Solutions For Micro Small & Medium Enterprises`}</b>
              <div className={styles.rolloverMoneyDirectlyIntegrParent}>
                <div className={styles.rolloverMoneyDirectly}>
                  RollOver Money directly integrates your ERP system to enable
                  quick working capital loan applications through invoice
                  discounting in less than 10 minutes
                </div>
                <div className={styles.givingAccessTo}>
                  Giving access to working capital within 24-48 hours
                </div>
              </div>
              <img
                className={styles.treasureBro1Icon}
                alt=""
                src="/Revenue-bro 1.svg"
              />
            </div>
          )}
          {activeTab === 2 && (
            <div className={styles.workingCapitalSolutionsForParent}>
              <b
                className={styles.workingCapitalSolutions}
              >{` Investors can earn as much as 15% extra on their invested
              capital`}</b>
              <div className={styles.rolloverMoneyDirectlyIntegrParent}>
                <div className={styles.givingAccessTo}>
                  RollOver Money directly integrates your ERP system to enable
                  quick working capital loan applications through invoice
                  discounting in less than 10 minutes Giving access to working
                  capital within 24-48 hours
                </div>
              </div>
              <img
                className={styles.treasureBro1Icon}
                alt=""
                src="/Revenue-bro 1.svg"
              />
            </div>
          )}
        </div>
      </div>

      <div className={styles.frameParent44} id="contactus">
        <div className={styles.wantToKnowMoreAboutUsParent}>
          <b className={styles.getEarlyAccess}>Want To Know More About Us?</b>
          <div className={styles.pleaseFillTheFormOurReprWrapper}>
            <div className={styles.pleaseFillThe}>
              Please fill the form, our Representative will reach out to you
              within 24 hours
            </div>
          </div>
        </div>
        <div className={styles.frameParent45}>
          <div className={styles.frameParent46}>
            <div className={styles.frameParent47}>
              <div className={styles.enterYourNameWrapper}>
                <input
                  className={styles.enterYourNameInput}
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.enterYourNameWrapper}>
                <input
                  className={styles.enterYourNameInput}
                  placeholder="Email address"
                />
              </div>
              <div className={styles.enterYourNameWrapper}>
                <input
                  className={styles.enterYourNameInput}
                  placeholder="Phone number"
                />
              </div>
              <div className={styles.writeYourQueryWrapper}>
                <textarea
                  className={styles.enterYourQueryInput}
                  placeholder="Write your query..."
                />
              </div>
            </div>
            <div className={styles.button}>
              <b className={styles.submit}>Submit</b>
            </div>
          </div>
          <div className={styles.salesRunTheBusinessWrapper}>
            <img
              className={styles.callCenterBro1}
              alt=""
              src="/call-centerbro-1.svg"
            />
          </div>
        </div>
      </div>

      <div className={styles.divcontainerFluid}>
        <img
          className={styles.rolloverMoneyLogo}
          alt=""
          src="/rollover-money-logo.svg"
        />
        <div className={styles.frameParent48}>
          <div className={styles.servicesParent}>
            <div className={styles.services}>Services</div>
            <div className={styles.itemInvoicingToolParent}>
              <div className={styles.itemInvoicing}>Invoicing Tool</div>
              <div className={styles.itemInvoicing}>Analytics Dashboard</div>
            </div>
          </div>
          <div className={styles.servicesParent}>
            <div className={styles.services}>Company</div>
            <div className={styles.itemInvoicingToolParent}>
              <div className={styles.itemInvoicing}>Contact Us</div>
              <div className={styles.itemInvoicing}>About</div>
            </div>
          </div>
          <div className={styles.servicesParent}>
            <div className={styles.services}>Legal</div>
            <div className={styles.itemInvoicingToolParent}>
              <div className={styles.itemInvoicing}>Privacy Policy</div>
              <div className={styles.itemInvoicing}>{`Terms & Conditions`}</div>
              <div className={styles.itemInvoicing}>Cancellation policy</div>
            </div>
          </div>
          <div className={styles.servicesParent}>
            <div className={styles.services}>Connect</div>
            <div className={styles.itemInvoicingToolParent}>
              <div className={styles.mailsvgParent}>
                <img className={styles.mailsvgIcon} alt="" src="/mailsvg.svg" />
                <div className={styles.itemLink4}> hey@rollovermoney.in</div>
              </div>
              <div className={styles.mailsvgParent}>
                <img
                  className={styles.linkLocationsvg}
                  alt=""
                  src="/link--locationsvg.svg"
                />
                <div className={styles.itemLink4}> New Delhi</div>
              </div>
              <div className={styles.mailsvgParent}>
                <img
                  className={styles.linkNumbersvg}
                  alt=""
                  src="/link--numbersvg.svg"
                />
                <div className={styles.itemLink4}> +919650830027</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rolloverMoney}>
          © 2023 RollOver Money . All Rights Reserved.
        </div>
        <div className={styles.separator} />
        <div className={styles.ourMissionIs}>
          Our mission is to provide inclusive and accessible working capital
          solutions to India's MSMEs. Supporting small businesses and building a
          stronger economy.
        </div>
        <div className={styles.linkGroup2036svgParent}>
          <a href="https://www.facebook.com/rollovermoney/" target="_blank">
            <img
              className={styles.linkGroup2036svg}
              alt=""
              src="/link--group2033svg.svg"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/rollover-money/"
            target="_blank"
          >
            <img
              className={styles.linkGroup2036svg}
              alt=""
              src="/link--group2036svg.svg"
            />
          </a>

          <a
            href="https://instagram.com/rollovermoney.in?igshid=OGY3MTU3OGY1Mw=="
            target="_blank"
          >
            <img
              className={styles.linkGroup2036svg}
              alt=""
              src="/link--group2035svg.svg"
            />
          </a>
        </div>
      </div>
      <div className={styles.menuBar}>
        <img
          className={styles.rolloverMoneyLogo1}
          alt=""
          src="/rollover-money-logo1.svg"
        />
        <div className={styles.servicesGroup}>
          {/* <div className={styles.enterYourName}>Services</div> */}
          <button className={styles.applybutton}>Apply Now</button>
          <div className={styles.contactUsWrapper}>
            <b className={styles.pleaseFillThe}>Contact Us</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopWidth1920px;
