import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronRight, PlayCircle, ZoomIn, X, ExternalLink } from 'lucide-react';
import UltrafastSelfPoweredCircuit from '../../../src/assets/R&D/UltrafastSelf-PoweredCircuitforGateDrivingofNormallyOnWide-BandgapTransistors.gif';
import GateVoltageBasedActiveThermalControl from '../../../src/assets/R&D/GateVoltage-BasedActiveThermalControlofPowerSemiconductorDevices.gif';
import MultiplePointsMeasurement from '../../../src/assets/R&D/MultiplePointsMeasurement-BasedJunctionTemperatureEstimationofIGBTModule.gif';
import ActiveThermalControlBuckAPD from '../../../src/assets/R&D/ActiveThermalControlforBuckConverter-BasedActivePowerDecouplingCircuit.gif';
import ModifiedPWMSchemeGaN from '../../../src/assets/R&D/Modified PWM Scheme to Reduce Reverse Conduction Loss in GaN-BasedIndependentlyControlledMultipleOutputFlybackConverter.gif';
import GaNMultipleOutputFlyback from '../../../src/assets/R&D/GaN-BasedMultipleOutputFlybackConverterWithIndependentlyControlledOutputs.gif';
import PowerLossReductionBuckAPD from '../../../src/assets/R&D/PowerLossReductioninBuckConverterBasedActivePowerDecouplingCircuit.gif';
import AccurateStaticIVCharacterization from '../../../src/assets/R&D/Methodology of an Accurate Static I–VCharacterizationofPowerSemiconductorDevices.gif';
import ImpactOperationalParametersdVDS from '../../../src/assets/R&D/ImpactofOperationalParametersondVDS:dt.gif';
import HighlyEfficientGaNPVInverter from '../../../src/assets/R&D/Highly Efficient GaN-BasedPVInverterwithReducedLeakageCurrent.gif';
import ThermalStressBalancingH6 from '../../../src/assets/R&D/ThermalStressBalancingforLifetimeImprovementofH6SolarInverter.gif';
import Powerloss from '../../../src/assets/R&D/Powerloss.gif'
export function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<any>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const researchGifs = [
    UltrafastSelfPoweredCircuit, // April 2024
    ImpactOperationalParametersdVDS, // Feb. 2024
    HighlyEfficientGaNPVInverter, // Oct. 2023
    GateVoltageBasedActiveThermalControl, // Sep. 2023 (IEEE)
    ThermalStressBalancingH6, // Sep. 2023 (EPE)
    MultiplePointsMeasurement, // June 2023
    ActiveThermalControlBuckAPD, // Dec. 2022
    ModifiedPWMSchemeGaN, // Nov. 2022
    GaNMultipleOutputFlyback, // March 2022
    Powerloss, // Sept. 2021
    PowerLossReductionBuckAPD, // April 2021
    AccurateStaticIVCharacterization, // Oct. 2020
  ];

  const researchAreas = [
    {
      title: 'Ultrafast Self-Powered Circuit for Gate Driving of Normally On Wide-Bandgap Transistors',
      subtitle: 'Arnab Sarkar; Nachiketa Deshmukh; Sandeep Anand',
      abstract: 'Normally on wide-bandgap (WBG) devices switch faster and have lower power loss compared to similarly rated normally off devices. However, their application in voltage-fed power electronic converters is limited due to the risk of the dc-link short-circuit condition. Several techniques are proposed in the literature to address this problem. However, some drawbacks exist, first, the use of several additional components; second, slow response to the short-circuit condition; and third, increased power losses. To overcome these challenges, this article presents an ultrafast self-powered circuit for gate driving of normally on WBG transistors. The proposed circuit provides a sufficient negative voltage to the gate-to-source of the normally on device immediately after the converter power-up. Moreover, the proposed circuit does not change the operation of the converter under normal operating conditions. The operating principle and design considerations of the proposed circuit are discussed in detail. Furthermore, SPICE simulations are used to validate the proposed circuit. Finally, an experimental prototype of a normally on silicon carbide (SiC) junction field effect transistor (JFET)-based forward converter with the proposed circuit is built to verify the analysis. It is shown experimentally that the response time of the proposed circuit is 2 μs during converter power-up.',
      citation: 'Arnab Sarkar, Nachiketa Deshmukh, and S. Anand, "Ultrafast Self-Powered Circuit for Gate Driving of Normally-On Wide Bandgap Transistors" IEEE Transactions on Power Electronics, vol. 39, no. 4, pp. 4463-4472, April 2024',
      link: 'https://ieeexplore.ieee.org/document/10379848/',
      image: researchGifs[0]
    },
    {
      title: 'Impact of Operational Parameters on dVDS/dt of SiC MOSFET and a Scheme for Gate Driver Resistance Selection to Limit dVDS/dt',
      subtitle: 'Aditya Aman; Abhishek Chanekar; Sandeep Anand; Anant Agarwal',
      abstract: 'SiC MOSFETs enable fast switching that results in the development of a high dVDS/dt across the device. High dVDS/dt is reported to accelerate the degradation of various components and cause reliability issues in many power electronics applications. Further, the value of dVDS/dt is affected by various parameters that change during the operation of a power converter. Hence gate driver resistance selection process to limit dVDS/dt to a desired value, must include the impact of all the operating parameters in the selection process. However, such a methodology incorporating the impact of all key parameters i.e. (i) device current (IDS), (ii) junction temperature (TJ), and (iii) drain to source (VDS) blocking voltage, has not been reported in the literature. This manuscript first presents an analysis on the impact of these three parameters on dVDS/dt. Furthermore, this manuscript considers devices from different manufacturers and investigates the variation in their impact on dVDS/dt due to operational parameter variation. Next, it presents a scheme for gate driver resistance selection based on the aforementioned analysis. Finally, experimental results are included (i) to validate the analysis, (ii) to show the device-dependent variation in the impact on dVDS/dt, and (iii) to validate the proposed gate resistance selection scheme.',
      citation: 'Aditya Aman, Abhishek Chanekar, S. Anand, and Anant Agarwal, "Impact of Operational Parameters on dVDS/dt of SiC MOSFET and a Scheme for Gate Driver Resistance Selection to Limit dVDS/dt," 39th Annual IEEE Applied Power Electronics Conference & Exposition, APEC\'2024, Long Beach, California, USA, Feb. 2024',
      link: 'https://ieeexplore.ieee.org/document/10509088/',
      image: researchGifs[1]
    },
    {
      title: 'Highly Efficient GaN-Based PV Inverter with Reduced Leakage Current',
      subtitle: 'Akash Gangwar; Nachiketa Deshmukh; Abhishek Chanekar; Sandeep Anand',
      abstract: 'This article presents a hybrid modulation scheme for a single-phase transformerless inverter based on H6 topology. This inverter uses Gallium-Nitride (GaN) devices to improve the efficiency and power density of the inverter. A comparative analysis is conducted on two existing modulation schemes. The impact of GaN devices on leakage current and power loss of the H6 inverter is evaluated. Among these schemes, one demonstrates a lower leakage current but higher power loss compared to the other. In this context, the proposed modulation scheme has better performance than the first scheme in terms of efficiency while also exhibiting lower leakage current than the second scheme. The operation modes of the proposed modulation scheme are described and analyzed in detail. The scheme is validated and verified using simulation studies. Furthermore, the scheme is compared with the existing literature to validate the performance of the inverter. A 3 kW PV inverter with the proposed scheme achieves an efficiency improvement of 0.35 % compared to the first scheme and a leakage reduction of 87.89 % towards the second scheme.',
      citation: 'Akash Gangwar, Nachiketa Deshmukh, Abhishek Chanekar, and S. Anand, "Highly Efficient GaN-based PV Inverter with Reduced Leakage Current," 49th Annual Conference of the IEEE Industrial Electronics Society, IECON\'2023, Singapore, Oct. 2023',
      link: 'https://ieeexplore.ieee.org/document/10312424/',
      image: researchGifs[2]
    },
    {
      title: 'Gate Voltage-Based Active Thermal Control of Power Semiconductor Devices',
      subtitle: 'Abhishek Chanekar; Nachiketa Deshmukh; Abhinav Arya; Sandeep Anand',
      abstract: 'Active thermal control (ATC) is popularly used for the reduction of junction temperature swings and for enhancing the reliability of power semiconductor devices (PSDs). Gate voltage variation has the potential to be an effective method for ATC by manipulation of power loss in the PSD. However, gate voltage variation in the ohmic region of static I-V characteristics does not change the power loss in PSD significantly. To address this challenge, this article proposes an ATC technique based on gate voltage variation in the saturation region of PSD. With the proposed controller, a wide range of power loss manipulation is achieved. Moreover, it avoids false triggering of desaturation protection through a suitable selection of gate voltage. The relationship between gate voltage and power loss in PSD is derived and found to be nonlinear in nature. The proposed controller compensates for this nonlinearity to achieve smooth control over the power loss in PSD. The simulation and experimental validation of the proposed controller are carried out on a laboratory prototype of a dc–dc buck converter for battery charging application. Using the proposed controller, a lifetime improvement of 43% is estimated for a typical mission profile.',
      citation: 'Abhishek Chanekar, Nachiketa Deshmukh, Abhinav Arya, and S. Anand, "Gate Voltage Based Active Thermal Control of Power Semiconductor Devices" IEEE Transactions on Power Electronics, vol. 38, no. 9, pp. 11531-11542, Sep. 2023',
      link: 'https://ieeexplore.ieee.org/document/10172032/',
      image: researchGifs[3]
    },
    {
      title: 'Thermal Stress Balancing for Lifetime Improvement of H6 Solar Inverter',
      subtitle: 'Abhishek Chanekar; Nachiketa Deshmukh; Akash Gangwar; Sandeep Anand',
      abstract: 'The thermal stress of power semiconductor devices (PSDs) of the H6 solar inverter dictates their lifetime. Two existing modulation schemes for H6 inverter are studied, and their thermal stress distribution is analyzed. It is found that unequal stress distribution exists among PSDs for both modulation strategies. This leads to the earlier failure of some PSDs than others. To address this issue, this paper proposes a hybrid modulation strategy and associated thermal controller for the lifetime enhancement of PSDs in the H6 solar inverter. The proposed thermal controller dictates the hybridization angle to equalize the thermal stress of the PSDs. The proposed technique is estimated to achieve up to 26.5% improvement in a lifetime for the selected mission profile. The impact of the proposed thermal controller on the efficiency of the converter is also studied. It is estimated that a 26.5% enhancement in lifetime is achieved for a 0.23% drop in conversion efficiency.',
      citation: 'Abhishek Chanekar, Nachiketa Deshmukh, Akash Gangwar, and S. Anand, "Thermal Stress Balancing for Lifetime Improvement of H6 Solar Inverter," 25th European Conference on Power Electronics and Applications, EPE\'23 ECCE-Europe, Aalborg, Denmark, Sep. 2023',
      link: 'https://ieeexplore.ieee.org/document/10264669/',
      image: researchGifs[4]
    },
    {
      title: 'Multiple Points Measurement-Based Junction Temperature Estimation of IGBT Module',
      subtitle: 'Abhinav Arya; Abhishek Chanekar; Amit Verma; Sandeep Anand',
      abstract: 'The junction temperature ( Tj ) estimation of IGBTs is critical for improving their reliability. To obtain Tj , the existing reference point temperature (RPT) measurement-based methods require the power loss information, which is difficult to obtain accurately in the real-time applications. Also, these methods utilize the thermal model of IGBT, which changes with aging, resulting in an error in Tj estimation. In this article, a Tj estimation technique is proposed, which utilizes the temperature of multiple leads/terminals of an IGBT module. Unlike the existing methods, the proposed technique does not require the information of power losses in the power semiconductor chips (PSCs). Instead, the power losses in the PSCs are additional outcome of the proposed technique. Also, even for a degraded IGBT module, the proposed technique provides an accurate Tj estimation. The proposed technique also has the capability of estimating Tj of multiple PSCs in an IGBT module simultaneously. A mathematical analysis of leads selection for the proposed technique is presented in this article. Furthermore, a comparative analysis is presented between the proposed and the conventional method for a degraded IGBT module. The simulation studies of the proposed technique are carried out in ANSYS ICEPAK software. The proposed technique is also validated on an experimental setup developed in the laboratory.',
      citation: 'Abhinav Arya, Abhishek Chanekar, Amit Verma, and S. Anand, "Multiple Points Measurement Based Junction Temperature Estimation of IGBT Module" IEEE Journal of Emerging and Selected Topics in Power Electronics , vol. 11, no. 3, pp. 3457-3467, June 2023',
      link: 'https://ieeexplore.ieee.org/document/10024833/',
      image: researchGifs[5]
    },
    {
      title: 'Active Thermal Control for Buck Converter-Based Active Power Decoupling Circuit',
      subtitle: 'Nachiketa Deshmukh; Abhishek Chanekar; Sandeep Anand; Soumya Ranjan Sahoo',
      abstract: 'Aluminum electrolytic capacitors (AECs) and power semiconductor devices (PSDs) are typically identified as weak links in the reliable design of power converters. To eliminate the AECs from the design, active power decoupling (APD) circuits are preferred in single-phase power converters. However, in an attempt to eliminate AECs, this approach introduces the latter weak link in the design, i.e., PSDs in the APD circuit. This article proposes an active thermal control technique to improve the reliability of PSDs in the buck APD circuit. The proposed technique reduces the swing in junction temperature of PSDs using noninvasive power loss modulation. The power loss in PSDs is changed by varying the average voltage across the buffer capacitor. Further, a control technique is suggested to synthesize the reference for average voltage across buffer capacitor. This controller accounts for nonlinearities and minimum/maximum limits of power loss modulation. Further, the additional energy loss due to power loss modulation is restricted to a predefined limit. The proposed technique is validated with the help of circuit simulations and experimental studies with a 500 W laboratory prototype. For the selected mission profile, an increase of 28.5% in the lifetime of PSDs in buck APD circuit is estimated.',
      citation: 'Nachiketa Deshmukh, Abhishek Chanekar, S. Anand, and S.R. Sahoo, "Active Thermal Control for Buck Converter Based Active Power Decoupling Circuit" IEEE Transactions on Power Electronics , vol. 37, no. 12, pp. 14955-14965, Dec. 2022',
      link: 'https://ieeexplore.ieee.org/document/9826420/',
      image: researchGifs[6]
    },
    {
      title: 'Modified PWM Scheme to Reduce Reverse Conduction Loss in GaN-Based Independently Controlled Multiple Output Flyback Converter',
      subtitle: 'Arnab Sarkar; Nachiketa Deshmukh; Sandeep Anand',
      abstract: 'The recently proposed independently controlled multiple output flyback converter (ICMOFC) scheme improves cross-regulation by utilizing gallium nitride (GaN) switches with negative gate turn-off voltage. The highly inefficient reverse conduction (RC) of negative gate biased GaN devices leads to significant RC loss in the existing ICMOFC scheme. To mitigate this problem, this letter proposes a new pulsewidth modulation (PWM) scheme. The RC loss reduction is achieved by reducing the RC duration and RC current. The effectiveness of the proposed PWM strategy is analytically and experimentally verified using a 40-W dual output flyback converter. The results demonstrate a peak efficiency improvement of 1.26% over the existing ICMOFC scheme. Furthermore, the scheme also achieves high power density (51 W/in3) and excellent cross-regulation (0.2%).',
      citation: 'Arnab Sarkar, Nachiketa Deshmukh, and S. Anand, "Modified PWM Scheme to Reduce Reverse Conduction Loss in GaN-based Independently Controlled Multiple Output Flyback Converter" IEEE Transactions on Power Electronics , vol. 37, no. 11, pp. 12968-12972, Nov. 2022',
      link: 'https://ieeexplore.ieee.org/document/9795920/',
      image: researchGifs[7]
    },
    {
      title: 'GaN-Based Multiple Output Flyback Converter With Independently Controlled Outputs',
      subtitle: 'Arnab Sarkar; Bhanu Teja Vankayalapati; Sandeep Anand',
      abstract: 'Several techniques are proposed in the literature to improve the cross-regulation performance of a multiple output flyback converter (MOFC). However, some drawbacks exist, first, inability to completely eliminate cross-regulation, second, reduction of power density due to a high number of additional components, third, increased losses. To overcome these challenges, this article presents a scheme to independently control the outputs of an MOFC, thereby achieving an excellent cross-regulation performance over a wide range of loads, without any additional switching or magnetic component. The unique gate dependent reverse conduction characteristics of gallium nitride (GaN) high electron mobility transistor is utilized to control the flow of current to each of the output capacitors. The operational principle and the steady-state analysis are provided in detail. Moreover, design considerations, such as the switching frequency, GaN gate bias, leakage inductances, and output capacitance, are discussed, focusing on their impacts on the key design goals, particularly the efficiency, power density, and output ripple. Furthermore, SPICE simulations are used to demonstrate the improvement in cross-regulation over existing schemes. Finally, a 40 W dual output laboratory prototype is built to verify the analysis. The measured maximum cross-regulation is 0.2%, which validates the effectiveness of the scheme.',
      citation: 'Arnab Sarkar, Bhanu Teja Vankayalapati, and S. Anand, "GaN Based Multiple Output Flyback Converter with Independently Controlled Outputs" IEEE Transactions on Industrial Electronics , vol. 69, no. 3, pp. 2565-2576, March 2022',
      link: 'https://ieeexplore.ieee.org/document/9384186/',
      image: researchGifs[8]
    },
    {
      title: 'Accurate Online Junction Temperature Estimation of IGBT Using Inflection Point Based Updated I–V Characteristics',
      subtitle: 'Abhinav Arya; Abhishek Chanekar; Pratik Diwakar Deshmukh; Amit Verma; Sandeep Anand',
      abstract: 'The junction temperature (Tj) estimation of the insulated gate bipolar transistor (IGBT) is important for reliable operation of the power converters in various applications. For Tj estimation, on-state collector-emitter voltage (vce) at higher collector currents (ic) is widely used temperature sensitive electrical parameter (TSEP). For real-time Tj estimation, this TSEP is calibrated using the I-V characteristics of the new IGBT. Due to bond-wire degradation, the original I-V characteristics of IGBT changes resulting in inaccurate Tj estimation. In this article, a technique is proposed to update the I-V characteristics of the degraded IGBT, without affecting the normal operation of the power converter. It is achieved by estimating the increment in bond-wire resistance (\\triangle Rcon) by using real-time samples of vce and inductor current. The mathematical analysis is also presented to find an error in estimated \\triangle Rcon. The major contributions of this article are as follows: a) it enables the accurate Tj estimation of the IGBT throughout its lifetime; and b) it also provides the parameter \\triangle Rcon, which could be utilized in condition monitoring of the IGBT. Further no additional circuitry is required. The proposed technique is validated on experimental setup, which is developed in the laboratory. The error in Tj estimation is observed within 1 °C the degraded IGBT, which shows the effectiveness of the proposed scheme.',
      citation: 'Abhinav Arya, Abhishek Chanekar, Pratik Diwakar Deshmukh, Amit Verma, and S. Anand, "Accurate Online Junction Temperature Estimation of IGBT using Inflection Point Based Updated I-V Characteristics" IEEE Transactions on Power Electronics , vol. 36, no. 9, pp. 9826-9836, Sept. 2021',
      link: 'https://ieeexplore.ieee.org/document/9380212/',
      image: researchGifs[9]
    },
    {
      title: 'Power Loss Reduction in Buck Converter Based Active Power Decoupling Circuit',
      subtitle: 'Nachiketa Deshmukh; Siva Prabhakar; Sandeep Anand',
      abstract: 'Active power decoupling (APD) circuits enable the use of long lifetime capacitors (film or ceramic capacitors) in single-phase power converters. Owing to the inclusion of the APD circuits, the literature reports 1.5%-1.8% drop in efficiency of single-phase converter at rated power. This reduction in conversion efficiency is one of the significant challenges in the practical use of APD circuits. This article proposes an approach to reduce the power loss in the bidirectional buck converter based APD circuit. This approach is presented with the help of analytical calculations and graphical representation of operation of APD circuit. The proposed approach requires rapid variation in the average voltage of the buffer capacitor with a change in inverter power. To achieve this, an enhanced control technique is suggested with a duty ratio injection controller. The steady state and transient response of the proposed control technique are validated with simulation and experimentation. Further, the reduction in power losses realized by the proposed approach is verified with the help of a developed laboratory prototype. The proposed approach obtains up to 1% improvement in efficiency of single-phase converter at rated power, when compared with existing APD approaches.',
      citation: 'Nachiketa Deshmukh, Siva Prabhakar, and S. Anand, "Power Loss Reduction in Buck Converter Based Active Power Decoupling Circuit" IEEE Transactions on Power Electronics, vol. 36, issue 4, pp. 4316-4325, April 2021',
      link: 'https://ieeexplore.ieee.org/document/9200572/',
      image: researchGifs[10]
    },
    {
      title: 'Methodology of an Accurate Static I–V Characterization of Power Semiconductor Devices',
      subtitle: 'Abhinav Arya; Pankaj Kumar; Sandeep Anand',
      abstract: 'Static I -Vcharacterization (SIVC) is extensively used by the researchers for evaluating the ON-state performance and real-time condition monitoring of the power semiconductor devices. The implementation of the existing SIVC setups is difficult in the laboratories, due to their high cost, complex operation, and error arising in different parts of the setup. Though some of the commercial products offer good performance, their availability is limited due to the high cost. In this article, an accurate, simple and low-cost SIVC setup is suggested. The SIVC setup consists of a single-pulse test circuit (SPTC), an electrical measurement unit (EMU), and a data acquisition system (DAS). All three stages are discussed and the methods to improve measurement accuracy at each stage are discussed in this article. The key contributions of this article are simultaneous SIVC of multiple device under tests (DUTs), error analysis of EMU due to manufacturing differences in components and their temperature difference, method for selection of sample size for accurate digital acquisition of analog signal in DAS, and dV/dI condition for an accurate SIVC. The presented methodology is implemented on the experimental setup of SIVC that is developed in the laboratory. EMU of the proposed setup operates at the voltage and current measurement accuracy of ±0.05% and ±0.1%, respectively, and DAS with the voltage accuracy of ±0.1%, thereby offering good performance for SIVC. Furthermore, to validate the performance of the proposed SIVC setup, its results are compared with the commercially available Keysight curve tracer (B1505A). The results for the characterization of an IGBT and a power MOSFET are included.',
      citation: 'A. Arya, Pankaj Kumar, and S. Anand, "Methodology of an Accurate Static I-V Characterisation of Power Semiconductor Devices" IEEE Transactions on Instrumentation and Measurement , vol. 69, issue 10, pp. 7703-7715, Oct. 2020',
      link: 'https://ieeexplore.ieee.org/document/9050497/',
      image: researchGifs[11]
    }
  ];

  const presentations = [
    { title: 'Keynote at IEEE ECCE 2024', duration: '45 min', thumbnail: 'bg-blue-100' },
    { title: 'Seminar on EV Technologies', duration: '1 hr 15 min', thumbnail: 'bg-green-100' },
    { title: 'Workshop on Wide Bandgap Devices', duration: '30 min', thumbnail: 'bg-purple-100' },
  ];

  return (
    <section ref={ref} id="research" className="py-24 bg-gradient-to-b from-white to-[#f8fafc] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Research
          </h2>
        </motion.div>

        {/* R&D Activities */}
        <div id="research-activities" className="mb-24 scroll-mt-28">
          <h3 className="text-3xl font-bold text-[#0f172a] mb-12 border-l-4 border-[#06b6d4] pl-4">R&D Activities</h3>
          <div className="flex flex-wrap gap-6 items-start">
            {researchAreas.map((area, index) => {
              const isExpanded = expandedCard === index;
              return (
                <motion.div
                  layout
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className={`group ${isExpanded
                    ? 'w-full'
                    : 'w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]'
                    }`}
                >
                  <motion.div
                    layout
                    className={`bg-white rounded-2xl border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-[#06b6d4]/10 cursor-pointer flex flex-col h-full ${isExpanded ? 'md:flex-row ring-2 ring-[#06b6d4]' : ''
                      }`}
                    onClick={() => {
                      if (!isExpanded) {
                        setExpandedCard(index);
                      }
                    }}
                  >
                    {/* Image Container */}
                    <motion.div
                      layout
                      className={`relative overflow-hidden shrink-0 flex items-center justify-center bg-slate-50 border-b group/img ${
                        isExpanded
                          ? 'md:w-[38%] md:border-b-0 md:border-r border-gray-100 p-4 min-h-[280px] max-h-[420px]'
                          : 'w-full h-52 p-3 border-gray-100'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage(area);
                      }}
                    >
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-300 select-none"
                      />

                      {/* Enlarge trigger badge */}
                      <div
                        className={`absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 bg-black/65 hover:bg-black/85 backdrop-blur-sm text-white text-xs font-medium rounded-lg shadow-sm transition-all duration-200 ${
                          isExpanded ? 'opacity-90 hover:opacity-100' : 'opacity-0 group-hover/img:opacity-100'
                        }`}
                        title="Click to inspect full schematic"
                      >
                        <ZoomIn className="w-3.5 h-3.5 text-[#06b6d4]" />
                        <span>Enlarge</span>
                      </div>
                    </motion.div>

                    {/* Content Container */}
                    <div className="flex flex-col md:flex-row flex-1 p-6 h-full">
                      <div className="flex-1 flex flex-col justify-between h-full">
                        <div>
                          <motion.div layout className="flex items-start justify-between gap-4 mb-2">
                            <motion.h3 className={`text-xl font-semibold text-[#0f172a] group-hover:text-[#06b6d4] transition-colors ${isExpanded ? '' : 'line-clamp-2'}`}>
                              {area.link ? (
                                <a
                                  href={area.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="hover:underline"
                                >
                                  {area.title}
                                </a>
                              ) : (
                                area.title
                              )}
                            </motion.h3>
                          </motion.div>
                          <motion.p layout className={`text-sm text-[#06b6d4] font-medium mb-3 ${isExpanded ? '' : 'line-clamp-2'}`}>{area.subtitle}</motion.p>
                          {!isExpanded && (
                            <motion.p layout className="text-[#475569] text-sm leading-relaxed mb-6 line-clamp-3">
                              {area.abstract}
                            </motion.p>
                          )}
                        </div>

                        <button
                          onClick={(e) => {
                            if (isExpanded) {
                              e.stopPropagation();
                              setExpandedCard(null);
                            }
                          }}
                          className={`text-sm text-[#06b6d4] hover:text-[#0891b2] flex items-center gap-1 transition-colors mt-auto w-fit ${isExpanded ? '' : 'pt-4'}`}
                        >
                          {isExpanded ? 'Show less' : 'Know more'}
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>

                      {/* Desktop expanded view (horizontal) */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ width: 0, opacity: 0, marginLeft: 0, paddingLeft: 0 }}
                            animate={{ width: 'auto', opacity: 1, marginLeft: 24, paddingLeft: 24 }}
                            exit={{ width: 0, opacity: 0, marginLeft: 0, paddingLeft: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="hidden md:block border-l border-gray-100 overflow-hidden shrink-0"
                          >
                            <div className="w-[350px] lg:w-[450px]" onClick={(e) => e.stopPropagation()}>
                              <h4 className="text-sm font-semibold text-[#0f172a] mb-3">
                                Abstract:
                              </h4>
                              <p className="text-sm text-[#475569] leading-relaxed max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                {area.abstract}
                              </p>

                              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                                <h4 className="text-sm font-semibold text-[#0f172a] mb-2">Citation</h4>
                                <p className="text-xs text-[#64748b] leading-relaxed">
                                  {area.link ? (
                                    <a
                                      href={area.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="hover:text-[#06b6d4] hover:underline transition-colors"
                                    >
                                      {area.citation}
                                    </a>
                                  ) : (
                                    area.citation
                                  )}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Mobile expanded view (vertical) */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-6 pt-6 border-t border-gray-100 overflow-hidden w-full"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <h4 className="text-sm font-semibold text-[#0f172a] mb-3">
                              Abstract:
                            </h4>
                            <p className="text-sm text-[#475569] leading-relaxed mb-6">
                              {area.abstract}
                            </p>

                            <div className="p-4 bg-gray-50 rounded-xl">
                              <h4 className="text-sm font-semibold text-[#0f172a] mb-2">Citation</h4>
                              <p className="text-xs text-[#64748b] leading-relaxed">
                                {area.link ? (
                                  <a
                                    href={area.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="hover:text-[#06b6d4] hover:underline transition-colors"
                                  >
                                    {area.citation}
                                  </a>
                                ) : (
                                  area.citation
                                )}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 shrink-0">
                <div className="pr-4 max-w-[85%]">
                  <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                    {lightboxImage.title}
                  </h3>
                  {lightboxImage.subtitle && (
                    <p className="text-xs text-[#06b6d4] truncate mt-0.5">
                      {lightboxImage.subtitle}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {lightboxImage.link && (
                    <a
                      href={lightboxImage.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
                      title="Open IEEE paper"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Paper</span>
                    </a>
                  )}
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
                    aria-label="Close image modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Full Image Display */}
              <div className="relative flex-1 bg-[#0b0f19] flex items-center justify-center p-4 sm:p-8 min-h-[300px] overflow-auto">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="max-w-full max-h-[72vh] object-contain rounded select-none shadow-2xl"
                />
              </div>

              {/* Footer */}
              <div className="px-6 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Full-resolution technical schematic / diagram</span>
                <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono">Esc</kbd> or click outside to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
