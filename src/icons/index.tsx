import React from 'react';
import { IOMIcon } from './iom';
import {UNHabitIcon} from './unHabit';
import {UNHCRIcon} from './unhcr';
import {UNDPIcon} from './undpi';
import "./index.css";

interface IconProps {
  x?: number,
  y?: number,
  height?: number,
  width?: number,
}

const Nomade = (props: IconProps) => {
  const { height, width, x, y } = props;
  return (
    <svg width={width ? width : 50} height={height ? height : 30} x={x} y={y} version="1.1" viewBox="0 0 4 9.386 33" xmlns="http://www.w3.org/2000/svg">
     <defs>
      <clipPath id="clipPath26">
       <path d="m0 247.5h247.5v-247.5h-247.5z"/>
      </clipPath>
     </defs>
     <g transform="matrix(1.3333 0 0 -1.3333 -5.3351 322.84)">
      <g transform="matrix(.21123 0 0 .21123 4.1069 217.49)">
       <path d="m0 0h158.45z" fill="#eaf2fb"/>
      </g>
      <g transform="matrix(.21123 0 0 .21123 37.576 217.49)">
       <path d="m0 0h-158.45" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="matrix(.21123 0 0 .21123 -4.1978 201.08)">
       <g clip-path="url(#clipPath26)">
        <g transform="translate(190.4 149.01)">
         <path d="m0 0h-5c-0.553 0-1 0.448-1 1s0.447 1 1 1h5c0.553 0 1-0.448 1-1s-0.447-1-1-1m10 0h-5c-0.553 0-1 0.448-1 1s0.447 1 1 1h5c0.553 0 1-0.448 1-1s-0.447-1-1-1m9.192-3.124c-0.247 0-0.494 0.091-0.687 0.273-1.104 1.045-2.446 1.849-3.882 2.325-0.524 0.173-0.809 0.739-0.635 1.263s0.74 0.81 1.264 0.635c1.712-0.567 3.312-1.525 4.628-2.769 0.401-0.38 0.418-1.013 0.039-1.415-0.197-0.207-0.462-0.312-0.727-0.312m3.555-9.006c-0.019 0-0.04 1e-3 -0.06 2e-3 -0.551 0.032-0.971 0.505-0.939 1.057 0.013 0.215 0.019 0.431 0.02 0.649 0 1.317-0.245 2.605-0.725 3.824-0.203 0.514 0.049 1.095 0.562 1.297 0.512 0.201 1.095-0.049 1.297-0.563 0.575-1.453 0.866-2.989 0.866-4.562-1e-3 -0.259-9e-3 -0.512-0.024-0.762-0.031-0.532-0.472-0.942-0.997-0.942m-11.402-10.722h-2.746c-0.553 0-1 0.448-1 1s0.447 1 1 1h2.743c0.686 0 1.373 0.067 2.041 0.2 0.542 0.11 1.067-0.245 1.175-0.786 0.107-0.542-0.245-1.069-0.787-1.176-0.793-0.157-1.609-0.238-2.424-0.238zm-12.612-0.878c-0.389 0-0.76 0.23-0.921 0.611-0.214 0.51 0.024 1.096 0.533 1.31 1.528 0.645 3.151 0.972 4.823 0.972 0.059 0 0.116-5e-3 0.172-0.015h0.259c0.552 0 1-0.448 1-1s-0.448-1-1-1h-0.431c-0.056 0-0.11 4e-3 -0.164 0.013-1.346-0.02-2.65-0.293-3.882-0.812-0.127-0.054-0.259-0.079-0.389-0.079m-6.492-7.184c-0.096 0-0.195 0.015-0.293 0.044-0.528 0.162-0.825 0.721-0.663 1.249 0.528 1.725 1.45 3.346 2.666 4.69 0.37 0.41 1.003 0.44 1.412 0.071 0.409-0.371 0.442-1.003 0.071-1.413-1.021-1.128-1.794-2.488-2.237-3.934-0.132-0.43-0.527-0.707-0.956-0.707m9.576-14.696c-0.039 0-0.078 2e-3 -0.118 7e-3 -1.82 0.215-3.534 0.815-5.091 1.785-0.468 0.292-0.612 0.908-0.32 1.378 0.292 0.468 0.91 0.611 1.377 0.319 1.306-0.813 2.742-1.316 4.269-1.496 0.547-0.064 0.94-0.561 0.876-1.11-0.06-0.509-0.493-0.883-0.993-0.883m9.996-0.079h-5.001c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.001c0.552 0 1-0.448 1-1s-0.448-1-1-1" fill="#515ca2"/>
        </g>
        <g transform="translate(200.75 109.31)">
         <path d="m0 0 8.635-4.986-8.635-4.987z" fill="#515ca2"/>
        </g>
        <g transform="translate(156.89 77.656)">
         <path d="m0 0h-14.443v2.635c0 1.193 0.966 2.159 2.159 2.159h8.232c2.238 0 4.052-1.814 4.052-4.052z" fill="#fff"/>
         <path d="m0 0h-14.443v2.635c0 1.193 0.966 2.159 2.159 2.159h8.232c2.238 0 4.052-1.814 4.052-4.052z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(149.67 96.61)">
         <path d="m0 0h-4.682v-13.882c0-1.092 0.886-1.978 1.979-1.978h0.724c1.093 0 1.979 0.886 1.979 1.978z" fill="#515ca2"/>
         <path d="m0 0h-4.682v-13.882c0-1.092 0.886-1.978 1.979-1.978h0.724c1.093 0 1.979 0.886 1.979 1.978z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(125.09 77.656)">
         <path d="m0 0h14.442v2.635c0 1.193-0.966 2.159-2.158 2.159h-8.233c-2.238 0-4.051-1.814-4.051-4.052z" fill="#fff"/>
         <path d="m0 0h14.442v2.635c0 1.193-0.966 2.159-2.158 2.159h-8.233c-2.238 0-4.051-1.814-4.051-4.052z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(132.31 96.61)">
         <path d="m0 0h4.683v-13.882c0-1.092-0.886-1.978-1.979-1.978h-0.725c-1.093 0-1.979 0.886-1.979 1.978z" fill="#515ca2"/>
         <path d="m0 0h4.683v-13.882c0-1.092-0.886-1.978-1.979-1.978h-0.725c-1.093 0-1.979 0.886-1.979 1.978z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(153.76 138.61)">
         <path d="m0 0v-53.634h-25.525l2.758 30.551 0.064 0.59 0.189 2.654c0.042 0.547 0.084 1.074 0.106 1.621v0.38c0 1.073-0.084 2.127-0.211 3.18l-1.643 14.953c-0.273 0.147-0.568 0.295-0.905 0.442-4.149 2.022-11.879 5.771-14.448 14.111-1.959 6.381-0.359 14.111 4.738 22.957 0.885 1.516 2.822 2.022 4.318 1.158 1.516-0.863 2.043-2.801 1.159-4.317-4.192-7.267-5.603-13.311-4.17-17.944 1.748-5.708 7.644-8.572 11.162-10.278 0.315-0.148 0.59-0.295 0.863-0.422 0.126-0.105 0.316-0.189 0.526-0.273 0 0 0.022 0 0.042-0.021 0.632-0.169 1.517-0.211 2.001-0.211h13.458c3.054 0 5.518-2.464 5.518-5.497" fill="#e6e6e6"/>
         <path d="m0 0v-53.634h-25.525l2.758 30.551 0.064 0.59 0.189 2.654c0.042 0.547 0.084 1.074 0.106 1.621v0.38c0 1.073-0.084 2.127-0.211 3.18l-1.643 14.953c-0.273 0.147-0.568 0.295-0.905 0.442-4.149 2.022-11.879 5.771-14.448 14.111-1.959 6.381-0.359 14.111 4.738 22.957 0.885 1.516 2.822 2.022 4.318 1.158 1.516-0.863 2.043-2.801 1.159-4.317-4.192-7.267-5.603-13.311-4.17-17.944 1.748-5.708 7.644-8.572 11.162-10.278 0.315-0.148 0.59-0.295 0.863-0.422 0.126-0.105 0.316-0.189 0.526-0.273 0 0 0.022 0 0.042-0.021 0.632-0.169 1.517-0.211 2.001-0.211h13.458c3.054 0 5.518-2.464 5.518-5.497z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(132.88 156.01)">
         <path d="m0 0c0-1.12-0.908-2.028-2.028-2.028s-2.028 0.908-2.028 2.028 0.908 2.028 2.028 2.028 2.028-0.908 2.028-2.028" fill="#515ca2"/>
         <path d="m0 0c0-1.12-0.908-2.028-2.028-2.028s-2.028 0.908-2.028 2.028 0.908 2.028 2.028 2.028 2.028-0.908 2.028-2.028z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(153.15 156.01)">
         <path d="m0 0c0-1.12-0.908-2.028-2.028-2.028s-2.028 0.908-2.028 2.028 0.908 2.028 2.028 2.028 2.028-0.908 2.028-2.028" fill="#515ca2"/>
         <path d="m0 0c0-1.12-0.908-2.028-2.028-2.028s-2.028 0.908-2.028 2.028 0.908 2.028 2.028 2.028 2.028-0.908 2.028-2.028z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(149.89 154.92)">
         <path d="m0 0c0.095 0.51 0.151 1.04 0.151 1.588 0 0.699-0.075 1.36-0.226 2.003h-1.72l-0.321 0.756c-0.435 1.039-1.475 1.72-2.609 1.72h-8.372c-1.133 0-2.154-0.681-2.589-1.72l-0.321-0.756h-1.72c-0.151-0.643-0.226-1.304-0.226-2.003 0-0.548 0.057-1.078 0.15-1.588-1.625 1.984-2.589 4.498-2.589 7.257 0 6.35 5.141 11.491 11.491 11.491s11.491-5.141 11.491-11.491c0-2.759-0.964-5.273-2.59-7.257" fill="#fff"/>
         <path d="m0 0c0.095 0.51 0.151 1.04 0.151 1.588 0 0.699-0.075 1.36-0.226 2.003h-1.72l-0.321 0.756c-0.435 1.039-1.475 1.72-2.609 1.72h-8.372c-1.133 0-2.154-0.681-2.589-1.72l-0.321-0.756h-1.72c-0.151-0.643-0.226-1.304-0.226-2.003 0-0.548 0.057-1.078 0.15-1.588-1.625 1.984-2.589 4.498-2.589 7.257 0 6.35 5.141 11.491 11.491 11.491s11.491-5.141 11.491-11.491c0-2.759-0.964-5.273-2.59-7.257z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(150.04 156.51)">
         <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-2.098-2.589-5.311-4.233-8.902-4.233s-6.803 1.644-8.901 4.233c-0.094 0.51-0.15 1.04-0.15 1.588 0 0.699 0.075 1.36 0.226 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.372c1.134 0 2.174-0.681 2.608-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003" fill="#fff"/>
         <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-2.098-2.589-5.311-4.233-8.902-4.233s-6.803 1.644-8.901 4.233c-0.094 0.51-0.15 1.04-0.15 1.588 0 0.699 0.075 1.36 0.226 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.372c1.134 0 2.174-0.681 2.608-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(143.56 153.61)">
         <path d="m0 0v-8.778c0-1.422-1.154-2.576-2.575-2.576s-2.575 1.154-2.575 2.576v8.778c0 1.421 1.154 2.575 2.575 2.575s2.575-1.154 2.575-2.575" fill="#515ca2"/>
         <path d="m0 0v-8.778c0-1.422-1.154-2.576-2.575-2.576s-2.575 1.154-2.575 2.576v8.778c0 1.421 1.154 2.575 2.575 2.575s2.575-1.154 2.575-2.575z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(150.04 156.51)">
         <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-0.737-4.233-4.46-7.465-8.902-7.465-4.46 0-8.164 3.232-8.901 7.465-0.094 0.51-0.15 1.04-0.15 1.588 0 0.699 0.075 1.36 0.226 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.372c1.134 0 2.174-0.681 2.608-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003" fill="#515ca2"/>
         <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-0.737-4.233-4.46-7.465-8.902-7.465-4.46 0-8.164 3.232-8.901 7.465-0.094 0.51-0.15 1.04-0.15 1.588 0 0.699 0.075 1.36 0.226 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.372c1.134 0 2.174-0.681 2.608-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(147.9 103.27)">
         <path d="m0 0c-0.13 1.77 1.198 3.311 2.968 3.441 1.77 0.131 3.31-1.198 3.441-2.968 0.131-1.769-1.198-3.31-2.968-3.441-1.769-0.131-3.31 1.198-3.441 2.968" fill="#e6e6e6"/>
         <path d="m0 0c-0.13 1.77 1.198 3.311 2.968 3.441 1.77 0.131 3.31-1.198 3.441-2.968 0.131-1.769-1.198-3.31-2.968-3.441-1.769-0.131-3.31 1.198-3.441 2.968z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(165.16 85.934)">
         <path d="m0 0-25.384-1.874-1.367 18.514 25.384 1.875z" fill="#e6e6e6"/>
         <path d="m0 0-25.384-1.874-1.367 18.514 25.384 1.875z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(146,98.729)">
         <path d="m0 0 10.854 0.801-0.325 4.382-10.852-0.802z" fill="#e6e6e6"/>
         <path d="m0 0 10.854 0.801-0.325 4.382-10.852-0.802z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(139.78 84.06)">
         <path d="m0 0 25.384 1.874-0.276 3.731-25.383-1.875z" fill="#fff"/>
         <path d="m0 0 25.384 1.874-0.276 3.731-25.383-1.875z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(135.04 144.11)">
         <path d="m0 0c0.228-3.081 2.797-5.519 5.953-5.519s5.727 2.438 5.953 5.519" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(147.28 167.9)">
         <path d="m0 0c0-0.751-0.608-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(143.3 165.65)">
         <path d="m0 0c0-0.751-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(134.69 167.9)">
         <path d="m0 0c0-0.751-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(133.56 163.62)">
         <path d="m0 0c0-0.751-0.607-1.358-1.357-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(139.09 170.17)">
         <path d="m0 0c0-0.75-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(137.05 163.62)">
         <path d="m0 0c0 0.751 0.608 1.358 1.358 1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(142.88 168.58)">
         <path d="m0 0c0 0.75 0.607 1.358 1.358 1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(148.42 162.26)">
         <path d="m0 0c0 0.751 0.607 1.358 1.358 1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(131.44 189.26)">
         <path d="m0 0c-0.298 2.207 1.25 4.237 3.457 4.535s4.237-1.25 4.535-3.457-1.25-4.237-3.457-4.535-4.237 1.25-4.535 3.457" fill="#fff"/>
         <path d="m0 0c-0.298 2.207 1.25 4.237 3.457 4.535s4.237-1.25 4.535-3.457-1.25-4.237-3.457-4.535-4.237 1.25-4.535 3.457z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(154.37 168.84)">
         <path d="m0 0-31.653-4.271-3.116 23.088 31.654 4.27z" fill="#fff"/>
         <path d="m0 0-31.653-4.271-3.116 23.088 31.654 4.27z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(129.4 183.42)">
         <path d="m0 0 13.534 1.826-0.737 5.464-13.533-1.827z" fill="#fff"/>
         <path d="m0 0 13.534 1.826-0.737 5.464-13.533-1.827z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(153.76 120.39)">
         <path d="m0 0v-4.865h-22.767l0.064 0.59 0.189 2.653c0.042 0.548 0.084 1.075 0.106 1.622z" fill="#515ca2"/>
         <path d="m0 0v-4.865h-22.767l0.064 0.59 0.189 2.653c0.042 0.548 0.084 1.075 0.106 1.622z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(153.75 138.59)">
         <path d="m0 0v-30.163c0-1.771-1.265-3.207-2.825-3.207-1.561 0-2.825 1.436-2.825 3.207v23.565" fill="#e6e6e6" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(102.16 77.656)">
         <path d="m0 0h-9.18v0.888c0 1.193 0.967 2.159 2.159 2.159h4.446c1.422 0 2.575-1.153 2.575-2.575z" fill="#fff"/>
         <path d="m0 0h-9.18v0.888c0 1.193 0.967 2.159 2.159 2.159h4.446c1.422 0 2.575-1.153 2.575-2.575z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(97.566 89.549)">
         <path d="m0 0h-2.976v-8.823c0-0.694 0.563-1.257 1.257-1.257h0.461c0.695 0 1.258 0.563 1.258 1.257z" fill="#515ca2"/>
         <path d="m0 0h-2.976v-8.823c0-0.694 0.563-1.257 1.257-1.257h0.461c0.695 0 1.258 0.563 1.258 1.257z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(81.944 77.656)">
         <path d="m0 0h9.179v0.888c0 1.193-0.966 2.159-2.158 2.159h-4.447c-1.422 0-2.574-1.153-2.574-2.575z" fill="#fff"/>
         <path d="m0 0h9.179v0.888c0 1.193-0.966 2.159-2.158 2.159h-4.447c-1.422 0-2.574-1.153-2.574-2.575z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(86.533 89.549)">
         <path d="m0 0h2.977v-8.823c0-0.694-0.564-1.257-1.258-1.257h-0.461c-0.695 0-1.258 0.563-1.258 1.257z" fill="#515ca2"/>
         <path d="m0 0h2.977v-8.823c0-0.694-0.564-1.257-1.258-1.257h-0.461c-0.695 0-1.258 0.563-1.258 1.257z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(103.31 105.22)">
         <path d="m0 0h-22.518v19.83c0 2.091 1.696 3.787 3.788 3.787h14.943c2.092 0 3.787-1.696 3.787-3.787z" fill="#fff"/>
         <path d="m0 0h-22.518v19.83c0 2.091 1.696 3.787 3.788 3.787h14.943c2.092 0 3.787-1.696 3.787-3.787z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <path d="m99.743 84.03h-15.388v21.193h15.388z" fill="#e6e6e6" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        <g transform="translate(84.356 141.38)">
         <path d="m0 0c0-0.984-0.798-1.783-1.782-1.783-0.985 0-1.782 0.799-1.782 1.783s0.797 1.782 1.782 1.782c0.984 0 1.782-0.798 1.782-1.782" fill="#515ca2"/>
         <path d="m0 0c0-0.984-0.798-1.783-1.782-1.783-0.985 0-1.782 0.799-1.782 1.783s0.797 1.782 1.782 1.782c0.984 0 1.782-0.798 1.782-1.782z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(103.31 141.38)">
         <path d="m0 0c0-0.984-0.798-1.783-1.782-1.783-0.985 0-1.783 0.799-1.783 1.783s0.798 1.782 1.783 1.782c0.984 0 1.782-0.798 1.782-1.782" fill="#515ca2"/>
         <path d="m0 0c0-0.984-0.798-1.783-1.782-1.783-0.985 0-1.783 0.799-1.783 1.783s0.798 1.782 1.783 1.782c0.984 0 1.782-0.798 1.782-1.782z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(89.535 133.2)">
         <path d="m0 0v-2.88c0-1.392 1.125-2.517 2.517-2.517 1.386 0 2.517 1.125 2.517 2.517v2.88z" fill="#515ca2"/>
         <path d="m0 0v-2.88c0-1.392 1.125-2.517 2.517-2.517 1.386 0 2.517 1.125 2.517 2.517v2.88z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(100.55 143.69)">
         <path d="m0 0c-2.278 1.96-5.252 3.141-8.497 3.141-3.25 0-6.224-1.186-8.507-3.162 0.619 2.304 2.153 4.238 4.187 5.382 0.561 0.323 1.164 0.577 1.798 0.77 0.801 0.239 1.643 0.364 2.522 0.364 3.562 0 6.63-2.112 8.013-5.153 0.198-0.432 0.359-0.879 0.484-1.342" fill="#fff"/>
         <path d="m0 0c-2.278 1.96-5.252 3.141-8.497 3.141-3.25 0-6.224-1.186-8.507-3.162 0.619 2.304 2.153 4.238 4.187 5.382 0.561 0.323 1.164 0.577 1.798 0.77 0.801 0.239 1.643 0.364 2.522 0.364 3.562 0 6.63-2.112 8.013-5.153 0.198-0.432 0.359-0.879 0.484-1.342z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(100.86 141.38)">
         <path d="m0 0c0-4.867-3.941-8.808-8.809-8.808-4.867 0-8.807 3.941-8.807 8.808 0 0.25 0.01 0.499 0.03 0.744 0.047 0.53 0.136 1.045 0.271 1.544 2.283 1.976 5.256 3.161 8.506 3.161 3.246 0 6.219-1.18 8.497-3.14 0.203-0.739 0.312-1.513 0.312-2.309" fill="#515ca2"/>
         <path d="m0 0c0-4.867-3.941-8.808-8.809-8.808-4.867 0-8.807 3.941-8.807 8.808 0 0.25 0.01 0.499 0.03 0.744 0.047 0.53 0.136 1.045 0.271 1.544 2.283 1.976 5.256 3.161 8.506 3.161 3.246 0 6.219-1.18 8.497-3.14 0.203-0.739 0.312-1.513 0.312-2.309z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <path d="m99.743 82.45h-15.388v3.16h15.388z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        <g transform="translate(92.05 83.116)">
         <path d="m0 0v15.289" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <path d="m100.86 103.51h-16.502v1.711h16.502z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        <g transform="translate(94.606 82.289)">
         <path d="m0 0h14.884v22.249h-10.321c-2.52 0-4.563-2.044-4.563-4.564z" fill="#e6e6e6"/>
         <path d="m0 0h14.884v22.249h-10.321c-2.52 0-4.563-2.044-4.563-4.564z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <path d="m105.31 107.19h4.178v-2.649h-4.178z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        <g transform="translate(105.96 94.549)">
         <path d="m0 0h-7.834" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(105.96 86.566)">
         <path d="m0 0h-7.834" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(96.997 173.88)">
         <path d="m0 0h-9.896c-3.947 0-7.148-3.2-7.148-7.148v-10.745c0-3.947 3.201-7.148 7.148-7.148h9.896c3.948 0 7.148 3.201 7.148 7.148v10.745c0 3.948-3.2 7.148-7.148 7.148" fill="#e6e6e6"/>
         <path d="m0 0h-9.896c-3.947 0-7.148-3.2-7.148-7.148v-10.745c0-3.947 3.201-7.148 7.148-7.148h9.896c3.948 0 7.148 3.201 7.148 7.148v10.745c0 3.948-3.2 7.148-7.148 7.148z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <path d="m97.565 173.77h-11.032v3.866h11.032z" fill="#e6e6e6" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        <g transform="translate(97.859 152.84)">
         <path d="m0 0c1.824 0.906 3.078 2.793 3.078 4.965v0.174" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(83.634 165.77)">
         <path d="m0 0v-6.221" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(80.791 122.05)">
         <path d="m0 0v-18.65c0-1.429 1.158-2.588 2.588-2.588s2.589 1.159 2.589 2.588v18.5" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(98.131 122.05)">
         <path d="m0 0v-18.65c0-1.429 1.159-2.588 2.589-2.588s2.589 1.159 2.589 2.588v18.5" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(176.82 152.37)">
         <path d="m0 0 4.726-4.725" fill="none" stroke="#515ca2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        </g>
        <g transform="translate(176.82 147.65)">
         <path d="m0 0 4.726 4.725" fill="none" stroke="#515ca2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        </g>
        <g transform="translate(208.23 133.52)">
         <path d="m0 0 4.725-4.725" fill="none" stroke="#515ca2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        </g>
        <g transform="translate(208.23 128.79)">
         <path d="m0 0 4.725 4.725" fill="none" stroke="#515ca2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        </g>
        <g transform="translate(180.76 114.19)">
         <path d="m0 0 4.725-4.725" fill="none" stroke="#515ca2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        </g>
        <g transform="translate(180.76 109.47)">
         <path d="m0 0 4.725 4.725" fill="none" stroke="#515ca2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        </g>
       </g>
      </g>
     </g>
    </svg>
     );

}

const IDPsInCamps = (props: IconProps) => {
  const { height, width, x, y } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : 45} height={height ? height : 33} x={x} y={y} viewBox="0 0 50.428 33">
      <g id="Group_658" data-name="Group 658" transform="translate(-57 -621)">
        <g id="Group_308" data-name="Group 308" transform="translate(57 629.234)">
          <g id="Group_14" data-name="Group 14">
            <g id="Group_13" data-name="Group 13">
              <g id="Group_4" data-name="Group 4" transform="translate(1.566)">
                <path id="Path_59" data-name="Path 59" d="M66.926,554.283l-.122-.152c.052-.042,5.247-4.235,6.984-6.89,3.56-5.442,6.96-14.979,6.994-15.075l.184.065c-.034.1-3.442,9.655-7.015,15.117C72.2,550.028,66.979,554.241,66.926,554.283Z" transform="translate(-66.804 -532.166)" fill="#313133" />
              </g>
              <g id="Group_5" data-name="Group 5" transform="translate(13.833 1.46)">
                <path id="Path_60" data-name="Path 60" d="M142.009,560.312a54.638,54.638,0,0,1-6.6-6.282c-2.957-3.74-5.651-14.221-5.678-14.327l.189-.048c.027.1,2.71,10.546,5.642,14.254a54.444,54.444,0,0,0,6.568,6.252Z" transform="translate(-129.733 -539.655)" fill="#313133" />
              </g>
              <g id="Group_6" data-name="Group 6" transform="translate(0 24.571)">
                <rect id="Rectangle_8" data-name="Rectangle 8" width="28.486" height="0.195" fill="#313133" />
              </g>
              <g id="Group_7" data-name="Group 7" transform="translate(14.061 3.443)">
                <rect id="Rectangle_9" data-name="Rectangle 9" width="21.226" height="0.195" transform="translate(0 21.224) rotate(-89.329)" fill="#313133" />
              </g>
              <g id="Group_8" data-name="Group 8" transform="translate(26.073 22.041)">
                <rect id="Rectangle_10" data-name="Rectangle 10" width="0.195" height="2.628" fill="#313133" />
              </g>
              <g id="Group_9" data-name="Group 9" transform="translate(1.009 21.943)">
                <rect id="Rectangle_11" data-name="Rectangle 11" width="4.832" height="0.195" fill="#313133" />
              </g>
              <g id="Group_10" data-name="Group 10" transform="translate(24.064 21.943)">
                <rect id="Rectangle_12" data-name="Rectangle 12" width="2.107" height="0.195" fill="#313133" />
              </g>
              <g id="Group_11" data-name="Group 11" transform="translate(6.852 12.815)">
                <path id="Path_61" data-name="Path 61" d="M101.745,598.539a.01.01,0,0,1,.016.011c-.189.445-1.59,4.545-2.795,7.335-.841,1.949-1.441,4.382-1.531,4.382a13.785,13.785,0,0,1-2.962-2.989.528.528,0,0,1,.217-.694,11.6,11.6,0,0,0,3.238-2.441A40.664,40.664,0,0,0,101.745,598.539Z" transform="translate(-94.323 -598.413)" fill="#324b92" />
                <path id="Path_62" data-name="Path 62" d="M97.034,609.857a12.97,12.97,0,0,1-3.049-3.044.627.627,0,0,1,.258-.822,11.557,11.557,0,0,0,3.213-2.421,26.9,26.9,0,0,0,3.221-4.654,6.62,6.62,0,0,1,.6-.953l.056-.058.147.088-.028.087c-.051.12-.2.522-.4,1.08-.532,1.477-1.523,4.226-2.4,6.255a34.847,34.847,0,0,0-1.222,3.489C97.148,609.831,97.137,609.857,97.034,609.857Zm3.954-11.09-.142.247A27.075,27.075,0,0,1,97.6,603.7a11.725,11.725,0,0,1-3.263,2.461.432.432,0,0,0-.177.566A13.761,13.761,0,0,0,97,609.621c.053-.141.148-.45.247-.774a35.049,35.049,0,0,1,1.229-3.508c.873-2.024,1.863-4.769,2.394-6.244Z" transform="translate(-93.922 -597.906)" fill="#313133" />
              </g>
              <g id="Group_12" data-name="Group 12" transform="translate(1.53 22.041)">
                <rect id="Rectangle_13" data-name="Rectangle 13" width="0.195" height="2.628" fill="#313133" />
              </g>
            </g>
          </g>
        </g>
        <g id="Group_362" data-name="Group 362" transform="translate(83.35 621)">
          <g id="Group_76" data-name="Group 76" transform="translate(9.322)">
            <g id="Group_46" data-name="Group 46" transform="translate(3.283 27.427)">
              <g id="Group_42" data-name="Group 42" transform="translate(4.848 3.955)">
                <path id="Rectangle_17" data-name="Rectangle 17" d="M.713,0H2.695A1.339,1.339,0,0,1,4.034,1.339v0a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.713A.713.713,0,0,1,.713,0Z" transform="translate(0.14 0.14)" fill="#fff" />
                <path id="Path_87" data-name="Path 87" d="M146.118,166.172h-4.034a.14.14,0,0,1-.14-.14V165.3a.743.743,0,0,1,.742-.743h2.3a1.273,1.273,0,0,1,1.271,1.271v.207A.14.14,0,0,1,146.118,166.172Zm-3.894-.279h3.755v-.068a.993.993,0,0,0-.992-.992h-2.3a.464.464,0,0,0-.463.463Z" transform="translate(-141.944 -164.554)" fill="#434343" />
              </g>
              <g id="Group_43" data-name="Group 43" transform="translate(5.557)">
                <path id="Rectangle_18" data-name="Rectangle 18" d="M0,0H1.308a0,0,0,0,1,0,0V3.776a.654.654,0,0,1-.654.654h0A.654.654,0,0,1,0,3.776V0A0,0,0,0,1,0,0Z" transform="translate(0.14 0.14)" fill="#324b92" />
                <path id="Path_88" data-name="Path 88" d="M145.378,155.1h-.2a.693.693,0,0,1-.692-.692v-3.877a.14.14,0,0,1,.14-.14h1.308a.14.14,0,0,1,.14.14v3.877A.693.693,0,0,1,145.378,155.1Zm-.615-4.429v3.737a.413.413,0,0,0,.413.413h.2a.413.413,0,0,0,.413-.413v-3.737Z" transform="translate(-144.483 -150.395)" fill="#434343" />
              </g>
              <g id="Group_44" data-name="Group 44" transform="translate(0 3.955)">
                <path id="Rectangle_19" data-name="Rectangle 19" d="M0,0H4.034a0,0,0,0,1,0,0V0A1.339,1.339,0,0,1,2.695,1.339H.713A.713.713,0,0,1,0,.626V0A0,0,0,0,1,0,0Z" transform="translate(4.173 1.479) rotate(-180)" fill="#fff" />
                <path id="Path_89" data-name="Path 89" d="M128.76,166.172h-4.034a.139.139,0,0,1-.14-.14v-.207a1.273,1.273,0,0,1,1.271-1.271h2.3a.743.743,0,0,1,.742.743v.736A.14.14,0,0,1,128.76,166.172Zm-3.894-.279h3.754v-.6a.464.464,0,0,0-.463-.463h-2.3a.993.993,0,0,0-.992.992Z" transform="translate(-124.587 -164.554)" fill="#434343" />
              </g>
              <g id="Group_45" data-name="Group 45" transform="translate(2.017)">
                <path id="Rectangle_20" data-name="Rectangle 20" d="M.654,0h0a.654.654,0,0,1,.654.654V4.43a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.654A.654.654,0,0,1,.654,0Z" transform="translate(1.447 4.569) rotate(-180)" fill="#324b92" />
                <path id="Path_90" data-name="Path 90" d="M132.7,155.1h-.2a.693.693,0,0,1-.692-.692v-3.877a.139.139,0,0,1,.14-.14h1.308a.14.14,0,0,1,.14.14v3.877A.693.693,0,0,1,132.7,155.1Zm-.616-4.429v3.737a.413.413,0,0,0,.413.413h.2a.413.413,0,0,0,.413-.413v-3.737Z" transform="translate(-131.808 -150.395)" fill="#434343" />
              </g>
            </g>
            <g id="Group_48" data-name="Group 48" transform="translate(0 4.696)">
              <g id="Group_47" data-name="Group 47">
                <path id="Path_91" data-name="Path 91" d="M124.622,80.508v14.98h-7.129l.771-8.533.018-.165.053-.741c.012-.153.023-.3.029-.453v-.106a7.451,7.451,0,0,0-.059-.888l-.459-4.176c-.077-.041-.159-.082-.253-.123-1.159-.565-3.317-1.612-4.035-3.941-.547-1.782-.1-3.941,1.323-6.412a.883.883,0,0,1,1.529.883c-1.171,2.029-1.565,3.717-1.165,5.012.488,1.594,2.135,2.394,3.118,2.87.088.041.165.082.241.118a.568.568,0,0,0,.147.076.018.018,0,0,1,.012.006,2.465,2.465,0,0,0,.559.059h3.759A1.538,1.538,0,0,1,124.622,80.508Z" transform="translate(-113.191 -69.369)" fill="#e0e0df" />
                <path id="Path_92" data-name="Path 92" d="M124.261,95.268h-7.13a.139.139,0,0,1-.139-.152l.788-8.7.055-.768c.011-.14.021-.276.027-.417v-.1a7.142,7.142,0,0,0-.058-.871l-.451-4.1c-.055-.028-.114-.056-.178-.085-1.19-.58-3.379-1.646-4.113-4.028-.559-1.82-.109-4.015,1.336-6.522a1.027,1.027,0,0,1,1.4-.375,1.018,1.018,0,0,1,.374,1.4c-1.152,2-1.54,3.646-1.152,4.9.471,1.538,2.082,2.319,3.045,2.786.044.02.087.042.128.062l.111.054a.145.145,0,0,1,.03.019.538.538,0,0,0,.11.054h0l.008,0a2.382,2.382,0,0,0,.511.051h3.759a1.68,1.68,0,0,1,1.681,1.675v14.98A.14.14,0,0,1,124.261,95.268Zm-6.977-.279h6.837V80.148a1.4,1.4,0,0,0-1.4-1.4h-3.759a2.684,2.684,0,0,1-.595-.064.127.127,0,0,1-.031-.012.776.776,0,0,1-.166-.085l-.1-.051-.123-.06c-1.006-.488-2.686-1.3-3.192-2.956-.412-1.331-.016-3.055,1.178-5.122a.739.739,0,0,0-.272-1.015.747.747,0,0,0-1.016.272c-1.4,2.437-1.845,4.558-1.311,6.3.7,2.266,2.816,3.3,3.954,3.852.1.045.187.087.267.13a.14.14,0,0,1,.073.108l.459,4.177a7.473,7.473,0,0,1,.059.9v.106c-.006.15-.016.289-.027.433l-.073.94Z" transform="translate(-112.831 -69.009)" fill="#434343" />
              </g>
            </g>
            <g id="Group_51" data-name="Group 51" transform="translate(4.328 10.271)">
              <g id="Group_49" data-name="Group 49">
                <circle id="Ellipse_1" data-name="Ellipse 1" cx="0.566" cy="0.566" r="0.566" transform="translate(0.14 0.14)" fill="#324b92" />
                <path id="Path_93" data-name="Path 93" d="M129.032,90.381a.706.706,0,1,1,.706-.706A.707.707,0,0,1,129.032,90.381Zm0-1.133a.427.427,0,1,0,.427.427A.427.427,0,0,0,129.032,89.248Z" transform="translate(-128.326 -88.969)" fill="#434343" />
              </g>
              <g id="Group_50" data-name="Group 50" transform="translate(5.662)">
                <circle id="Ellipse_2" data-name="Ellipse 2" cx="0.566" cy="0.566" r="0.566" transform="translate(0.14 0.14)" fill="#324b92" />
                <path id="Path_94" data-name="Path 94" d="M149.3,90.381a.706.706,0,1,1,.706-.706A.707.707,0,0,1,149.3,90.381Zm0-1.133a.427.427,0,1,0,.426.427A.427.427,0,0,0,149.3,89.248Z" transform="translate(-148.597 -88.969)" fill="#434343" />
              </g>
            </g>
            <g id="Group_52" data-name="Group 52" transform="translate(4.516 5.905)">
              <path id="Path_95" data-name="Path 95" d="M135.194,79.072a2.431,2.431,0,0,0-.021-1h-.48l-.09-.211a.79.79,0,0,0-.728-.48h-2.338a.783.783,0,0,0-.723.48l-.09.211h-.48a2.431,2.431,0,0,0-.021,1,3.209,3.209,0,1,1,4.972,0Z" transform="translate(-129.359 -73.696)" fill="#fff" />
              <path id="Path_96" data-name="Path 96" d="M129.862,78.852a.14.14,0,0,1-.108-.051A3.3,3.3,0,0,1,129,76.685a3.349,3.349,0,0,1,6.7,0,3.3,3.3,0,0,1-.755,2.115.14.14,0,0,1-.246-.114,2.283,2.283,0,0,0,.04-.418,2.309,2.309,0,0,0-.037-.42h-.367a.139.139,0,0,1-.128-.085l-.09-.211a.654.654,0,0,0-.6-.4h-2.338a.642.642,0,0,0-.594.395l-.09.212a.14.14,0,0,1-.128.085H130a2.305,2.305,0,0,0-.037.42,2.272,2.272,0,0,0,.04.418.139.139,0,0,1-.078.152A.143.143,0,0,1,129.862,78.852Zm4.563-1.282h.388a.139.139,0,0,1,.136.108,2.515,2.515,0,0,1,.066.528,3.027,3.027,0,0,0,.4-1.521,3.07,3.07,0,0,0-6.139,0,3.026,3.026,0,0,0,.4,1.521,2.5,2.5,0,0,1,.066-.528.139.139,0,0,1,.136-.108h.388l.054-.126a.921.921,0,0,1,.852-.565h2.338a.925.925,0,0,1,.857.566Z" transform="translate(-128.999 -73.336)" fill="#434343" />
            </g>
            <g id="Group_53" data-name="Group 53" transform="translate(5.197 9.447)">
              <path id="Path_97" data-name="Path 97" d="M136.994,87.768a2.415,2.415,0,0,1-.042.443,3.2,3.2,0,0,1-4.972,0,2.431,2.431,0,0,1,.021-1h.48l.09-.211a.783.783,0,0,1,.723-.48h2.338a.791.791,0,0,1,.728.48l.09.211h.48A2.41,2.41,0,0,1,136.994,87.768Z" transform="translate(-131.797 -86.377)" fill="#fff" />
              <path id="Path_98" data-name="Path 98" d="M134.105,89.173a3.323,3.323,0,0,1-2.595-1.234.136.136,0,0,1-.029-.062,2.558,2.558,0,0,1-.045-.469,2.524,2.524,0,0,1,.067-.592.139.139,0,0,1,.136-.108h.388l.054-.126a.921.921,0,0,1,.852-.565h2.338a.925.925,0,0,1,.857.566l.054.125h.388a.139.139,0,0,1,.136.108,2.539,2.539,0,0,1,.067.592,2.587,2.587,0,0,1-.044.469.14.14,0,0,1-.029.063A3.324,3.324,0,0,1,134.105,89.173Zm-2.355-1.383a3.065,3.065,0,0,0,4.71,0,2.259,2.259,0,0,0,.034-.383,2.306,2.306,0,0,0-.037-.42h-.367a.139.139,0,0,1-.128-.085l-.09-.211a.654.654,0,0,0-.6-.4h-2.338a.642.642,0,0,0-.594.395l-.09.212a.14.14,0,0,1-.128.085h-.367a2.308,2.308,0,0,0-.037.42A2.217,2.217,0,0,0,131.75,87.791Zm4.841.061h0Z" transform="translate(-131.437 -86.017)" fill="#434343" />
            </g>
            <g id="Group_54" data-name="Group 54" transform="translate(7.005 10.787)">
              <path id="Path_99" data-name="Path 99" d="M139.85,92.036v2.452a.719.719,0,1,1-1.438,0V92.036a.719.719,0,1,1,1.438,0Z" transform="translate(-138.272 -91.177)" fill="#324b92" />
              <path id="Path_100" data-name="Path 100" d="M138.771,94.987a.86.86,0,0,1-.859-.859V91.676a.859.859,0,1,1,1.717,0v2.452A.86.86,0,0,1,138.771,94.987Zm0-3.89a.58.58,0,0,0-.579.58v2.452a.579.579,0,1,0,1.159,0V91.676A.58.58,0,0,0,138.771,91.1Z" transform="translate(-137.912 -90.817)" fill="#434343" />
            </g>
            <g id="Group_55" data-name="Group 55" transform="translate(5.197 9.447)">
              <path id="Path_101" data-name="Path 101" d="M136.994,87.768a2.415,2.415,0,0,1-.042.443,2.525,2.525,0,0,1-4.972,0,2.431,2.431,0,0,1,.021-1h.48l.09-.211a.783.783,0,0,1,.723-.48h2.338a.791.791,0,0,1,.728.48l.09.211h.48A2.41,2.41,0,0,1,136.994,87.768Z" transform="translate(-131.797 -86.377)" fill="#324b92" />
              <path id="Path_102" data-name="Path 102" d="M134.105,90.075a2.655,2.655,0,0,1-2.624-2.2,2.551,2.551,0,0,1-.044-.467,2.524,2.524,0,0,1,.067-.592.139.139,0,0,1,.136-.108h.388l.054-.126a.921.921,0,0,1,.852-.565h2.338a.925.925,0,0,1,.857.566l.054.125h.388a.139.139,0,0,1,.136.108,2.539,2.539,0,0,1,.067.592,2.587,2.587,0,0,1-.044.469A2.655,2.655,0,0,1,134.105,90.075Zm-2.352-3.088a2.308,2.308,0,0,0-.037.42,2.271,2.271,0,0,0,.04.418,2.385,2.385,0,0,0,4.7,0,2.3,2.3,0,0,0,0-.839h-.367a.139.139,0,0,1-.128-.085l-.09-.211a.654.654,0,0,0-.6-.4h-2.338a.642.642,0,0,0-.594.395l-.09.212a.14.14,0,0,1-.128.085Z" transform="translate(-131.437 -86.017)" fill="#434343" />
            </g>
            <g id="Group_60" data-name="Group 60" transform="translate(7.005 24.373)">
              <g id="Group_56" data-name="Group 56" transform="translate(2.418 0)">
                <circle id="Ellipse_3" data-name="Ellipse 3" cx="0.897" cy="0.897" r="0.897" transform="matrix(0.754, -0.657, 0.657, 0.754, 0, 1.179)" fill="#e0e0df" />
                <path id="Path_103" data-name="Path 103" d="M148.425,142.355a1.037,1.037,0,0,1-1.032-.961h0a1.037,1.037,0,1,1,1.111.958C148.477,142.354,148.451,142.355,148.425,142.355Zm0-1.8-.057,0a.757.757,0,0,0-.7.811h0a.758.758,0,1,0,.757-.814Z" transform="translate(-147.161 -140.051)" fill="#434343" />
              </g>
              <g id="Group_57" data-name="Group 57" transform="translate(0 0.865)">
                <rect id="Rectangle_21" data-name="Rectangle 21" width="7.109" height="5.185" transform="translate(0.14 0.663) rotate(-4.223)" fill="#e0e0df" />
                <path id="Path_104" data-name="Path 104" d="M138.433,148.53a.14.14,0,0,1-.139-.13l-.382-5.171a.14.14,0,0,1,.129-.149l7.089-.523a.14.14,0,0,1,.15.129l.382,5.171a.14.14,0,0,1-.129.149l-7.089.523Zm-.232-5.182.361,4.892,6.811-.5-.361-4.892Z" transform="translate(-137.912 -142.557)" fill="#434343" />
              </g>
              <g id="Group_58" data-name="Group 58" transform="translate(2.029 1.015)">
                <rect id="Rectangle_22" data-name="Rectangle 22" width="3.039" height="1.227" transform="translate(0.14 0.363) rotate(-4.223)" fill="#e0e0df" />
                <path id="Path_105" data-name="Path 105" d="M145.407,144.82a.14.14,0,0,1-.139-.129l-.09-1.224a.141.141,0,0,1,.033-.1.14.14,0,0,1,.1-.048l3.031-.224a.14.14,0,0,1,.15.129l.09,1.224a.14.14,0,0,1-.129.149l-3.031.224Zm.059-1.234.07.945,2.752-.2-.07-.945Z" transform="translate(-145.177 -143.093)" fill="#434343" />
              </g>
              <g id="Group_59" data-name="Group 59" transform="translate(0.305 4.994)">
                <rect id="Rectangle_23" data-name="Rectangle 23" width="7.109" height="1.045" transform="translate(0.14 0.663) rotate(-4.223)" fill="#fff" />
                <path id="Path_106" data-name="Path 106" d="M139.219,159.185a.14.14,0,0,1-.139-.129L139,158.013a.14.14,0,0,1,.129-.149l7.089-.524a.141.141,0,0,1,.15.129l.077,1.042a.14.14,0,0,1-.129.149l-7.09.523Zm.073-1.053.057.763,6.811-.5-.057-.764Z" transform="translate(-139.003 -157.34)" fill="#434343" />
              </g>
            </g>
            <g id="Group_61" data-name="Group 61" transform="translate(6.062 14.16)">
              <path id="Path_107" data-name="Path 107" d="M136.339,104.714a1.812,1.812,0,0,1-1.8-1.671.14.14,0,0,1,.279-.02,1.528,1.528,0,0,0,3.047,0,.14.14,0,0,1,.279.02A1.813,1.813,0,0,1,136.339,104.714Z" transform="translate(-134.537 -102.893)" fill="#434343" />
            </g>
            <g id="Group_62" data-name="Group 62" transform="translate(9.102 7.515)">
              <path id="Path_108" data-name="Path 108" d="M146.3,79.6a.379.379,0,0,1-.379.38" transform="translate(-145.778 -79.462)" fill="#fff" />
              <path id="Path_109" data-name="Path 109" d="M145.558,79.761a.14.14,0,0,1,0-.279.24.24,0,0,0,.24-.24.14.14,0,0,1,.279,0A.52.52,0,0,1,145.558,79.761Z" transform="translate(-145.418 -79.102)" fill="#434343" />
            </g>
            <g id="Group_63" data-name="Group 63" transform="translate(7.992 8.143)">
              <path id="Path_110" data-name="Path 110" d="M142.326,81.851a.379.379,0,0,1-.379.38" transform="translate(-141.807 -81.711)" fill="#fff" />
              <path id="Path_111" data-name="Path 111" d="M141.586,82.01a.14.14,0,0,1,0-.279.24.24,0,0,0,.24-.24.14.14,0,0,1,.279,0A.519.519,0,0,1,141.586,82.01Z" transform="translate(-141.446 -81.351)" fill="#434343" />
            </g>
            <g id="Group_64" data-name="Group 64" transform="translate(5.586 7.515)">
              <path id="Path_112" data-name="Path 112" d="M133.709,79.6a.379.379,0,0,1-.379.38" transform="translate(-133.19 -79.462)" fill="#fff" />
              <path id="Path_113" data-name="Path 113" d="M132.97,79.761a.14.14,0,1,1,0-.279.24.24,0,0,0,.24-.24.14.14,0,0,1,.279,0A.52.52,0,0,1,132.97,79.761Z" transform="translate(-132.83 -79.102)" fill="#434343" />
            </g>
            <g id="Group_65" data-name="Group 65" transform="translate(5.271 8.713)">
              <path id="Path_114" data-name="Path 114" d="M132.582,83.889a.379.379,0,0,1-.379.379" transform="translate(-132.063 -83.749)" fill="#fff" />
              <path id="Path_115" data-name="Path 115" d="M131.843,84.048a.14.14,0,1,1,0-.279.24.24,0,0,0,.24-.24.14.14,0,1,1,.279,0A.519.519,0,0,1,131.843,84.048Z" transform="translate(-131.703 -83.389)" fill="#434343" />
            </g>
            <g id="Group_66" data-name="Group 66" transform="translate(6.815 6.882)">
              <path id="Path_116" data-name="Path 116" d="M138.112,77.335a.379.379,0,0,1-.38.38" transform="translate(-137.592 -77.195)" fill="#fff" />
              <path id="Path_117" data-name="Path 117" d="M137.372,77.494a.14.14,0,1,1,0-.279.24.24,0,0,0,.24-.24.14.14,0,0,1,.279,0A.52.52,0,0,1,137.372,77.494Z" transform="translate(-137.232 -76.835)" fill="#434343" />
            </g>
            <g id="Group_67" data-name="Group 67" transform="translate(6.626 8.333)">
              <path id="Path_118" data-name="Path 118" d="M137.053,82.91a.379.379,0,0,1,.38-.38" transform="translate(-136.914 -82.39)" fill="#fff" />
              <path id="Path_119" data-name="Path 119" d="M136.694,82.689a.14.14,0,0,1-.14-.14.52.52,0,0,1,.519-.519.14.14,0,1,1,0,.279.24.24,0,0,0-.24.24A.14.14,0,0,1,136.694,82.689Z" transform="translate(-136.554 -82.03)" fill="#434343" />
            </g>
            <g id="Group_68" data-name="Group 68" transform="translate(8.254 6.946)">
              <path id="Path_120" data-name="Path 120" d="M142.882,77.944a.379.379,0,0,1,.38-.379" transform="translate(-142.743 -77.425)" fill="#fff" />
              <path id="Path_121" data-name="Path 121" d="M142.523,77.723a.14.14,0,0,1-.14-.14.52.52,0,0,1,.519-.519.14.14,0,1,1,0,.279.24.24,0,0,0-.24.24A.14.14,0,0,1,142.523,77.723Z" transform="translate(-142.383 -77.064)" fill="#434343" />
            </g>
            <g id="Group_69" data-name="Group 69" transform="translate(9.8 8.713)">
              <path id="Path_122" data-name="Path 122" d="M148.418,84.268a.379.379,0,0,1,.38-.379" transform="translate(-148.278 -83.749)" fill="#fff" />
              <path id="Path_123" data-name="Path 123" d="M148.058,84.048a.14.14,0,0,1-.14-.14.52.52,0,0,1,.519-.519.14.14,0,0,1,0,.279.24.24,0,0,0-.24.24A.14.14,0,0,1,148.058,84.048Z" transform="translate(-147.918 -83.389)" fill="#434343" />
            </g>
            <g id="Group_73" data-name="Group 73" transform="translate(1.752)">
              <g id="Group_70" data-name="Group 70" transform="translate(3.02)">
                <circle id="Ellipse_4" data-name="Ellipse 4" cx="1.126" cy="1.126" r="1.126" transform="translate(0 1.945) rotate(-59.709)" fill="#fff" />
                <path id="Path_124" data-name="Path 124" d="M132.165,55.71a1.267,1.267,0,1,1,.17-.011A1.3,1.3,0,0,1,132.165,55.71Zm0-2.253a1.018,1.018,0,0,0-.133.009.986.986,0,1,0,.133-.009Z" transform="translate(-130.625 -52.903)" fill="#434343" />
              </g>
              <g id="Group_71" data-name="Group 71" transform="translate(0 0.804)">
                <rect id="Rectangle_24" data-name="Rectangle 24" width="8.921" height="6.507" transform="translate(0.14 1.332) rotate(-7.683)" fill="#fff" />
                <path id="Path_125" data-name="Path 125" d="M120.115,63a.14.14,0,0,1-.138-.121l-.87-6.448a.139.139,0,0,1,.12-.157l8.841-1.193a.141.141,0,0,1,.157.12l.87,6.448a.14.14,0,0,1-.12.157l-8.841,1.193Zm-.713-6.468.833,6.171,8.564-1.155-.833-6.171Z" transform="translate(-119.105 -55.075)" fill="#434343" />
              </g>
              <g id="Group_72" data-name="Group 72" transform="translate(2.531 1.146)">
                <rect id="Rectangle_25" data-name="Rectangle 25" width="3.814" height="1.54" transform="translate(0.14 0.65) rotate(-7.683)" fill="#fff" />
                <path id="Path_126" data-name="Path 126" d="M128.511,58.612a.139.139,0,0,1-.138-.121l-.206-1.526a.137.137,0,0,1,.027-.1.141.141,0,0,1,.092-.054l3.78-.51a.14.14,0,0,1,.157.12l.206,1.526a.137.137,0,0,1-.027.1.14.14,0,0,1-.092.054l-3.78.51Zm-.049-1.546.169,1.249,3.5-.473-.169-1.249Z" transform="translate(-128.166 -56.296)" fill="#434343" />
              </g>
            </g>
            <g id="Group_74" data-name="Group 74" transform="translate(4.932 20.784)">
              <path id="Path_127" data-name="Path 127" d="M137.348,127.11v1.359h-6.359l.018-.165.053-.741c.012-.153.023-.3.029-.453Z" transform="translate(-130.849 -126.97)" fill="#324b92" />
              <path id="Path_128" data-name="Path 128" d="M136.988,128.248h-6.359a.14.14,0,0,1-.139-.155l.018-.164.055-.767c.011-.14.021-.276.027-.417a.14.14,0,0,1,.14-.134h6.259a.14.14,0,0,1,.14.14v1.359A.14.14,0,0,1,136.988,128.248Zm-6.2-.279h6.064v-1.079h-5.986c-.006.1-.013.195-.021.294Z" transform="translate(-130.489 -126.61)" fill="#434343" />
            </g>
            <g id="Group_75" data-name="Group 75" transform="translate(9.71 15.701)">
              <path id="Path_129" data-name="Path 129" d="M149.674,108.912v8.424a.848.848,0,0,1-.789.9h0a.848.848,0,0,1-.789-.9v-6.582" transform="translate(-147.956 -108.772)" fill="#e0e0df" />
              <path id="Path_130" data-name="Path 130" d="M148.525,118.011a.987.987,0,0,1-.929-1.035v-6.582a.14.14,0,1,1,.279,0v6.582a.657.657,0,1,0,1.3,0v-8.424a.14.14,0,0,1,.279,0v8.424A.987.987,0,0,1,148.525,118.011Z" transform="translate(-147.596 -108.412)" fill="#434343" />
            </g>
          </g>
          <g id="Group_105" data-name="Group 105" transform="translate(0 4.798)">
            <g id="Group_81" data-name="Group 81" transform="translate(0.556 24.601)">
              <g id="Group_77" data-name="Group 77" transform="translate(3.081 2.47)">
                <path id="Rectangle_26" data-name="Rectangle 26" d="M.713,0h1a.851.851,0,0,1,.851.851v0a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.713A.713.713,0,0,1,.713,0Z" transform="translate(0.14 0.14)" fill="#fff" />
                <path id="Path_131" data-name="Path 131" d="M95.179,167.431H92.615a.14.14,0,0,1-.14-.14v-.248a.744.744,0,0,1,.743-.743h1.241a.86.86,0,0,1,.859.859v.132A.14.14,0,0,1,95.179,167.431Zm-2.424-.279h2.285a.58.58,0,0,0-.58-.572H93.218a.464.464,0,0,0-.464.463Z" transform="translate(-92.475 -166.301)" fill="#434343" />
              </g>
              <g id="Group_78" data-name="Group 78" transform="translate(3.532)">
                <path id="Rectangle_27" data-name="Rectangle 27" d="M0,0H.831a0,0,0,0,1,0,0V2.4a.416.416,0,0,1-.416.416h0A.416.416,0,0,1,0,2.4V0A0,0,0,0,1,0,0Z" transform="translate(0.14 0.139)" fill="#324b92" />
                <path id="Path_132" data-name="Path 132" d="M94.709,160.551h-.129a.491.491,0,0,1-.491-.491V157.6a.139.139,0,0,1,.14-.14h.831a.139.139,0,0,1,.14.14v2.464A.491.491,0,0,1,94.709,160.551Zm-.34-2.815v2.324a.212.212,0,0,0,.211.212h.129a.212.212,0,0,0,.211-.212v-2.324Z" transform="translate(-94.09 -157.456)" fill="#434343" />
              </g>
              <g id="Group_79" data-name="Group 79" transform="translate(0 2.47)">
                <path id="Rectangle_28" data-name="Rectangle 28" d="M0,0H2.564a0,0,0,0,1,0,0V0a.851.851,0,0,1-.851.851h-1A.713.713,0,0,1,0,.138V0A0,0,0,0,1,0,0Z" transform="translate(2.703 0.991) rotate(-180)" fill="#fff" />
                <path id="Path_133" data-name="Path 133" d="M84.148,167.431H81.584a.14.14,0,0,1-.14-.14v-.132a.86.86,0,0,1,.859-.859h1.242a.744.744,0,0,1,.743.743v.248A.14.14,0,0,1,84.148,167.431Zm-2.424-.279h2.285v-.108a.464.464,0,0,0-.463-.463H82.3A.581.581,0,0,0,81.723,167.152Z" transform="translate(-81.444 -166.301)" fill="#434343" />
              </g>
              <g id="Group_80" data-name="Group 80" transform="translate(1.282)">
                <path id="Rectangle_29" data-name="Rectangle 29" d="M.416,0h0A.416.416,0,0,1,.831.416v2.4a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.416A.416.416,0,0,1,.416,0Z" transform="translate(0.971 2.955) rotate(-180)" fill="#324b92" />
                <path id="Path_134" data-name="Path 134" d="M86.653,160.551h-.129a.491.491,0,0,1-.491-.491V157.6a.14.14,0,0,1,.14-.14H87a.14.14,0,0,1,.14.14v2.464A.492.492,0,0,1,86.653,160.551Zm-.34-2.815v2.324a.212.212,0,0,0,.211.212h.129a.212.212,0,0,0,.212-.212v-2.324Z" transform="translate(-86.034 -157.456)" fill="#434343" />
              </g>
            </g>
            <g id="Group_82" data-name="Group 82" transform="translate(0.234 13.627)">
              <path id="Rectangle_30" data-name="Rectangle 30" d="M3.145,0h0A3.145,3.145,0,0,1,6.289,3.145V6.6a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3.145A3.145,3.145,0,0,1,3.145,0Z" transform="translate(0.14 0.14)" fill="#fff" />
              <path id="Path_135" data-name="Path 135" d="M86.72,125.04H80.431a.14.14,0,0,1-.14-.14v-5.538a1.2,1.2,0,0,1,1.2-1.2h4.174a1.2,1.2,0,0,1,1.2,1.2V124.9A.14.14,0,0,1,86.72,125.04Zm-6.149-.279h6.01v-5.4a.919.919,0,0,0-.918-.918H81.488a.919.919,0,0,0-.918.918Z" transform="translate(-80.291 -118.165)" fill="#434343" />
            </g>
            <g id="Group_83" data-name="Group 83" transform="translate(1.229 20.224)">
              <rect id="Rectangle_31" data-name="Rectangle 31" width="4.298" height="5.919" transform="translate(0.14 0.14)" fill="#e0e0df" />
              <path id="Path_136" data-name="Path 136" d="M88.293,147.98h-4.3a.14.14,0,0,1-.14-.14v-5.919a.14.14,0,0,1,.14-.14h4.3a.14.14,0,0,1,.14.14v5.919A.14.14,0,0,1,88.293,147.98Zm-4.158-.279h4.019v-5.64H84.134Z" transform="translate(-83.855 -141.782)" fill="#434343" />
            </g>
            <g id="Group_86" data-name="Group 86" transform="translate(0.234 9.627)">
              <g id="Group_84" data-name="Group 84">
                <circle id="Ellipse_5" data-name="Ellipse 5" cx="0.498" cy="0.498" r="0.498" transform="translate(0.14 0.14)" fill="#324b92" />
                <path id="Path_137" data-name="Path 137" d="M80.928,105.118a.638.638,0,1,1,.637-.638A.638.638,0,0,1,80.928,105.118Zm0-1a.358.358,0,1,0,.358.358A.358.358,0,0,0,80.928,104.122Z" transform="translate(-80.291 -103.843)" fill="#434343" />
              </g>
              <g id="Group_85" data-name="Group 85" transform="translate(5.294)">
                <circle id="Ellipse_6" data-name="Ellipse 6" cx="0.498" cy="0.498" r="0.498" transform="translate(0.14 0.14)" fill="#324b92" />
                <path id="Path_138" data-name="Path 138" d="M99.881,105.118a.638.638,0,1,1,.637-.638A.638.638,0,0,1,99.881,105.118Zm0-1a.358.358,0,1,0,.358.358A.358.358,0,0,0,99.881,104.122Z" transform="translate(-99.244 -103.843)" fill="#434343" />
              </g>
            </g>
            <g id="Group_87" data-name="Group 87" transform="translate(2.676 12.409)">
              <path id="Path_139" data-name="Path 139" d="M89.535,114.3v.8a.7.7,0,0,0,1.406,0v-.8Z" transform="translate(-89.395 -114.164)" fill="#324b92" />
              <path id="Path_140" data-name="Path 140" d="M89.878,115.591a.843.843,0,0,1-.843-.843v-.8a.14.14,0,0,1,.14-.14h1.406a.139.139,0,0,1,.14.14v.8A.843.843,0,0,1,89.878,115.591Zm-.564-1.507v.665a.563.563,0,0,0,1.127,0v-.665Z" transform="translate(-89.035 -113.804)" fill="#434343" />
            </g>
            <g id="Group_88" data-name="Group 88" transform="translate(1.003 7.666)">
              <path id="Path_141" data-name="Path 141" d="M88.293,99.135a3.643,3.643,0,0,0-4.749.006,2.463,2.463,0,0,1,1.169-1.5,2.459,2.459,0,0,1,3.445,1.123A2.4,2.4,0,0,1,88.293,99.135Z" transform="translate(-83.404 -97.181)" fill="#fff" />
              <path id="Path_142" data-name="Path 142" d="M83.184,98.92a.14.14,0,0,1-.135-.176,2.613,2.613,0,0,1,1.236-1.589,2.561,2.561,0,0,1,.53-.227,2.6,2.6,0,0,1,3.11,1.413,2.556,2.556,0,0,1,.143.4.139.139,0,0,1-.06.154.141.141,0,0,1-.166-.012,3.5,3.5,0,0,0-4.566.005A.139.139,0,0,1,83.184,98.92ZM85.56,97.1a2.328,2.328,0,0,0-.664.1,2.3,2.3,0,0,0-.473.2,2.337,2.337,0,0,0-.935.978,3.787,3.787,0,0,1,4.142,0A2.325,2.325,0,0,0,85.56,97.1Z" transform="translate(-83.044 -96.821)" fill="#434343" />
            </g>
            <g id="Group_89" data-name="Group 89" transform="translate(0.919 8.603)">
              <path id="Path_143" data-name="Path 143" d="M88.163,102.2a2.46,2.46,0,1,1-4.92,0c0-.07,0-.139.009-.208a2.5,2.5,0,0,1,.075-.431,3.643,3.643,0,0,1,4.749-.006A2.429,2.429,0,0,1,88.163,102.2Z" transform="translate(-83.103 -100.535)" fill="#324b92" />
              <path id="Path_144" data-name="Path 144" d="M85.343,104.437a2.6,2.6,0,0,1-2.6-2.6c0-.074,0-.148.009-.22a2.66,2.66,0,0,1,.08-.456.138.138,0,0,1,.044-.069,3.782,3.782,0,0,1,4.931-.006.14.14,0,0,1,.044.069,2.575,2.575,0,0,1,.092.682A2.6,2.6,0,0,1,85.343,104.437Zm-2.252-3.161a2.39,2.39,0,0,0-.061.366c-.006.064-.008.13-.008.2a2.32,2.32,0,1,0,4.57-.567,3.5,3.5,0,0,0-4.5.005Z" transform="translate(-82.743 -100.175)" fill="#434343" />
            </g>
            <g id="Group_90" data-name="Group 90" transform="translate(1.229 25.702)">
              <rect id="Rectangle_32" data-name="Rectangle 32" width="4.298" height="0.882" transform="translate(0.14 0.14)" fill="#fff" />
              <path id="Path_145" data-name="Path 145" d="M88.293,162.557h-4.3a.14.14,0,0,1-.14-.14v-.882a.14.14,0,0,1,.14-.14h4.3a.14.14,0,0,1,.14.14v.882A.14.14,0,0,1,88.293,162.557Zm-4.158-.279h4.019v-.6H84.134Z" transform="translate(-83.855 -161.395)" fill="#434343" />
            </g>
            <g id="Group_91" data-name="Group 91" transform="translate(3.378 22.128)">
              <line id="Line_2" data-name="Line 2" y1="4.27" transform="translate(0.14 0.14)" fill="#fff" />
              <path id="Path_146" data-name="Path 146" d="M91.69,153.148a.139.139,0,0,1-.14-.14v-4.27a.14.14,0,0,1,.279,0v4.27A.14.14,0,0,1,91.69,153.148Z" transform="translate(-91.55 -148.599)" fill="#434343" />
            </g>
            <g id="Group_92" data-name="Group 92" transform="translate(1.229 20.224)">
              <rect id="Rectangle_33" data-name="Rectangle 33" width="4.609" height="0.478" transform="translate(0.14 0.14)" fill="#fff" />
              <path id="Path_147" data-name="Path 147" d="M88.6,142.539H83.995a.14.14,0,0,1-.14-.14v-.478a.14.14,0,0,1,.14-.14H88.6a.139.139,0,0,1,.14.14v.478A.139.139,0,0,1,88.6,142.539Zm-4.469-.279h4.33v-.2h-4.33Z" transform="translate(-83.855 -141.782)" fill="#434343" />
            </g>
            <g id="Group_98" data-name="Group 98" transform="translate(4.092 19.675)">
              <g id="Group_93" data-name="Group 93" transform="translate(0 0.74)">
                <path id="Rectangle_34" data-name="Rectangle 34" d="M0,0H4.157a0,0,0,0,1,0,0V2.057A4.157,4.157,0,0,1,0,6.214H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(4.297 6.354) rotate(-180)" fill="#e0e0df" />
                <path id="Path_148" data-name="Path 148" d="M98.4,148.96H94.246a.14.14,0,0,1-.14-.14v-4.939a1.416,1.416,0,0,1,1.414-1.414H98.4a.14.14,0,0,1,.14.14v6.214A.14.14,0,0,1,98.4,148.96Zm-4.017-.279h3.878v-5.934H95.52a1.136,1.136,0,0,0-1.135,1.135Z" transform="translate(-94.106 -142.467)" fill="#434343" />
              </g>
              <g id="Group_94" data-name="Group 94" transform="translate(2.99)">
                <rect id="Rectangle_35" data-name="Rectangle 35" width="1.167" height="0.74" transform="translate(1.307 0.88) rotate(-180)" fill="#fff" />
                <path id="Path_149" data-name="Path 149" d="M106.119,140.836h-1.167a.14.14,0,0,1-.14-.14v-.74a.14.14,0,0,1,.14-.14h1.167a.14.14,0,0,1,.14.14v.74A.14.14,0,0,1,106.119,140.836Zm-1.027-.279h.888V140.1h-.888Z" transform="translate(-104.812 -139.817)" fill="#434343" />
              </g>
              <g id="Group_97" data-name="Group 97" transform="translate(0.985 3.53)">
                <g id="Group_95" data-name="Group 95">
                  <line id="Line_3" data-name="Line 3" x1="2.188" transform="translate(0.139 0.14)" fill="#fff" />
                  <path id="Path_150" data-name="Path 150" d="M99.959,152.735H97.772a.14.14,0,1,1,0-.279h2.188a.14.14,0,1,1,0,.279Z" transform="translate(-97.632 -152.456)" fill="#434343" />
                </g>
                <g id="Group_96" data-name="Group 96" transform="translate(0 2.229)">
                  <line id="Line_4" data-name="Line 4" x1="2.188" transform="translate(0.139 0.14)" fill="#fff" />
                  <path id="Path_151" data-name="Path 151" d="M99.959,160.717H97.772a.14.14,0,0,1,0-.279h2.188a.14.14,0,0,1,0,.279Z" transform="translate(-97.632 -160.438)" fill="#434343" />
                </g>
              </g>
            </g>
            <g id="Group_99" data-name="Group 99" transform="translate(0 1.049)">
              <rect id="Rectangle_36" data-name="Rectangle 36" width="6.757" height="6.994" rx="3.378" transform="translate(0.139 0.14)" fill="#e0e0df" />
              <path id="Path_152" data-name="Path 152" d="M84.354,80.4H81.59a2.138,2.138,0,0,1-2.136-2.136v-3a2.139,2.139,0,0,1,2.136-2.136h2.764a2.138,2.138,0,0,1,2.136,2.136v3A2.138,2.138,0,0,1,84.354,80.4ZM81.59,73.407a1.859,1.859,0,0,0-1.857,1.857v3a1.859,1.859,0,0,0,1.857,1.856h2.764a1.859,1.859,0,0,0,1.857-1.856v-3a1.859,1.859,0,0,0-1.857-1.857Z" transform="translate(-79.454 -73.128)" fill="#434343" />
            </g>
            <g id="Group_100" data-name="Group 100" transform="translate(1.838)">
              <rect id="Rectangle_37" data-name="Rectangle 37" width="3.081" height="1.08" transform="translate(0.14 0.14)" fill="#e0e0df" />
              <path id="Path_153" data-name="Path 153" d="M89.255,70.732H86.174a.14.14,0,0,1-.14-.14v-1.08a.14.14,0,0,1,.14-.14h3.081a.14.14,0,0,1,.14.14v1.08A.14.14,0,0,1,89.255,70.732Zm-2.941-.279h2.8v-.8h-2.8Z" transform="translate(-86.034 -69.373)" fill="#434343" />
            </g>
            <g id="Group_101" data-name="Group 101" transform="translate(5.001 5.489)">
              <path id="Path_154" data-name="Path 154" d="M97.859,90.963a1.549,1.549,0,0,0,.86-1.387v-.049" transform="translate(-97.719 -89.387)" fill="#fff" />
              <path id="Path_155" data-name="Path 155" d="M97.5,90.742a.14.14,0,0,1-.062-.265,1.4,1.4,0,0,0,.782-1.262v-.049a.14.14,0,0,1,.279,0v.049a1.678,1.678,0,0,1-.937,1.512A.138.138,0,0,1,97.5,90.742Z" transform="translate(-97.359 -89.027)" fill="#434343" />
            </g>
            <g id="Group_102" data-name="Group 102" transform="translate(1.028 3.314)">
              <line id="Line_5" data-name="Line 5" y2="1.737" transform="translate(0.14 0.14)" fill="#fff" />
              <path id="Path_156" data-name="Path 156" d="M83.274,83.256a.139.139,0,0,1-.14-.14V81.379a.14.14,0,0,1,.279,0v1.737A.14.14,0,0,1,83.274,83.256Z" transform="translate(-83.134 -81.239)" fill="#434343" />
            </g>
            <g id="Group_103" data-name="Group 103" transform="translate(0.234 15.523)">
              <path id="Path_157" data-name="Path 157" d="M80.791,125.451v5.209a.723.723,0,0,0,.723.723h0a.723.723,0,0,0,.723-.723v-5.167" transform="translate(-80.651 -125.311)" fill="#fff" />
              <path id="Path_158" data-name="Path 158" d="M81.154,131.162a.864.864,0,0,1-.863-.862v-5.209a.14.14,0,1,1,.279,0V130.3a.583.583,0,0,0,1.167,0v-5.167a.14.14,0,0,1,.279,0V130.3A.863.863,0,0,1,81.154,131.162Z" transform="translate(-80.291 -124.951)" fill="#434343" />
            </g>
            <g id="Group_104" data-name="Group 104" transform="translate(5.077 15.523)">
              <path id="Path_159" data-name="Path 159" d="M98.131,125.451v5.209a.723.723,0,0,0,.723.723h0a.723.723,0,0,0,.723-.723v-5.167" transform="translate(-97.992 -125.311)" fill="#fff" />
              <path id="Path_160" data-name="Path 160" d="M98.494,131.162a.863.863,0,0,1-.862-.862v-5.209a.14.14,0,1,1,.279,0V130.3a.583.583,0,1,0,1.166,0v-5.167a.14.14,0,0,1,.279,0V130.3A.863.863,0,0,1,98.494,131.162Z" transform="translate(-97.632 -124.951)" fill="#434343" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

const NonDisplaced = (props: IconProps) => {
  const { height, width, x, y } = props;

  return (
    <svg id="Group_310" data-name="Group 310" xmlns="http://www.w3.org/2000/svg" x={x} y={y} width={width ? width : 45} height={height ? height : 33} viewBox="0 0 45.185 33.483"><g id="Group_238" data-name="Group 238">
      <g id="Group_179" data-name="Group 179" transform="translate(0 33.2)">
        <line id="Line_11" data-name="Line 11" x1="44.902" transform="translate(0.142 0.142)" fill="#e4effa" />
        <path id="Path_238" data-name="Path 238" d="M751.112,169.631h-44.9a.142.142,0,1,1,0-.283h44.9a.142.142,0,1,1,0,.283Z" transform="translate(-706.068 -169.348)" fill="#434343" />
      </g>
      <g id="Group_233" data-name="Group 233" transform="translate(11.516)">
        <g id="Group_209" data-name="Group 209" transform="translate(9.459)">
          <g id="Group_184" data-name="Group 184" transform="translate(3.331 27.829)">
            <g id="Group_180" data-name="Group 180" transform="translate(4.919 4.012)">
              <path id="Rectangle_59" data-name="Rectangle 59" d="M.724,0H2.734A1.359,1.359,0,0,1,4.093,1.359v0a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.724A.724.724,0,0,1,.724,0Z" transform="translate(0.142 0.142)" fill="#fff" />
              <path id="Path_239" data-name="Path 239" d="M813.432,166.2h-4.093a.142.142,0,0,1-.142-.142v-.747a.754.754,0,0,1,.753-.754h2.333a1.291,1.291,0,0,1,1.289,1.29v.21A.141.141,0,0,1,813.432,166.2Zm-3.951-.283h3.809v-.069a1.007,1.007,0,0,0-1.006-1.007H809.95a.471.471,0,0,0-.47.47Z" transform="translate(-809.197 -164.554)" fill="#434343" />
            </g>
            <g id="Group_181" data-name="Group 181" transform="translate(5.638)">
              <path id="Rectangle_60" data-name="Rectangle 60" d="M0,0H1.327a0,0,0,0,1,0,0V3.831a.663.663,0,0,1-.663.663h0A.663.663,0,0,1,0,3.831V0A0,0,0,0,1,0,0Z" transform="translate(0.142 0.142)" fill="#324b92" />
              <path id="Path_240" data-name="Path 240" d="M812.644,155.173h-.205a.7.7,0,0,1-.7-.7v-3.934a.142.142,0,0,1,.142-.142H813.2a.142.142,0,0,1,.142.142v3.934A.7.7,0,0,1,812.644,155.173Zm-.625-4.494v3.792a.419.419,0,0,0,.419.419h.205a.419.419,0,0,0,.419-.419v-3.792Z" transform="translate(-811.736 -150.395)" fill="#434343" />
            </g>
            <g id="Group_182" data-name="Group 182" transform="translate(0 4.012)">
              <path id="Rectangle_61" data-name="Rectangle 61" d="M0,0H4.093a0,0,0,0,1,0,0V0A1.359,1.359,0,0,1,2.734,1.359H.724A.724.724,0,0,1,0,.635V0A0,0,0,0,1,0,0Z" transform="translate(4.235 1.5) rotate(-180)" fill="#fff" />
              <path id="Path_241" data-name="Path 241" d="M796.075,166.2h-4.093a.142.142,0,0,1-.142-.142v-.21a1.291,1.291,0,0,1,1.29-1.29h2.333a.754.754,0,0,1,.754.754v.747A.142.142,0,0,1,796.075,166.2Zm-3.951-.283h3.809v-.605a.471.471,0,0,0-.47-.47H793.13a1.007,1.007,0,0,0-1.006,1.007Z" transform="translate(-791.84 -164.554)" fill="#434343" />
            </g>
            <g id="Group_183" data-name="Group 183" transform="translate(2.046)">
              <path id="Rectangle_62" data-name="Rectangle 62" d="M.663,0h0a.663.663,0,0,1,.663.663V4.494a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.663A.663.663,0,0,1,.663,0Z" transform="translate(1.469 4.636) rotate(-180)" fill="#324b92" />
              <path id="Path_242" data-name="Path 242" d="M799.969,155.173h-.205a.7.7,0,0,1-.7-.7v-3.934a.142.142,0,0,1,.142-.142h1.327a.141.141,0,0,1,.142.142v3.934A.7.7,0,0,1,799.969,155.173Zm-.624-4.494v3.792a.419.419,0,0,0,.419.419h.205a.419.419,0,0,0,.419-.419v-3.792Z" transform="translate(-799.061 -150.395)" fill="#434343" />
            </g>
          </g>
          <g id="Group_186" data-name="Group 186" transform="translate(0 4.765)">
            <g id="Group_185" data-name="Group 185">
              <path id="Path_243" data-name="Path 243" d="M792.04,80.669v15.2h-7.234l.782-8.658.018-.167.054-.752c.012-.155.024-.3.03-.459v-.107a7.5,7.5,0,0,0-.06-.9l-.466-4.237c-.077-.042-.161-.084-.256-.125-1.176-.573-3.366-1.635-4.094-4-.555-1.808-.1-4,1.343-6.506a.9.9,0,0,1,1.552.9c-1.188,2.059-1.588,3.772-1.182,5.085.5,1.617,2.167,2.429,3.163,2.912.09.042.167.084.245.12a.578.578,0,0,0,.149.077.018.018,0,0,1,.012.006,2.5,2.5,0,0,0,.567.06h3.814A1.56,1.56,0,0,1,792.04,80.669Z" transform="translate(-780.443 -69.367)" fill="#e0e0df" />
              <path id="Path_244" data-name="Path 244" d="M791.682,95.652h-7.234a.141.141,0,0,1-.141-.154l.8-8.827.056-.778c.011-.143.022-.281.027-.424v-.1a7.321,7.321,0,0,0-.058-.884l-.457-4.164c-.056-.029-.116-.057-.181-.086-1.208-.589-3.428-1.671-4.173-4.087-.567-1.847-.111-4.073,1.355-6.618a1.042,1.042,0,0,1,1.417-.38,1.032,1.032,0,0,1,.38,1.418c-1.168,2.026-1.562,3.7-1.169,4.972.478,1.56,2.113,2.353,3.09,2.827.044.02.087.042.129.063l.114.056a.14.14,0,0,1,.032.02.524.524,0,0,0,.111.055h0l.008,0a2.42,2.42,0,0,0,.519.052h3.814a1.7,1.7,0,0,1,1.705,1.7v15.2A.142.142,0,0,1,791.682,95.652Zm-7.079-.283h6.937V80.311a1.421,1.421,0,0,0-1.422-1.416H786.3a2.728,2.728,0,0,1-.6-.065.128.128,0,0,1-.032-.013.762.762,0,0,1-.167-.086l-.107-.052-.123-.06c-1.021-.495-2.725-1.322-3.239-3-.417-1.351-.016-3.1,1.194-5.2a.749.749,0,0,0-.275-1.03.758.758,0,0,0-1.031.276c-1.425,2.473-1.872,4.624-1.33,6.393.708,2.3,2.857,3.346,4.012,3.908.1.046.19.089.271.133a.141.141,0,0,1,.074.109l.465,4.238a7.538,7.538,0,0,1,.06.916v.108c-.005.152-.016.294-.028.441l-.074.953Z" transform="translate(-780.084 -69.009)" fill="#434343" />
            </g>
          </g>
          <g id="Group_189" data-name="Group 189" transform="translate(4.391 10.421)">
            <g id="Group_187" data-name="Group 187">
              <circle id="Ellipse_13" data-name="Ellipse 13" cx="0.575" cy="0.575" r="0.575" transform="translate(0.142 0.142)" fill="#324b92" />
              <path id="Path_245" data-name="Path 245" d="M796.3,90.4a.716.716,0,1,1,.717-.716A.717.717,0,0,1,796.3,90.4Zm0-1.149a.433.433,0,1,0,.433.433A.433.433,0,0,0,796.3,89.252Z" transform="translate(-795.579 -88.969)" fill="#434343" />
            </g>
            <g id="Group_188" data-name="Group 188" transform="translate(5.745)">
              <circle id="Ellipse_14" data-name="Ellipse 14" cx="0.575" cy="0.575" r="0.575" transform="translate(0.142 0.142)" fill="#324b92" />
              <path id="Path_246" data-name="Path 246" d="M816.567,90.4a.716.716,0,1,1,.716-.716A.717.717,0,0,1,816.567,90.4Zm0-1.149a.433.433,0,1,0,.433.433A.434.434,0,0,0,816.567,89.252Z" transform="translate(-815.85 -88.969)" fill="#434343" />
            </g>
          </g>
          <g id="Group_190" data-name="Group 190" transform="translate(4.582 5.991)">
            <path id="Path_247" data-name="Path 247" d="M802.531,79.149a2.469,2.469,0,0,0-.021-1.017h-.487l-.091-.214a.8.8,0,0,0-.739-.487h-2.373a.8.8,0,0,0-.734.487l-.091.214h-.487a2.451,2.451,0,0,0-.021,1.017,3.256,3.256,0,1,1,5.045,0Z" transform="translate(-796.611 -73.694)" fill="#fff" />
            <path id="Path_248" data-name="Path 248" d="M802.173,78.932a.146.146,0,0,1-.06-.013.141.141,0,0,1-.079-.154,2.3,2.3,0,0,0,.041-.424,2.343,2.343,0,0,0-.038-.426h-.372a.142.142,0,0,1-.13-.086l-.091-.214a.664.664,0,0,0-.608-.4h-2.372a.652.652,0,0,0-.6.4l-.092.215a.141.141,0,0,1-.13.086h-.372a2.349,2.349,0,0,0-.037.426,2.3,2.3,0,0,0,.04.424.142.142,0,0,1-.249.116,3.349,3.349,0,0,1-.766-2.146,3.4,3.4,0,0,1,6.8,0,3.35,3.35,0,0,1-.766,2.146A.142.142,0,0,1,802.173,78.932Zm-.415-1.3h.394a.141.141,0,0,1,.138.109,2.569,2.569,0,0,1,.067.536,3.069,3.069,0,0,0,.408-1.542,3.114,3.114,0,0,0-6.229,0,3.07,3.07,0,0,0,.408,1.542,2.594,2.594,0,0,1,.067-.536.142.142,0,0,1,.138-.109h.393l.055-.128a.934.934,0,0,1,.865-.574h2.372a.938.938,0,0,1,.869.574Z" transform="translate(-796.253 -73.336)" fill="#434343" />
          </g>
          <g id="Group_191" data-name="Group 191" transform="translate(5.273 9.585)">
            <path id="Path_249" data-name="Path 249" d="M804.321,87.786a2.445,2.445,0,0,1-.043.45,3.251,3.251,0,0,1-5.045,0,2.454,2.454,0,0,1,.021-1.017h.487l.091-.214a.8.8,0,0,1,.734-.487h2.373a.8.8,0,0,1,.739.487l.091.214h.487A2.458,2.458,0,0,1,804.321,87.786Z" transform="translate(-799.048 -86.375)" fill="#fff" />
            <path id="Path_250" data-name="Path 250" d="M801.4,89.219a3.371,3.371,0,0,1-2.633-1.252.139.139,0,0,1-.029-.063,2.618,2.618,0,0,1,.023-1.076.142.142,0,0,1,.138-.109h.393l.055-.128a.934.934,0,0,1,.865-.574h2.372a.938.938,0,0,1,.869.574l.054.127h.394a.142.142,0,0,1,.138.109,2.607,2.607,0,0,1,.023,1.076.14.14,0,0,1-.029.063A3.372,3.372,0,0,1,801.4,89.219Zm-2.39-1.4a3.11,3.11,0,0,0,4.779,0,2.243,2.243,0,0,0,.034-.389,2.355,2.355,0,0,0-.038-.426h-.372a.142.142,0,0,1-.13-.086l-.091-.214a.664.664,0,0,0-.608-.4h-2.372a.652.652,0,0,0-.6.4l-.092.215a.141.141,0,0,1-.13.086h-.372a2.355,2.355,0,0,0-.038.426A2.243,2.243,0,0,0,799.008,87.817Zm4.912.061h0Z" transform="translate(-798.69 -86.017)" fill="#434343" />
          </g>
          <g id="Group_192" data-name="Group 192" transform="translate(7.108 10.945)">
            <path id="Path_251" data-name="Path 251" d="M807.124,92.047v2.488a.73.73,0,0,1-1.459,0V92.047a.73.73,0,1,1,1.459,0Z" transform="translate(-805.523 -91.175)" fill="#324b92" />
            <path id="Path_252" data-name="Path 252" d="M806.036,95.048a.872.872,0,0,1-.871-.871V91.689a.871.871,0,1,1,1.743,0v2.488A.872.872,0,0,1,806.036,95.048Zm0-3.947a.589.589,0,0,0-.588.588v2.488a.588.588,0,1,0,1.176,0V91.689A.589.589,0,0,0,806.036,91.1Z" transform="translate(-805.165 -90.817)" fill="#434343" />
          </g>
          <g id="Group_193" data-name="Group 193" transform="translate(5.273 9.585)">
            <path id="Path_253" data-name="Path 253" d="M804.321,87.786a2.445,2.445,0,0,1-.043.45,2.562,2.562,0,0,1-5.045,0,2.454,2.454,0,0,1,.021-1.017h.487l.091-.214a.8.8,0,0,1,.734-.487h2.373a.8.8,0,0,1,.739.487l.091.214h.487A2.458,2.458,0,0,1,804.321,87.786Z" transform="translate(-799.048 -86.375)" fill="#324b92" />
            <path id="Path_254" data-name="Path 254" d="M801.4,90.135a2.694,2.694,0,0,1-2.662-2.233,2.612,2.612,0,0,1,.023-1.074.142.142,0,0,1,.138-.109h.393l.055-.128a.934.934,0,0,1,.865-.574h2.372a.938.938,0,0,1,.869.574l.054.127h.394a.142.142,0,0,1,.138.109,2.607,2.607,0,0,1,.023,1.076A2.694,2.694,0,0,1,801.4,90.135ZM799.011,87a2.355,2.355,0,0,0-.038.426,2.309,2.309,0,0,0,.041.424,2.42,2.42,0,0,0,4.766,0,2.322,2.322,0,0,0,.041-.426,2.355,2.355,0,0,0-.038-.426h-.372a.142.142,0,0,1-.13-.086l-.091-.214a.664.664,0,0,0-.608-.4h-2.372a.652.652,0,0,0-.6.4l-.092.215a.141.141,0,0,1-.13.086Z" transform="translate(-798.69 -86.017)" fill="#434343" />
          </g>
          <g id="Group_194" data-name="Group 194" transform="translate(6.151 14.367)">
            <path id="Path_255" data-name="Path 255" d="M803.618,104.74a1.839,1.839,0,0,1-1.828-1.7.142.142,0,0,1,.283-.021,1.55,1.55,0,0,0,3.091,0,.142.142,0,0,1,.283.021A1.839,1.839,0,0,1,803.618,104.74Z" transform="translate(-801.79 -102.893)" fill="#434343" />
          </g>
          <g id="Group_195" data-name="Group 195" transform="translate(9.235 7.625)">
            <path id="Path_256" data-name="Path 256" d="M813.556,79.6a.385.385,0,0,1-.385.385" transform="translate(-813.03 -79.46)" fill="#fff" />
            <path id="Path_257" data-name="Path 257" d="M812.813,79.77a.142.142,0,0,1,0-.283.243.243,0,0,0,.243-.243.142.142,0,0,1,.284,0A.527.527,0,0,1,812.813,79.77Z" transform="translate(-812.671 -79.102)" fill="#434343" />
          </g>
          <g id="Group_196" data-name="Group 196" transform="translate(8.109 8.263)">
            <path id="Path_258" data-name="Path 258" d="M809.585,81.851a.385.385,0,0,1-.385.385" transform="translate(-809.058 -81.709)" fill="#fff" />
            <path id="Path_259" data-name="Path 259" d="M808.842,82.019a.142.142,0,0,1,0-.283.243.243,0,0,0,.243-.243.142.142,0,1,1,.283,0A.527.527,0,0,1,808.842,82.019Z" transform="translate(-808.7 -81.351)" fill="#434343" />
          </g>
          <g id="Group_197" data-name="Group 197" transform="translate(5.667 7.625)">
            <path id="Path_260" data-name="Path 260" d="M800.968,79.6a.385.385,0,0,1-.385.385" transform="translate(-800.441 -79.46)" fill="#fff" />
            <path id="Path_261" data-name="Path 261" d="M800.225,79.77a.142.142,0,1,1,0-.283.243.243,0,0,0,.243-.243.142.142,0,1,1,.283,0A.527.527,0,0,1,800.225,79.77Z" transform="translate(-800.083 -79.102)" fill="#434343" />
          </g>
          <g id="Group_198" data-name="Group 198" transform="translate(5.348 8.84)">
            <path id="Path_262" data-name="Path 262" d="M799.841,83.889a.384.384,0,0,1-.385.385" transform="translate(-799.314 -83.747)" fill="#fff" />
            <path id="Path_263" data-name="Path 263" d="M799.1,84.057a.142.142,0,0,1,0-.283.243.243,0,0,0,.243-.243.142.142,0,1,1,.283,0A.527.527,0,0,1,799.1,84.057Z" transform="translate(-798.956 -83.389)" fill="#434343" />
          </g>
          <g id="Group_199" data-name="Group 199" transform="translate(6.915 6.983)">
            <path id="Path_264" data-name="Path 264" d="M805.371,77.335a.385.385,0,0,1-.385.385" transform="translate(-804.844 -77.193)" fill="#fff" />
            <path id="Path_265" data-name="Path 265" d="M804.628,77.5a.142.142,0,1,1,0-.283.243.243,0,0,0,.243-.243.142.142,0,1,1,.283,0A.527.527,0,0,1,804.628,77.5Z" transform="translate(-804.486 -76.835)" fill="#434343" />
          </g>
          <g id="Group_200" data-name="Group 200" transform="translate(6.722 8.455)">
            <path id="Path_266" data-name="Path 266" d="M804.306,82.915a.385.385,0,0,1,.385-.385" transform="translate(-804.164 -82.388)" fill="#fff" />
            <path id="Path_267" data-name="Path 267" d="M803.948,82.7a.142.142,0,0,1-.142-.142.527.527,0,0,1,.527-.527.142.142,0,0,1,0,.283.244.244,0,0,0-.243.243A.141.141,0,0,1,803.948,82.7Z" transform="translate(-803.806 -82.03)" fill="#434343" />
          </g>
          <g id="Group_201" data-name="Group 201" transform="translate(8.375 7.048)">
            <path id="Path_268" data-name="Path 268" d="M810.136,77.95a.385.385,0,0,1,.385-.385" transform="translate(-809.994 -77.423)" fill="#fff" />
            <path id="Path_269" data-name="Path 269" d="M809.778,77.732a.141.141,0,0,1-.142-.142.527.527,0,0,1,.527-.527.142.142,0,0,1,0,.283.244.244,0,0,0-.243.243A.142.142,0,0,1,809.778,77.732Z" transform="translate(-809.636 -77.064)" fill="#434343" />
          </g>
          <g id="Group_202" data-name="Group 202" transform="translate(9.943 8.84)">
            <path id="Path_270" data-name="Path 270" d="M815.671,84.274a.385.385,0,0,1,.385-.385" transform="translate(-815.53 -83.747)" fill="#fff" />
            <path id="Path_271" data-name="Path 271" d="M815.314,84.057a.142.142,0,0,1-.142-.142.527.527,0,0,1,.527-.527.142.142,0,1,1,0,.283.243.243,0,0,0-.243.243A.142.142,0,0,1,815.314,84.057Z" transform="translate(-815.172 -83.389)" fill="#434343" />
          </g>
          <g id="Group_206" data-name="Group 206" transform="translate(1.778)">
            <g id="Group_203" data-name="Group 203" transform="translate(3.064)">
              <circle id="Ellipse_15" data-name="Ellipse 15" cx="1.143" cy="1.143" r="1.143" transform="translate(0 1.973) rotate(-59.709)" fill="#fff" />
              <path id="Path_272" data-name="Path 272" d="M799.435,55.747a1.285,1.285,0,0,1-1.27-1.113h0a1.284,1.284,0,1,1,1.444,1.1A1.338,1.338,0,0,1,799.435,55.747Zm-.99-1.151a1,1,0,1,0,.858-1.126,1,1,0,0,0-.858,1.126Z" transform="translate(-797.875 -52.899)" fill="#434343" />
            </g>
            <g id="Group_204" data-name="Group 204" transform="translate(0 0.816)">
              <rect id="Rectangle_63" data-name="Rectangle 63" width="9.051" height="6.602" transform="translate(0.142 1.352) rotate(-7.683)" fill="#fff" />
              <path id="Path_273" data-name="Path 273" d="M787.383,63.111a.142.142,0,0,1-.14-.123l-.883-6.543a.141.141,0,0,1,.028-.1.143.143,0,0,1,.094-.054l8.97-1.21a.142.142,0,0,1,.159.122l.883,6.542a.142.142,0,0,1-.122.16l-8.97,1.21Zm-.723-6.563.845,6.262,8.689-1.172-.845-6.262Z" transform="translate(-786.359 -55.075)" fill="#434343" />
            </g>
            <g id="Group_205" data-name="Group 205" transform="translate(2.567 1.163)">
              <rect id="Rectangle_64" data-name="Rectangle 64" width="3.87" height="1.562" transform="translate(0.142 0.659) rotate(-7.683)" fill="#fff" />
              <path id="Path_274" data-name="Path 274" d="M795.769,58.646a.142.142,0,0,1-.14-.123l-.209-1.548a.139.139,0,0,1,.027-.1.143.143,0,0,1,.094-.055l3.836-.517a.145.145,0,0,1,.1.028.143.143,0,0,1,.054.094l.209,1.548a.141.141,0,0,1-.121.159l-3.835.517Zm-.049-1.568.171,1.267,3.554-.479-.171-1.268Z" transform="translate(-795.419 -56.297)" fill="#434343" />
            </g>
          </g>
          <g id="Group_207" data-name="Group 207" transform="translate(5.004 21.088)">
            <path id="Path_275" data-name="Path 275" d="M804.695,127.11v1.379h-6.452l.018-.167.053-.752c.012-.155.024-.3.03-.459Z" transform="translate(-798.102 -126.968)" fill="#324b92" />
            <path id="Path_276" data-name="Path 276" d="M804.337,128.272h-6.452a.141.141,0,0,1-.141-.157l.018-.167.056-.778c.011-.143.022-.281.027-.424a.142.142,0,0,1,.142-.136h6.351a.142.142,0,0,1,.142.142v1.379A.142.142,0,0,1,804.337,128.272Zm-6.294-.283h6.153v-1.1h-6.074c-.006.1-.013.2-.021.3Z" transform="translate(-797.743 -126.61)" fill="#434343" />
          </g>
          <g id="Group_208" data-name="Group 208" transform="translate(9.852 15.931)">
            <path id="Path_277" data-name="Path 277" d="M816.951,108.912v8.548a.86.86,0,0,1-.8.909h0a.86.86,0,0,1-.8-.909v-6.678" transform="translate(-815.207 -108.77)" fill="#e0e0df" />
            <path id="Path_278" data-name="Path 278" d="M815.792,118.152a1,1,0,0,1-.943-1.051v-6.678a.142.142,0,0,1,.283,0V117.1a.667.667,0,1,0,1.318,0v-8.548a.142.142,0,0,1,.284,0V117.1A1,1,0,0,1,815.792,118.152Z" transform="translate(-814.849 -108.412)" fill="#434343" />
          </g>
        </g>
        <g id="Group_232" data-name="Group 232" transform="translate(0 4.868)">
          <g id="Group_214" data-name="Group 214" transform="translate(0.564 24.961)">
            <g id="Group_210" data-name="Group 210" transform="translate(3.126 2.507)">
              <path id="Rectangle_65" data-name="Rectangle 65" d="M.724,0H1.738A.863.863,0,0,1,2.6.863v0a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.724A.724.724,0,0,1,.724,0Z" transform="translate(0.142 0.142)" fill="#fff" />
              <path id="Path_279" data-name="Path 279" d="M762.472,167.448h-2.6a.141.141,0,0,1-.142-.142v-.252a.754.754,0,0,1,.753-.754h1.26a.872.872,0,0,1,.871.871v.134A.142.142,0,0,1,762.472,167.448Zm-2.46-.283h2.318a.589.589,0,0,0-.588-.58h-1.26a.47.47,0,0,0-.47.47Z" transform="translate(-759.729 -166.301)" fill="#434343" />
            </g>
            <g id="Group_211" data-name="Group 211" transform="translate(3.584)">
              <path id="Rectangle_66" data-name="Rectangle 66" d="M0,0H.843a0,0,0,0,1,0,0V2.435a.422.422,0,0,1-.422.422h0A.422.422,0,0,1,0,2.435V0A0,0,0,0,1,0,0Z" transform="translate(0.141 0.142)" fill="#324b92" />
              <path id="Path_280" data-name="Path 280" d="M761.972,160.6h-.131a.5.5,0,0,1-.5-.5v-2.5a.141.141,0,0,1,.142-.142h.843a.141.141,0,0,1,.142.142v2.5A.5.5,0,0,1,761.972,160.6Zm-.345-2.857V160.1a.215.215,0,0,0,.214.215h.131a.215.215,0,0,0,.215-.215v-2.358Z" transform="translate(-761.344 -157.456)" fill="#434343" />
            </g>
            <g id="Group_212" data-name="Group 212" transform="translate(0 2.507)">
              <path id="Rectangle_67" data-name="Rectangle 67" d="M0,0H2.6a0,0,0,0,1,0,0V0a.863.863,0,0,1-.863.863H.724A.724.724,0,0,1,0,.14V0A0,0,0,0,1,0,0Z" transform="translate(2.743 1.005) rotate(-180)" fill="#fff" />
              <path id="Path_281" data-name="Path 281" d="M751.44,167.448h-2.6a.142.142,0,0,1-.142-.142v-.134a.873.873,0,0,1,.871-.871h1.26a.754.754,0,0,1,.753.754v.252A.142.142,0,0,1,751.44,167.448Zm-2.46-.283H751.3v-.11a.471.471,0,0,0-.47-.47h-1.26A.589.589,0,0,0,748.98,167.164Z" transform="translate(-748.697 -166.301)" fill="#434343" />
            </g>
            <g id="Group_213" data-name="Group 213" transform="translate(1.301)">
              <path id="Rectangle_68" data-name="Rectangle 68" d="M.422,0h0A.422.422,0,0,1,.843.422V2.857a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.422A.422.422,0,0,1,.422,0Z" transform="translate(0.985 2.998) rotate(-180)" fill="#324b92" />
              <path id="Path_282" data-name="Path 282" d="M753.916,160.6h-.131a.5.5,0,0,1-.5-.5v-2.5a.142.142,0,0,1,.142-.142h.843a.141.141,0,0,1,.142.142v2.5A.5.5,0,0,1,753.916,160.6Zm-.346-2.857V160.1a.215.215,0,0,0,.215.215h.131a.215.215,0,0,0,.214-.215v-2.358Z" transform="translate(-753.287 -157.456)" fill="#434343" />
            </g>
          </g>
          <g id="Group_215" data-name="Group 215" transform="translate(0.237 13.827)">
            <path id="Rectangle_69" data-name="Rectangle 69" d="M3.191,0h0A3.191,3.191,0,0,1,6.381,3.191v3.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0v-3.5A3.191,3.191,0,0,1,3.191,0Z" transform="translate(0.142 0.142)" fill="#fff" />
            <path id="Path_283" data-name="Path 283" d="M754.067,125.141h-6.381a.141.141,0,0,1-.142-.142v-5.62a1.216,1.216,0,0,1,1.215-1.215h4.235a1.216,1.216,0,0,1,1.215,1.215V125A.142.142,0,0,1,754.067,125.141Zm-6.239-.283h6.1V119.38a.933.933,0,0,0-.932-.931h-4.235a.933.933,0,0,0-.932.931Z" transform="translate(-747.544 -118.165)" fill="#434343" />
          </g>
          <g id="Group_216" data-name="Group 216" transform="translate(1.247 20.52)">
            <rect id="Rectangle_70" data-name="Rectangle 70" width="4.361" height="6.006" transform="translate(0.142 0.142)" fill="#e0e0df" />
            <path id="Path_284" data-name="Path 284" d="M755.612,148.071h-4.361a.142.142,0,0,1-.142-.142v-6.006a.142.142,0,0,1,.142-.142h4.361a.141.141,0,0,1,.142.142v6.006A.142.142,0,0,1,755.612,148.071Zm-4.219-.283h4.078v-5.722h-4.078Z" transform="translate(-751.109 -141.782)" fill="#434343" />
          </g>
          <g id="Group_219" data-name="Group 219" transform="translate(0.237 9.768)">
            <g id="Group_217" data-name="Group 217">
              <circle id="Ellipse_16" data-name="Ellipse 16" cx="0.505" cy="0.505" r="0.505" transform="translate(0.142 0.142)" fill="#324b92" />
              <path id="Path_285" data-name="Path 285" d="M748.191,105.137a.647.647,0,1,1,.647-.647A.647.647,0,0,1,748.191,105.137Zm0-1.01a.363.363,0,1,0,.364.363A.364.364,0,0,0,748.191,104.126Z" transform="translate(-747.544 -103.843)" fill="#434343" />
            </g>
            <g id="Group_218" data-name="Group 218" transform="translate(5.371)">
              <circle id="Ellipse_17" data-name="Ellipse 17" cx="0.505" cy="0.505" r="0.505" transform="translate(0.142 0.142)" fill="#324b92" />
              <path id="Path_286" data-name="Path 286" d="M767.144,105.137a.647.647,0,1,1,.646-.647A.647.647,0,0,1,767.144,105.137Zm0-1.01a.363.363,0,1,0,.363.363A.364.364,0,0,0,767.144,104.126Z" transform="translate(-766.497 -103.843)" fill="#434343" />
            </g>
          </g>
          <g id="Group_220" data-name="Group 220" transform="translate(2.715 12.591)">
            <path id="Path_287" data-name="Path 287" d="M756.788,114.3v.816a.713.713,0,0,0,1.427,0V114.3Z" transform="translate(-756.646 -114.162)" fill="#324b92" />
            <path id="Path_288" data-name="Path 288" d="M757.143,115.617a.856.856,0,0,1-.855-.855v-.816a.142.142,0,0,1,.142-.142h1.427a.142.142,0,0,1,.142.142v.816A.856.856,0,0,1,757.143,115.617Zm-.572-1.529v.674a.572.572,0,0,0,1.143,0v-.674Z" transform="translate(-756.288 -113.804)" fill="#434343" />
          </g>
          <g id="Group_221" data-name="Group 221" transform="translate(1.018 7.778)">
            <path id="Path_289" data-name="Path 289" d="M755.616,99.162a3.7,3.7,0,0,0-4.818.006,2.5,2.5,0,0,1,1.186-1.525,2.455,2.455,0,0,1,1.225-.321,2.492,2.492,0,0,1,2.271,1.46A2.407,2.407,0,0,1,755.616,99.162Z" transform="translate(-750.656 -97.179)" fill="#fff" />
            <path id="Path_290" data-name="Path 290" d="M750.44,98.951a.141.141,0,0,1-.137-.178,2.651,2.651,0,0,1,1.253-1.612,2.609,2.609,0,0,1,.538-.23,2.642,2.642,0,0,1,3.155,1.434,2.579,2.579,0,0,1,.145.4.142.142,0,0,1-.061.157.143.143,0,0,1-.168-.012,3.555,3.555,0,0,0-4.633.005A.141.141,0,0,1,750.44,98.951Zm2.41-1.846a2.364,2.364,0,0,0-.674.1,2.313,2.313,0,0,0-.48.205,2.374,2.374,0,0,0-.948.992,3.842,3.842,0,0,1,4.2,0A2.358,2.358,0,0,0,752.85,97.1Z" transform="translate(-750.298 -96.821)" fill="#434343" />
          </g>
          <g id="Group_222" data-name="Group 222" transform="translate(0.932 8.729)">
            <path id="Path_291" data-name="Path 291" d="M755.488,102.219a2.5,2.5,0,1,1-4.992,0c0-.071,0-.141.009-.211a2.5,2.5,0,0,1,.077-.438,3.7,3.7,0,0,1,4.818-.006A2.474,2.474,0,0,1,755.488,102.219Z" transform="translate(-750.354 -100.533)" fill="#324b92" />
            <path id="Path_292" data-name="Path 292" d="M752.634,104.5A2.641,2.641,0,0,1,750,101.861c0-.075,0-.149.009-.223a2.693,2.693,0,0,1,.081-.463.139.139,0,0,1,.044-.07,3.838,3.838,0,0,1,5-.006.14.14,0,0,1,.044.07,2.608,2.608,0,0,1,.093.692A2.641,2.641,0,0,1,752.634,104.5Zm-2.285-3.208a2.409,2.409,0,0,0-.061.372c-.005.065-.008.131-.008.2a2.355,2.355,0,0,0,4.709,0,2.316,2.316,0,0,0-.073-.575,3.555,3.555,0,0,0-4.567.005Z" transform="translate(-749.996 -100.175)" fill="#434343" />
          </g>
          <g id="Group_223" data-name="Group 223" transform="translate(1.247 26.078)">
            <rect id="Rectangle_71" data-name="Rectangle 71" width="4.361" height="0.895" transform="translate(0.142 0.142)" fill="#fff" />
            <path id="Path_293" data-name="Path 293" d="M755.612,162.574h-4.361a.142.142,0,0,1-.142-.142v-.9a.142.142,0,0,1,.142-.142h4.361a.141.141,0,0,1,.142.142v.9A.141.141,0,0,1,755.612,162.574Zm-4.219-.283h4.078v-.612h-4.078Z" transform="translate(-751.109 -161.395)" fill="#434343" />
          </g>
          <g id="Group_224" data-name="Group 224" transform="translate(3.428 22.451)">
            <line id="Line_12" data-name="Line 12" y1="4.333" transform="translate(0.142 0.142)" fill="#fff" />
            <path id="Path_294" data-name="Path 294" d="M758.945,153.215a.141.141,0,0,1-.142-.142v-4.333a.142.142,0,1,1,.283,0v4.333A.141.141,0,0,1,758.945,153.215Z" transform="translate(-758.803 -148.599)" fill="#434343" />
          </g>
          <g id="Group_225" data-name="Group 225" transform="translate(1.247 20.52)">
            <rect id="Rectangle_72" data-name="Rectangle 72" width="4.676" height="0.485" transform="translate(0.142 0.142)" fill="#fff" />
            <path id="Path_295" data-name="Path 295" d="M755.927,142.55h-4.676a.142.142,0,0,1-.142-.142v-.485a.142.142,0,0,1,.142-.142h4.676a.141.141,0,0,1,.142.142v.485A.141.141,0,0,1,755.927,142.55Zm-4.534-.283h4.393v-.2h-4.393Z" transform="translate(-751.109 -141.782)" fill="#434343" />
          </g>
          <g id="Group_226" data-name="Group 226" transform="translate(0 1.064)">
            <rect id="Rectangle_73" data-name="Rectangle 73" width="6.856" height="7.096" rx="3.428" transform="translate(0.142 0.142)" fill="#e0e0df" />
            <path id="Path_296" data-name="Path 296" d="M751.679,80.507h-2.8a2.169,2.169,0,0,1-2.167-2.167V75.3a2.17,2.17,0,0,1,2.167-2.167h2.8a2.17,2.17,0,0,1,2.167,2.167V78.34A2.169,2.169,0,0,1,751.679,80.507Zm-2.8-7.1A1.886,1.886,0,0,0,746.99,75.3V78.34a1.886,1.886,0,0,0,1.884,1.884h2.8a1.886,1.886,0,0,0,1.884-1.884V75.3a1.886,1.886,0,0,0-1.884-1.884Z" transform="translate(-746.707 -73.128)" fill="#434343" />
          </g>
          <g id="Group_227" data-name="Group 227" transform="translate(1.865)">
            <rect id="Rectangle_74" data-name="Rectangle 74" width="3.126" height="1.096" transform="translate(0.142 0.142)" fill="#e0e0df" />
            <path id="Path_297" data-name="Path 297" d="M756.555,70.752h-3.126a.142.142,0,0,1-.142-.142v-1.1a.142.142,0,0,1,.142-.142h3.126a.142.142,0,0,1,.142.142v1.1A.142.142,0,0,1,756.555,70.752Zm-2.985-.283h2.843v-.812H753.57Z" transform="translate(-753.287 -69.373)" fill="#434343" />
          </g>
          <g id="Group_228" data-name="Group 228" transform="translate(5.074 5.57)">
            <path id="Path_298" data-name="Path 298" d="M765.113,90.984a1.572,1.572,0,0,0,.872-1.407v-.049" transform="translate(-764.971 -89.385)" fill="#fff" />
            <path id="Path_299" data-name="Path 299" d="M764.754,90.767a.142.142,0,0,1-.063-.269,1.421,1.421,0,0,0,.794-1.28v-.049a.142.142,0,0,1,.283,0v.049a1.7,1.7,0,0,1-.951,1.534A.141.141,0,0,1,764.754,90.767Z" transform="translate(-764.612 -89.027)" fill="#434343" />
          </g>
          <g id="Group_229" data-name="Group 229" transform="translate(1.043 3.363)">
            <line id="Line_13" data-name="Line 13" y2="1.763" transform="translate(0.142 0.142)" fill="#fff" />
            <path id="Path_300" data-name="Path 300" d="M750.529,83.285a.142.142,0,0,1-.142-.142V81.381a.142.142,0,0,1,.283,0v1.763A.141.141,0,0,1,750.529,83.285Z" transform="translate(-750.387 -81.239)" fill="#434343" />
          </g>
          <g id="Group_230" data-name="Group 230" transform="translate(0.237 15.75)">
            <path id="Path_301" data-name="Path 301" d="M748.044,125.451v5.285a.733.733,0,0,0,.734.733h0a.733.733,0,0,0,.733-.733v-5.242" transform="translate(-747.902 -125.309)" fill="#fff" />
            <path id="Path_302" data-name="Path 302" d="M748.419,131.253a.876.876,0,0,1-.875-.875v-5.285a.142.142,0,1,1,.283,0v5.285a.592.592,0,0,0,1.184,0v-5.242a.142.142,0,0,1,.283,0v5.242A.876.876,0,0,1,748.419,131.253Z" transform="translate(-747.544 -124.951)" fill="#434343" />
          </g>
          <g id="Group_231" data-name="Group 231" transform="translate(5.151 15.75)">
            <path id="Path_303" data-name="Path 303" d="M765.385,125.451v5.285a.733.733,0,0,0,.733.733h0a.733.733,0,0,0,.734-.733v-5.242" transform="translate(-765.243 -125.309)" fill="#fff" />
            <path id="Path_304" data-name="Path 304" d="M765.76,131.253a.876.876,0,0,1-.875-.875v-5.285a.142.142,0,0,1,.283,0v5.285a.592.592,0,1,0,1.183,0v-5.242a.142.142,0,0,1,.283,0v5.242A.876.876,0,0,1,765.76,131.253Z" transform="translate(-764.885 -124.951)" fill="#434343" />
          </g>
        </g>
      </g>
      <g id="Group_237" data-name="Group 237" transform="translate(39.64 12.5)">
        <g id="Group_234" data-name="Group 234" transform="translate(1.695)">
          <path id="Path_305" data-name="Path 305" d="M852.354,106.625a.425.425,0,0,1-.425-.425v-9.47a.425.425,0,1,1,.85,0v9.47A.425.425,0,0,1,852.354,106.625Z" transform="translate(-851.929 -96.304)" fill="#324b92" />
        </g>
        <g id="Group_236" data-name="Group 236" transform="translate(0 9.275)">
          <g id="Group_235" data-name="Group 235">
            <path id="Path_306" data-name="Path 306" d="M845.948,129.035l2.12,3.671,2.12-3.671Z" transform="translate(-845.948 -129.035)" fill="#324b92" />
          </g>
        </g>
      </g>
    </g>
    </svg>
  )
}

const IDPsReturnees = (props: IconProps) => {
  const { height, width, x, y } = props;

  return (
    <svg id="Group_309" data-name="Group 309" xmlns="http://www.w3.org/2000/svg" x={x} y={y} width={width ? width : 45} height={height ? height : 33} viewBox="0 0 49.246 33">
      <g id="Group_107" data-name="Group 107">
        <g id="Group_40" data-name="Group 40" transform="translate(39.941 13.881)">
          <g id="Group_37" data-name="Group 37">
            <path id="Path_84" data-name="Path 84" d="M185.3,113.551h-.652a.419.419,0,1,1,0-.838h.652a4.99,4.99,0,1,0,0-9.981H182.24a.419.419,0,1,1,0-.838H185.3a5.828,5.828,0,1,1,0,11.657Z" transform="translate(-181.821 -101.894)" fill="#324b92" />
          </g>
          <g id="Group_39" data-name="Group 39" transform="translate(0.419 9.567)">
            <g id="Group_38" data-name="Group 38">
              <path id="Path_85" data-name="Path 85" d="M186.215,139.489l-2.894-1.671,2.894-1.671Z" transform="translate(-183.321 -136.146)" fill="#324b92" />
            </g>
          </g>
        </g>
        <g id="Group_41" data-name="Group 41" transform="translate(0 32.721)">
          <line id="Line_1" data-name="Line 1" x1="44.254" transform="translate(0.14 0.14)" fill="#e4effa" />
          <path id="Path_86" data-name="Path 86" d="M83.209,169.627H38.955a.14.14,0,1,1,0-.279H83.209a.14.14,0,0,1,0,.279Z" transform="translate(-38.815 -169.348)" fill="#434343" />
        </g>
        <g id="Group_106" data-name="Group 106" transform="translate(11.35)">
          <g id="Group_76" data-name="Group 76" transform="translate(9.322)">
            <g id="Group_46" data-name="Group 46" transform="translate(3.283 27.427)">
              <g id="Group_42" data-name="Group 42" transform="translate(4.848 3.955)">
                <path id="Rectangle_17" data-name="Rectangle 17" d="M.713,0H2.695A1.339,1.339,0,0,1,4.034,1.339v0a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.713A.713.713,0,0,1,.713,0Z" transform="translate(0.14 0.14)" fill="#fff" />
                <path id="Path_87" data-name="Path 87" d="M146.118,166.172h-4.034a.14.14,0,0,1-.14-.14V165.3a.743.743,0,0,1,.742-.743h2.3a1.273,1.273,0,0,1,1.271,1.271v.207A.14.14,0,0,1,146.118,166.172Zm-3.894-.279h3.755v-.068a.993.993,0,0,0-.992-.992h-2.3a.464.464,0,0,0-.463.463Z" transform="translate(-141.944 -164.554)" fill="#434343" />
              </g>
              <g id="Group_43" data-name="Group 43" transform="translate(5.557)">
                <path id="Rectangle_18" data-name="Rectangle 18" d="M0,0H1.308a0,0,0,0,1,0,0V3.776a.654.654,0,0,1-.654.654h0A.654.654,0,0,1,0,3.776V0A0,0,0,0,1,0,0Z" transform="translate(0.14 0.14)" fill="#324b92" />
                <path id="Path_88" data-name="Path 88" d="M145.378,155.1h-.2a.693.693,0,0,1-.692-.692v-3.877a.14.14,0,0,1,.14-.14h1.308a.14.14,0,0,1,.14.14v3.877A.693.693,0,0,1,145.378,155.1Zm-.615-4.429v3.737a.413.413,0,0,0,.413.413h.2a.413.413,0,0,0,.413-.413v-3.737Z" transform="translate(-144.483 -150.395)" fill="#434343" />
              </g>
              <g id="Group_44" data-name="Group 44" transform="translate(0 3.955)">
                <path id="Rectangle_19" data-name="Rectangle 19" d="M0,0H4.034a0,0,0,0,1,0,0V0A1.339,1.339,0,0,1,2.695,1.339H.713A.713.713,0,0,1,0,.626V0A0,0,0,0,1,0,0Z" transform="translate(4.173 1.479) rotate(-180)" fill="#fff" />
                <path id="Path_89" data-name="Path 89" d="M128.76,166.172h-4.034a.139.139,0,0,1-.14-.14v-.207a1.273,1.273,0,0,1,1.271-1.271h2.3a.743.743,0,0,1,.742.743v.736A.14.14,0,0,1,128.76,166.172Zm-3.894-.279h3.754v-.6a.464.464,0,0,0-.463-.463h-2.3a.993.993,0,0,0-.992.992Z" transform="translate(-124.587 -164.554)" fill="#434343" />
              </g>
              <g id="Group_45" data-name="Group 45" transform="translate(2.017)">
                <path id="Rectangle_20" data-name="Rectangle 20" d="M.654,0h0a.654.654,0,0,1,.654.654V4.43a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.654A.654.654,0,0,1,.654,0Z" transform="translate(1.447 4.569) rotate(-180)" fill="#324b92" />
                <path id="Path_90" data-name="Path 90" d="M132.7,155.1h-.2a.693.693,0,0,1-.692-.692v-3.877a.139.139,0,0,1,.14-.14h1.308a.14.14,0,0,1,.14.14v3.877A.693.693,0,0,1,132.7,155.1Zm-.616-4.429v3.737a.413.413,0,0,0,.413.413h.2a.413.413,0,0,0,.413-.413v-3.737Z" transform="translate(-131.808 -150.395)" fill="#434343" />
              </g>
            </g>
            <g id="Group_48" data-name="Group 48" transform="translate(0 4.696)">
              <g id="Group_47" data-name="Group 47">
                <path id="Path_91" data-name="Path 91" d="M124.622,80.508v14.98h-7.129l.771-8.533.018-.165.053-.741c.012-.153.023-.3.029-.453v-.106a7.451,7.451,0,0,0-.059-.888l-.459-4.176c-.077-.041-.159-.082-.253-.123-1.159-.565-3.317-1.612-4.035-3.941-.547-1.782-.1-3.941,1.323-6.412a.883.883,0,0,1,1.529.883c-1.171,2.029-1.565,3.717-1.165,5.012.488,1.594,2.135,2.394,3.118,2.87.088.041.165.082.241.118a.568.568,0,0,0,.147.076.018.018,0,0,1,.012.006,2.465,2.465,0,0,0,.559.059h3.759A1.538,1.538,0,0,1,124.622,80.508Z" transform="translate(-113.191 -69.369)" fill="#e0e0df" />
                <path id="Path_92" data-name="Path 92" d="M124.261,95.268h-7.13a.139.139,0,0,1-.139-.152l.788-8.7.055-.768c.011-.14.021-.276.027-.417v-.1a7.142,7.142,0,0,0-.058-.871l-.451-4.1c-.055-.028-.114-.056-.178-.085-1.19-.58-3.379-1.646-4.113-4.028-.559-1.82-.109-4.015,1.336-6.522a1.027,1.027,0,0,1,1.4-.375,1.018,1.018,0,0,1,.374,1.4c-1.152,2-1.54,3.646-1.152,4.9.471,1.538,2.082,2.319,3.045,2.786.044.02.087.042.128.062l.111.054a.145.145,0,0,1,.03.019.538.538,0,0,0,.11.054h0l.008,0a2.382,2.382,0,0,0,.511.051h3.759a1.68,1.68,0,0,1,1.681,1.675v14.98A.14.14,0,0,1,124.261,95.268Zm-6.977-.279h6.837V80.148a1.4,1.4,0,0,0-1.4-1.4h-3.759a2.684,2.684,0,0,1-.595-.064.127.127,0,0,1-.031-.012.776.776,0,0,1-.166-.085l-.1-.051-.123-.06c-1.006-.488-2.686-1.3-3.192-2.956-.412-1.331-.016-3.055,1.178-5.122a.739.739,0,0,0-.272-1.015.747.747,0,0,0-1.016.272c-1.4,2.437-1.845,4.558-1.311,6.3.7,2.266,2.816,3.3,3.954,3.852.1.045.187.087.267.13a.14.14,0,0,1,.073.108l.459,4.177a7.473,7.473,0,0,1,.059.9v.106c-.006.15-.016.289-.027.433l-.073.94Z" transform="translate(-112.831 -69.009)" fill="#434343" />
              </g>
            </g>
            <g id="Group_51" data-name="Group 51" transform="translate(4.328 10.271)">
              <g id="Group_49" data-name="Group 49">
                <circle id="Ellipse_1" data-name="Ellipse 1" cx="0.566" cy="0.566" r="0.566" transform="translate(0.14 0.14)" fill="#324b92" />
                <path id="Path_93" data-name="Path 93" d="M129.032,90.381a.706.706,0,1,1,.706-.706A.707.707,0,0,1,129.032,90.381Zm0-1.133a.427.427,0,1,0,.427.427A.427.427,0,0,0,129.032,89.248Z" transform="translate(-128.326 -88.969)" fill="#434343" />
              </g>
              <g id="Group_50" data-name="Group 50" transform="translate(5.662)">
                <circle id="Ellipse_2" data-name="Ellipse 2" cx="0.566" cy="0.566" r="0.566" transform="translate(0.14 0.14)" fill="#324b92" />
                <path id="Path_94" data-name="Path 94" d="M149.3,90.381a.706.706,0,1,1,.706-.706A.707.707,0,0,1,149.3,90.381Zm0-1.133a.427.427,0,1,0,.426.427A.427.427,0,0,0,149.3,89.248Z" transform="translate(-148.597 -88.969)" fill="#434343" />
              </g>
            </g>
            <g id="Group_52" data-name="Group 52" transform="translate(4.516 5.905)">
              <path id="Path_95" data-name="Path 95" d="M135.194,79.072a2.431,2.431,0,0,0-.021-1h-.48l-.09-.211a.79.79,0,0,0-.728-.48h-2.338a.783.783,0,0,0-.723.48l-.09.211h-.48a2.431,2.431,0,0,0-.021,1,3.209,3.209,0,1,1,4.972,0Z" transform="translate(-129.359 -73.696)" fill="#fff" />
              <path id="Path_96" data-name="Path 96" d="M129.862,78.852a.14.14,0,0,1-.108-.051A3.3,3.3,0,0,1,129,76.685a3.349,3.349,0,0,1,6.7,0,3.3,3.3,0,0,1-.755,2.115.14.14,0,0,1-.246-.114,2.283,2.283,0,0,0,.04-.418,2.309,2.309,0,0,0-.037-.42h-.367a.139.139,0,0,1-.128-.085l-.09-.211a.654.654,0,0,0-.6-.4h-2.338a.642.642,0,0,0-.594.395l-.09.212a.14.14,0,0,1-.128.085H130a2.305,2.305,0,0,0-.037.42,2.272,2.272,0,0,0,.04.418.139.139,0,0,1-.078.152A.143.143,0,0,1,129.862,78.852Zm4.563-1.282h.388a.139.139,0,0,1,.136.108,2.515,2.515,0,0,1,.066.528,3.027,3.027,0,0,0,.4-1.521,3.07,3.07,0,0,0-6.139,0,3.026,3.026,0,0,0,.4,1.521,2.5,2.5,0,0,1,.066-.528.139.139,0,0,1,.136-.108h.388l.054-.126a.921.921,0,0,1,.852-.565h2.338a.925.925,0,0,1,.857.566Z" transform="translate(-128.999 -73.336)" fill="#434343" />
            </g>
            <g id="Group_53" data-name="Group 53" transform="translate(5.197 9.447)">
              <path id="Path_97" data-name="Path 97" d="M136.994,87.768a2.415,2.415,0,0,1-.042.443,3.2,3.2,0,0,1-4.972,0,2.431,2.431,0,0,1,.021-1h.48l.09-.211a.783.783,0,0,1,.723-.48h2.338a.791.791,0,0,1,.728.48l.09.211h.48A2.41,2.41,0,0,1,136.994,87.768Z" transform="translate(-131.797 -86.377)" fill="#fff" />
              <path id="Path_98" data-name="Path 98" d="M134.105,89.173a3.323,3.323,0,0,1-2.595-1.234.136.136,0,0,1-.029-.062,2.558,2.558,0,0,1-.045-.469,2.524,2.524,0,0,1,.067-.592.139.139,0,0,1,.136-.108h.388l.054-.126a.921.921,0,0,1,.852-.565h2.338a.925.925,0,0,1,.857.566l.054.125h.388a.139.139,0,0,1,.136.108,2.539,2.539,0,0,1,.067.592,2.587,2.587,0,0,1-.044.469.14.14,0,0,1-.029.063A3.324,3.324,0,0,1,134.105,89.173Zm-2.355-1.383a3.065,3.065,0,0,0,4.71,0,2.259,2.259,0,0,0,.034-.383,2.306,2.306,0,0,0-.037-.42h-.367a.139.139,0,0,1-.128-.085l-.09-.211a.654.654,0,0,0-.6-.4h-2.338a.642.642,0,0,0-.594.395l-.09.212a.14.14,0,0,1-.128.085h-.367a2.308,2.308,0,0,0-.037.42A2.217,2.217,0,0,0,131.75,87.791Zm4.841.061h0Z" transform="translate(-131.437 -86.017)" fill="#434343" />
            </g>
            <g id="Group_54" data-name="Group 54" transform="translate(7.005 10.787)">
              <path id="Path_99" data-name="Path 99" d="M139.85,92.036v2.452a.719.719,0,1,1-1.438,0V92.036a.719.719,0,1,1,1.438,0Z" transform="translate(-138.272 -91.177)" fill="#324b92" />
              <path id="Path_100" data-name="Path 100" d="M138.771,94.987a.86.86,0,0,1-.859-.859V91.676a.859.859,0,1,1,1.717,0v2.452A.86.86,0,0,1,138.771,94.987Zm0-3.89a.58.58,0,0,0-.579.58v2.452a.579.579,0,1,0,1.159,0V91.676A.58.58,0,0,0,138.771,91.1Z" transform="translate(-137.912 -90.817)" fill="#434343" />
            </g>
            <g id="Group_55" data-name="Group 55" transform="translate(5.197 9.447)">
              <path id="Path_101" data-name="Path 101" d="M136.994,87.768a2.415,2.415,0,0,1-.042.443,2.525,2.525,0,0,1-4.972,0,2.431,2.431,0,0,1,.021-1h.48l.09-.211a.783.783,0,0,1,.723-.48h2.338a.791.791,0,0,1,.728.48l.09.211h.48A2.41,2.41,0,0,1,136.994,87.768Z" transform="translate(-131.797 -86.377)" fill="#324b92" />
              <path id="Path_102" data-name="Path 102" d="M134.105,90.075a2.655,2.655,0,0,1-2.624-2.2,2.551,2.551,0,0,1-.044-.467,2.524,2.524,0,0,1,.067-.592.139.139,0,0,1,.136-.108h.388l.054-.126a.921.921,0,0,1,.852-.565h2.338a.925.925,0,0,1,.857.566l.054.125h.388a.139.139,0,0,1,.136.108,2.539,2.539,0,0,1,.067.592,2.587,2.587,0,0,1-.044.469A2.655,2.655,0,0,1,134.105,90.075Zm-2.352-3.088a2.308,2.308,0,0,0-.037.42,2.271,2.271,0,0,0,.04.418,2.385,2.385,0,0,0,4.7,0,2.3,2.3,0,0,0,0-.839h-.367a.139.139,0,0,1-.128-.085l-.09-.211a.654.654,0,0,0-.6-.4h-2.338a.642.642,0,0,0-.594.395l-.09.212a.14.14,0,0,1-.128.085Z" transform="translate(-131.437 -86.017)" fill="#434343" />
            </g>
            <g id="Group_60" data-name="Group 60" transform="translate(7.005 24.373)">
              <g id="Group_56" data-name="Group 56" transform="translate(2.418 0)">
                <circle id="Ellipse_3" data-name="Ellipse 3" cx="0.897" cy="0.897" r="0.897" transform="matrix(0.754, -0.657, 0.657, 0.754, 0, 1.179)" fill="#e0e0df" />
                <path id="Path_103" data-name="Path 103" d="M148.425,142.355a1.037,1.037,0,0,1-1.032-.961h0a1.037,1.037,0,1,1,1.111.958C148.477,142.354,148.451,142.355,148.425,142.355Zm0-1.8-.057,0a.757.757,0,0,0-.7.811h0a.758.758,0,1,0,.757-.814Z" transform="translate(-147.161 -140.051)" fill="#434343" />
              </g>
              <g id="Group_57" data-name="Group 57" transform="translate(0 0.865)">
                <rect id="Rectangle_21" data-name="Rectangle 21" width="7.109" height="5.185" transform="translate(0.14 0.663) rotate(-4.223)" fill="#e0e0df" />
                <path id="Path_104" data-name="Path 104" d="M138.433,148.53a.14.14,0,0,1-.139-.13l-.382-5.171a.14.14,0,0,1,.129-.149l7.089-.523a.14.14,0,0,1,.15.129l.382,5.171a.14.14,0,0,1-.129.149l-7.089.523Zm-.232-5.182.361,4.892,6.811-.5-.361-4.892Z" transform="translate(-137.912 -142.557)" fill="#434343" />
              </g>
              <g id="Group_58" data-name="Group 58" transform="translate(2.029 1.015)">
                <rect id="Rectangle_22" data-name="Rectangle 22" width="3.039" height="1.227" transform="translate(0.14 0.363) rotate(-4.223)" fill="#e0e0df" />
                <path id="Path_105" data-name="Path 105" d="M145.407,144.82a.14.14,0,0,1-.139-.129l-.09-1.224a.141.141,0,0,1,.033-.1.14.14,0,0,1,.1-.048l3.031-.224a.14.14,0,0,1,.15.129l.09,1.224a.14.14,0,0,1-.129.149l-3.031.224Zm.059-1.234.07.945,2.752-.2-.07-.945Z" transform="translate(-145.177 -143.093)" fill="#434343" />
              </g>
              <g id="Group_59" data-name="Group 59" transform="translate(0.305 4.994)">
                <rect id="Rectangle_23" data-name="Rectangle 23" width="7.109" height="1.045" transform="translate(0.14 0.663) rotate(-4.223)" fill="#fff" />
                <path id="Path_106" data-name="Path 106" d="M139.219,159.185a.14.14,0,0,1-.139-.129L139,158.013a.14.14,0,0,1,.129-.149l7.089-.524a.141.141,0,0,1,.15.129l.077,1.042a.14.14,0,0,1-.129.149l-7.09.523Zm.073-1.053.057.763,6.811-.5-.057-.764Z" transform="translate(-139.003 -157.34)" fill="#434343" />
              </g>
            </g>
            <g id="Group_61" data-name="Group 61" transform="translate(6.062 14.16)">
              <path id="Path_107" data-name="Path 107" d="M136.339,104.714a1.812,1.812,0,0,1-1.8-1.671.14.14,0,0,1,.279-.02,1.528,1.528,0,0,0,3.047,0,.14.14,0,0,1,.279.02A1.813,1.813,0,0,1,136.339,104.714Z" transform="translate(-134.537 -102.893)" fill="#434343" />
            </g>
            <g id="Group_62" data-name="Group 62" transform="translate(9.102 7.515)">
              <path id="Path_108" data-name="Path 108" d="M146.3,79.6a.379.379,0,0,1-.379.38" transform="translate(-145.778 -79.462)" fill="#fff" />
              <path id="Path_109" data-name="Path 109" d="M145.558,79.761a.14.14,0,0,1,0-.279.24.24,0,0,0,.24-.24.14.14,0,0,1,.279,0A.52.52,0,0,1,145.558,79.761Z" transform="translate(-145.418 -79.102)" fill="#434343" />
            </g>
            <g id="Group_63" data-name="Group 63" transform="translate(7.992 8.143)">
              <path id="Path_110" data-name="Path 110" d="M142.326,81.851a.379.379,0,0,1-.379.38" transform="translate(-141.807 -81.711)" fill="#fff" />
              <path id="Path_111" data-name="Path 111" d="M141.586,82.01a.14.14,0,0,1,0-.279.24.24,0,0,0,.24-.24.14.14,0,0,1,.279,0A.519.519,0,0,1,141.586,82.01Z" transform="translate(-141.446 -81.351)" fill="#434343" />
            </g>
            <g id="Group_64" data-name="Group 64" transform="translate(5.586 7.515)">
              <path id="Path_112" data-name="Path 112" d="M133.709,79.6a.379.379,0,0,1-.379.38" transform="translate(-133.19 -79.462)" fill="#fff" />
              <path id="Path_113" data-name="Path 113" d="M132.97,79.761a.14.14,0,1,1,0-.279.24.24,0,0,0,.24-.24.14.14,0,0,1,.279,0A.52.52,0,0,1,132.97,79.761Z" transform="translate(-132.83 -79.102)" fill="#434343" />
            </g>
            <g id="Group_65" data-name="Group 65" transform="translate(5.271 8.713)">
              <path id="Path_114" data-name="Path 114" d="M132.582,83.889a.379.379,0,0,1-.379.379" transform="translate(-132.063 -83.749)" fill="#fff" />
              <path id="Path_115" data-name="Path 115" d="M131.843,84.048a.14.14,0,1,1,0-.279.24.24,0,0,0,.24-.24.14.14,0,1,1,.279,0A.519.519,0,0,1,131.843,84.048Z" transform="translate(-131.703 -83.389)" fill="#434343" />
            </g>
            <g id="Group_66" data-name="Group 66" transform="translate(6.815 6.882)">
              <path id="Path_116" data-name="Path 116" d="M138.112,77.335a.379.379,0,0,1-.38.38" transform="translate(-137.592 -77.195)" fill="#fff" />
              <path id="Path_117" data-name="Path 117" d="M137.372,77.494a.14.14,0,1,1,0-.279.24.24,0,0,0,.24-.24.14.14,0,0,1,.279,0A.52.52,0,0,1,137.372,77.494Z" transform="translate(-137.232 -76.835)" fill="#434343" />
            </g>
            <g id="Group_67" data-name="Group 67" transform="translate(6.626 8.333)">
              <path id="Path_118" data-name="Path 118" d="M137.053,82.91a.379.379,0,0,1,.38-.38" transform="translate(-136.914 -82.39)" fill="#fff" />
              <path id="Path_119" data-name="Path 119" d="M136.694,82.689a.14.14,0,0,1-.14-.14.52.52,0,0,1,.519-.519.14.14,0,1,1,0,.279.24.24,0,0,0-.24.24A.14.14,0,0,1,136.694,82.689Z" transform="translate(-136.554 -82.03)" fill="#434343" />
            </g>
            <g id="Group_68" data-name="Group 68" transform="translate(8.254 6.946)">
              <path id="Path_120" data-name="Path 120" d="M142.882,77.944a.379.379,0,0,1,.38-.379" transform="translate(-142.743 -77.425)" fill="#fff" />
              <path id="Path_121" data-name="Path 121" d="M142.523,77.723a.14.14,0,0,1-.14-.14.52.52,0,0,1,.519-.519.14.14,0,1,1,0,.279.24.24,0,0,0-.24.24A.14.14,0,0,1,142.523,77.723Z" transform="translate(-142.383 -77.064)" fill="#434343" />
            </g>
            <g id="Group_69" data-name="Group 69" transform="translate(9.8 8.713)">
              <path id="Path_122" data-name="Path 122" d="M148.418,84.268a.379.379,0,0,1,.38-.379" transform="translate(-148.278 -83.749)" fill="#fff" />
              <path id="Path_123" data-name="Path 123" d="M148.058,84.048a.14.14,0,0,1-.14-.14.52.52,0,0,1,.519-.519.14.14,0,0,1,0,.279.24.24,0,0,0-.24.24A.14.14,0,0,1,148.058,84.048Z" transform="translate(-147.918 -83.389)" fill="#434343" />
            </g>
            <g id="Group_73" data-name="Group 73" transform="translate(1.752)">
              <g id="Group_70" data-name="Group 70" transform="translate(3.02)">
                <circle id="Ellipse_4" data-name="Ellipse 4" cx="1.126" cy="1.126" r="1.126" transform="translate(0 1.945) rotate(-59.709)" fill="#fff" />
                <path id="Path_124" data-name="Path 124" d="M132.165,55.71a1.267,1.267,0,1,1,.17-.011A1.3,1.3,0,0,1,132.165,55.71Zm0-2.253a1.018,1.018,0,0,0-.133.009.986.986,0,1,0,.133-.009Z" transform="translate(-130.625 -52.903)" fill="#434343" />
              </g>
              <g id="Group_71" data-name="Group 71" transform="translate(0 0.804)">
                <rect id="Rectangle_24" data-name="Rectangle 24" width="8.921" height="6.507" transform="translate(0.14 1.332) rotate(-7.683)" fill="#fff" />
                <path id="Path_125" data-name="Path 125" d="M120.115,63a.14.14,0,0,1-.138-.121l-.87-6.448a.139.139,0,0,1,.12-.157l8.841-1.193a.141.141,0,0,1,.157.12l.87,6.448a.14.14,0,0,1-.12.157l-8.841,1.193Zm-.713-6.468.833,6.171,8.564-1.155-.833-6.171Z" transform="translate(-119.105 -55.075)" fill="#434343" />
              </g>
              <g id="Group_72" data-name="Group 72" transform="translate(2.531 1.146)">
                <rect id="Rectangle_25" data-name="Rectangle 25" width="3.814" height="1.54" transform="translate(0.14 0.65) rotate(-7.683)" fill="#fff" />
                <path id="Path_126" data-name="Path 126" d="M128.511,58.612a.139.139,0,0,1-.138-.121l-.206-1.526a.137.137,0,0,1,.027-.1.141.141,0,0,1,.092-.054l3.78-.51a.14.14,0,0,1,.157.12l.206,1.526a.137.137,0,0,1-.027.1.14.14,0,0,1-.092.054l-3.78.51Zm-.049-1.546.169,1.249,3.5-.473-.169-1.249Z" transform="translate(-128.166 -56.296)" fill="#434343" />
              </g>
            </g>
            <g id="Group_74" data-name="Group 74" transform="translate(4.932 20.784)">
              <path id="Path_127" data-name="Path 127" d="M137.348,127.11v1.359h-6.359l.018-.165.053-.741c.012-.153.023-.3.029-.453Z" transform="translate(-130.849 -126.97)" fill="#324b92" />
              <path id="Path_128" data-name="Path 128" d="M136.988,128.248h-6.359a.14.14,0,0,1-.139-.155l.018-.164.055-.767c.011-.14.021-.276.027-.417a.14.14,0,0,1,.14-.134h6.259a.14.14,0,0,1,.14.14v1.359A.14.14,0,0,1,136.988,128.248Zm-6.2-.279h6.064v-1.079h-5.986c-.006.1-.013.195-.021.294Z" transform="translate(-130.489 -126.61)" fill="#434343" />
            </g>
            <g id="Group_75" data-name="Group 75" transform="translate(9.71 15.701)">
              <path id="Path_129" data-name="Path 129" d="M149.674,108.912v8.424a.848.848,0,0,1-.789.9h0a.848.848,0,0,1-.789-.9v-6.582" transform="translate(-147.956 -108.772)" fill="#e0e0df" />
              <path id="Path_130" data-name="Path 130" d="M148.525,118.011a.987.987,0,0,1-.929-1.035v-6.582a.14.14,0,1,1,.279,0v6.582a.657.657,0,1,0,1.3,0v-8.424a.14.14,0,0,1,.279,0v8.424A.987.987,0,0,1,148.525,118.011Z" transform="translate(-147.596 -108.412)" fill="#434343" />
            </g>
          </g>
          <g id="Group_105" data-name="Group 105" transform="translate(0 4.798)">
            <g id="Group_81" data-name="Group 81" transform="translate(0.556 24.601)">
              <g id="Group_77" data-name="Group 77" transform="translate(3.081 2.47)">
                <path id="Rectangle_26" data-name="Rectangle 26" d="M.713,0h1a.851.851,0,0,1,.851.851v0a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.713A.713.713,0,0,1,.713,0Z" transform="translate(0.14 0.14)" fill="#fff" />
                <path id="Path_131" data-name="Path 131" d="M95.179,167.431H92.615a.14.14,0,0,1-.14-.14v-.248a.744.744,0,0,1,.743-.743h1.241a.86.86,0,0,1,.859.859v.132A.14.14,0,0,1,95.179,167.431Zm-2.424-.279h2.285a.58.58,0,0,0-.58-.572H93.218a.464.464,0,0,0-.464.463Z" transform="translate(-92.475 -166.301)" fill="#434343" />
              </g>
              <g id="Group_78" data-name="Group 78" transform="translate(3.532)">
                <path id="Rectangle_27" data-name="Rectangle 27" d="M0,0H.831a0,0,0,0,1,0,0V2.4a.416.416,0,0,1-.416.416h0A.416.416,0,0,1,0,2.4V0A0,0,0,0,1,0,0Z" transform="translate(0.14 0.139)" fill="#324b92" />
                <path id="Path_132" data-name="Path 132" d="M94.709,160.551h-.129a.491.491,0,0,1-.491-.491V157.6a.139.139,0,0,1,.14-.14h.831a.139.139,0,0,1,.14.14v2.464A.491.491,0,0,1,94.709,160.551Zm-.34-2.815v2.324a.212.212,0,0,0,.211.212h.129a.212.212,0,0,0,.211-.212v-2.324Z" transform="translate(-94.09 -157.456)" fill="#434343" />
              </g>
              <g id="Group_79" data-name="Group 79" transform="translate(0 2.47)">
                <path id="Rectangle_28" data-name="Rectangle 28" d="M0,0H2.564a0,0,0,0,1,0,0V0a.851.851,0,0,1-.851.851h-1A.713.713,0,0,1,0,.138V0A0,0,0,0,1,0,0Z" transform="translate(2.703 0.991) rotate(-180)" fill="#fff" />
                <path id="Path_133" data-name="Path 133" d="M84.148,167.431H81.584a.14.14,0,0,1-.14-.14v-.132a.86.86,0,0,1,.859-.859h1.242a.744.744,0,0,1,.743.743v.248A.14.14,0,0,1,84.148,167.431Zm-2.424-.279h2.285v-.108a.464.464,0,0,0-.463-.463H82.3A.581.581,0,0,0,81.723,167.152Z" transform="translate(-81.444 -166.301)" fill="#434343" />
              </g>
              <g id="Group_80" data-name="Group 80" transform="translate(1.282)">
                <path id="Rectangle_29" data-name="Rectangle 29" d="M.416,0h0A.416.416,0,0,1,.831.416v2.4a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V.416A.416.416,0,0,1,.416,0Z" transform="translate(0.971 2.955) rotate(-180)" fill="#324b92" />
                <path id="Path_134" data-name="Path 134" d="M86.653,160.551h-.129a.491.491,0,0,1-.491-.491V157.6a.14.14,0,0,1,.14-.14H87a.14.14,0,0,1,.14.14v2.464A.492.492,0,0,1,86.653,160.551Zm-.34-2.815v2.324a.212.212,0,0,0,.211.212h.129a.212.212,0,0,0,.212-.212v-2.324Z" transform="translate(-86.034 -157.456)" fill="#434343" />
              </g>
            </g>
            <g id="Group_82" data-name="Group 82" transform="translate(0.234 13.627)">
              <path id="Rectangle_30" data-name="Rectangle 30" d="M3.145,0h0A3.145,3.145,0,0,1,6.289,3.145V6.6a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3.145A3.145,3.145,0,0,1,3.145,0Z" transform="translate(0.14 0.14)" fill="#fff" />
              <path id="Path_135" data-name="Path 135" d="M86.72,125.04H80.431a.14.14,0,0,1-.14-.14v-5.538a1.2,1.2,0,0,1,1.2-1.2h4.174a1.2,1.2,0,0,1,1.2,1.2V124.9A.14.14,0,0,1,86.72,125.04Zm-6.149-.279h6.01v-5.4a.919.919,0,0,0-.918-.918H81.488a.919.919,0,0,0-.918.918Z" transform="translate(-80.291 -118.165)" fill="#434343" />
            </g>
            <g id="Group_83" data-name="Group 83" transform="translate(1.229 20.224)">
              <rect id="Rectangle_31" data-name="Rectangle 31" width="4.298" height="5.919" transform="translate(0.14 0.14)" fill="#e0e0df" />
              <path id="Path_136" data-name="Path 136" d="M88.293,147.98h-4.3a.14.14,0,0,1-.14-.14v-5.919a.14.14,0,0,1,.14-.14h4.3a.14.14,0,0,1,.14.14v5.919A.14.14,0,0,1,88.293,147.98Zm-4.158-.279h4.019v-5.64H84.134Z" transform="translate(-83.855 -141.782)" fill="#434343" />
            </g>
            <g id="Group_86" data-name="Group 86" transform="translate(0.234 9.627)">
              <g id="Group_84" data-name="Group 84">
                <circle id="Ellipse_5" data-name="Ellipse 5" cx="0.498" cy="0.498" r="0.498" transform="translate(0.14 0.14)" fill="#324b92" />
                <path id="Path_137" data-name="Path 137" d="M80.928,105.118a.638.638,0,1,1,.637-.638A.638.638,0,0,1,80.928,105.118Zm0-1a.358.358,0,1,0,.358.358A.358.358,0,0,0,80.928,104.122Z" transform="translate(-80.291 -103.843)" fill="#434343" />
              </g>
              <g id="Group_85" data-name="Group 85" transform="translate(5.294)">
                <circle id="Ellipse_6" data-name="Ellipse 6" cx="0.498" cy="0.498" r="0.498" transform="translate(0.14 0.14)" fill="#324b92" />
                <path id="Path_138" data-name="Path 138" d="M99.881,105.118a.638.638,0,1,1,.637-.638A.638.638,0,0,1,99.881,105.118Zm0-1a.358.358,0,1,0,.358.358A.358.358,0,0,0,99.881,104.122Z" transform="translate(-99.244 -103.843)" fill="#434343" />
              </g>
            </g>
            <g id="Group_87" data-name="Group 87" transform="translate(2.676 12.409)">
              <path id="Path_139" data-name="Path 139" d="M89.535,114.3v.8a.7.7,0,0,0,1.406,0v-.8Z" transform="translate(-89.395 -114.164)" fill="#324b92" />
              <path id="Path_140" data-name="Path 140" d="M89.878,115.591a.843.843,0,0,1-.843-.843v-.8a.14.14,0,0,1,.14-.14h1.406a.139.139,0,0,1,.14.14v.8A.843.843,0,0,1,89.878,115.591Zm-.564-1.507v.665a.563.563,0,0,0,1.127,0v-.665Z" transform="translate(-89.035 -113.804)" fill="#434343" />
            </g>
            <g id="Group_88" data-name="Group 88" transform="translate(1.003 7.666)">
              <path id="Path_141" data-name="Path 141" d="M88.293,99.135a3.643,3.643,0,0,0-4.749.006,2.463,2.463,0,0,1,1.169-1.5,2.459,2.459,0,0,1,3.445,1.123A2.4,2.4,0,0,1,88.293,99.135Z" transform="translate(-83.404 -97.181)" fill="#fff" />
              <path id="Path_142" data-name="Path 142" d="M83.184,98.92a.14.14,0,0,1-.135-.176,2.613,2.613,0,0,1,1.236-1.589,2.561,2.561,0,0,1,.53-.227,2.6,2.6,0,0,1,3.11,1.413,2.556,2.556,0,0,1,.143.4.139.139,0,0,1-.06.154.141.141,0,0,1-.166-.012,3.5,3.5,0,0,0-4.566.005A.139.139,0,0,1,83.184,98.92ZM85.56,97.1a2.328,2.328,0,0,0-.664.1,2.3,2.3,0,0,0-.473.2,2.337,2.337,0,0,0-.935.978,3.787,3.787,0,0,1,4.142,0A2.325,2.325,0,0,0,85.56,97.1Z" transform="translate(-83.044 -96.821)" fill="#434343" />
            </g>
            <g id="Group_89" data-name="Group 89" transform="translate(0.919 8.603)">
              <path id="Path_143" data-name="Path 143" d="M88.163,102.2a2.46,2.46,0,1,1-4.92,0c0-.07,0-.139.009-.208a2.5,2.5,0,0,1,.075-.431,3.643,3.643,0,0,1,4.749-.006A2.429,2.429,0,0,1,88.163,102.2Z" transform="translate(-83.103 -100.535)" fill="#324b92" />
              <path id="Path_144" data-name="Path 144" d="M85.343,104.437a2.6,2.6,0,0,1-2.6-2.6c0-.074,0-.148.009-.22a2.66,2.66,0,0,1,.08-.456.138.138,0,0,1,.044-.069,3.782,3.782,0,0,1,4.931-.006.14.14,0,0,1,.044.069,2.575,2.575,0,0,1,.092.682A2.6,2.6,0,0,1,85.343,104.437Zm-2.252-3.161a2.39,2.39,0,0,0-.061.366c-.006.064-.008.13-.008.2a2.32,2.32,0,1,0,4.57-.567,3.5,3.5,0,0,0-4.5.005Z" transform="translate(-82.743 -100.175)" fill="#434343" />
            </g>
            <g id="Group_90" data-name="Group 90" transform="translate(1.229 25.702)">
              <rect id="Rectangle_32" data-name="Rectangle 32" width="4.298" height="0.882" transform="translate(0.14 0.14)" fill="#fff" />
              <path id="Path_145" data-name="Path 145" d="M88.293,162.557h-4.3a.14.14,0,0,1-.14-.14v-.882a.14.14,0,0,1,.14-.14h4.3a.14.14,0,0,1,.14.14v.882A.14.14,0,0,1,88.293,162.557Zm-4.158-.279h4.019v-.6H84.134Z" transform="translate(-83.855 -161.395)" fill="#434343" />
            </g>
            <g id="Group_91" data-name="Group 91" transform="translate(3.378 22.128)">
              <line id="Line_2" data-name="Line 2" y1="4.27" transform="translate(0.14 0.14)" fill="#fff" />
              <path id="Path_146" data-name="Path 146" d="M91.69,153.148a.139.139,0,0,1-.14-.14v-4.27a.14.14,0,0,1,.279,0v4.27A.14.14,0,0,1,91.69,153.148Z" transform="translate(-91.55 -148.599)" fill="#434343" />
            </g>
            <g id="Group_92" data-name="Group 92" transform="translate(1.229 20.224)">
              <rect id="Rectangle_33" data-name="Rectangle 33" width="4.609" height="0.478" transform="translate(0.14 0.14)" fill="#fff" />
              <path id="Path_147" data-name="Path 147" d="M88.6,142.539H83.995a.14.14,0,0,1-.14-.14v-.478a.14.14,0,0,1,.14-.14H88.6a.139.139,0,0,1,.14.14v.478A.139.139,0,0,1,88.6,142.539Zm-4.469-.279h4.33v-.2h-4.33Z" transform="translate(-83.855 -141.782)" fill="#434343" />
            </g>
            <g id="Group_98" data-name="Group 98" transform="translate(4.092 19.675)">
              <g id="Group_93" data-name="Group 93" transform="translate(0 0.74)">
                <path id="Rectangle_34" data-name="Rectangle 34" d="M0,0H4.157a0,0,0,0,1,0,0V2.057A4.157,4.157,0,0,1,0,6.214H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(4.297 6.354) rotate(-180)" fill="#e0e0df" />
                <path id="Path_148" data-name="Path 148" d="M98.4,148.96H94.246a.14.14,0,0,1-.14-.14v-4.939a1.416,1.416,0,0,1,1.414-1.414H98.4a.14.14,0,0,1,.14.14v6.214A.14.14,0,0,1,98.4,148.96Zm-4.017-.279h3.878v-5.934H95.52a1.136,1.136,0,0,0-1.135,1.135Z" transform="translate(-94.106 -142.467)" fill="#434343" />
              </g>
              <g id="Group_94" data-name="Group 94" transform="translate(2.99)">
                <rect id="Rectangle_35" data-name="Rectangle 35" width="1.167" height="0.74" transform="translate(1.307 0.88) rotate(-180)" fill="#fff" />
                <path id="Path_149" data-name="Path 149" d="M106.119,140.836h-1.167a.14.14,0,0,1-.14-.14v-.74a.14.14,0,0,1,.14-.14h1.167a.14.14,0,0,1,.14.14v.74A.14.14,0,0,1,106.119,140.836Zm-1.027-.279h.888V140.1h-.888Z" transform="translate(-104.812 -139.817)" fill="#434343" />
              </g>
              <g id="Group_97" data-name="Group 97" transform="translate(0.985 3.53)">
                <g id="Group_95" data-name="Group 95">
                  <line id="Line_3" data-name="Line 3" x1="2.188" transform="translate(0.139 0.14)" fill="#fff" />
                  <path id="Path_150" data-name="Path 150" d="M99.959,152.735H97.772a.14.14,0,1,1,0-.279h2.188a.14.14,0,1,1,0,.279Z" transform="translate(-97.632 -152.456)" fill="#434343" />
                </g>
                <g id="Group_96" data-name="Group 96" transform="translate(0 2.229)">
                  <line id="Line_4" data-name="Line 4" x1="2.188" transform="translate(0.139 0.14)" fill="#fff" />
                  <path id="Path_151" data-name="Path 151" d="M99.959,160.717H97.772a.14.14,0,0,1,0-.279h2.188a.14.14,0,0,1,0,.279Z" transform="translate(-97.632 -160.438)" fill="#434343" />
                </g>
              </g>
            </g>
            <g id="Group_99" data-name="Group 99" transform="translate(0 1.049)">
              <rect id="Rectangle_36" data-name="Rectangle 36" width="6.757" height="6.994" rx="3.378" transform="translate(0.139 0.14)" fill="#e0e0df" />
              <path id="Path_152" data-name="Path 152" d="M84.354,80.4H81.59a2.138,2.138,0,0,1-2.136-2.136v-3a2.139,2.139,0,0,1,2.136-2.136h2.764a2.138,2.138,0,0,1,2.136,2.136v3A2.138,2.138,0,0,1,84.354,80.4ZM81.59,73.407a1.859,1.859,0,0,0-1.857,1.857v3a1.859,1.859,0,0,0,1.857,1.856h2.764a1.859,1.859,0,0,0,1.857-1.856v-3a1.859,1.859,0,0,0-1.857-1.857Z" transform="translate(-79.454 -73.128)" fill="#434343" />
            </g>
            <g id="Group_100" data-name="Group 100" transform="translate(1.838)">
              <rect id="Rectangle_37" data-name="Rectangle 37" width="3.081" height="1.08" transform="translate(0.14 0.14)" fill="#e0e0df" />
              <path id="Path_153" data-name="Path 153" d="M89.255,70.732H86.174a.14.14,0,0,1-.14-.14v-1.08a.14.14,0,0,1,.14-.14h3.081a.14.14,0,0,1,.14.14v1.08A.14.14,0,0,1,89.255,70.732Zm-2.941-.279h2.8v-.8h-2.8Z" transform="translate(-86.034 -69.373)" fill="#434343" />
            </g>
            <g id="Group_101" data-name="Group 101" transform="translate(5.001 5.489)">
              <path id="Path_154" data-name="Path 154" d="M97.859,90.963a1.549,1.549,0,0,0,.86-1.387v-.049" transform="translate(-97.719 -89.387)" fill="#fff" />
              <path id="Path_155" data-name="Path 155" d="M97.5,90.742a.14.14,0,0,1-.062-.265,1.4,1.4,0,0,0,.782-1.262v-.049a.14.14,0,0,1,.279,0v.049a1.678,1.678,0,0,1-.937,1.512A.138.138,0,0,1,97.5,90.742Z" transform="translate(-97.359 -89.027)" fill="#434343" />
            </g>
            <g id="Group_102" data-name="Group 102" transform="translate(1.028 3.314)">
              <line id="Line_5" data-name="Line 5" y2="1.737" transform="translate(0.14 0.14)" fill="#fff" />
              <path id="Path_156" data-name="Path 156" d="M83.274,83.256a.139.139,0,0,1-.14-.14V81.379a.14.14,0,0,1,.279,0v1.737A.14.14,0,0,1,83.274,83.256Z" transform="translate(-83.134 -81.239)" fill="#434343" />
            </g>
            <g id="Group_103" data-name="Group 103" transform="translate(0.234 15.523)">
              <path id="Path_157" data-name="Path 157" d="M80.791,125.451v5.209a.723.723,0,0,0,.723.723h0a.723.723,0,0,0,.723-.723v-5.167" transform="translate(-80.651 -125.311)" fill="#fff" />
              <path id="Path_158" data-name="Path 158" d="M81.154,131.162a.864.864,0,0,1-.863-.862v-5.209a.14.14,0,1,1,.279,0V130.3a.583.583,0,0,0,1.167,0v-5.167a.14.14,0,0,1,.279,0V130.3A.863.863,0,0,1,81.154,131.162Z" transform="translate(-80.291 -124.951)" fill="#434343" />
            </g>
            <g id="Group_104" data-name="Group 104" transform="translate(5.077 15.523)">
              <path id="Path_159" data-name="Path 159" d="M98.131,125.451v5.209a.723.723,0,0,0,.723.723h0a.723.723,0,0,0,.723-.723v-5.167" transform="translate(-97.992 -125.311)" fill="#fff" />
              <path id="Path_160" data-name="Path 160" d="M98.494,131.162a.863.863,0,0,1-.862-.862v-5.209a.14.14,0,1,1,.279,0V130.3a.583.583,0,1,0,1.166,0v-5.167a.14.14,0,0,1,.279,0V130.3A.863.863,0,0,1,98.494,131.162Z" transform="translate(-97.632 -124.951)" fill="#434343" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );

}

const IDPsOutOfCamp = (props: IconProps) => {
  const { height, width, x, y } = props;

  return (
<svg x={x} y={y} width={width ? width : 45} height={height ? height : 33} version="1.1"  viewBox="0 0 452.3 178.98" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="clipPath4325">
      <path d="m0 247.5h339.23v-247.5h-339.23z"/>
    </clipPath>
  </defs>
  <g transform="matrix(1.3333 0 0 -1.3333 0 281.85)">
    <g clip-path="url(#clipPath4325)">
      <g transform="translate(103.31 188)">
        <path d="m0 0v-17.951c0-0.708-0.455-1.283-1.021-1.283h-44.073c-0.563 0-1.018 0.575-1.018 1.283v17.951z" fill="#fff"/>
        <path d="m0 0v-17.951c0-0.708-0.455-1.283-1.021-1.283h-44.073c-0.563 0-1.018 0.575-1.018 1.283v17.951z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(106.8 188)">
        <path d="m 0,0 h -52.414 c -0.795,0 -1.275,1.173 -0.85,2.074 0,0 8.093,20.815 20.794,20.815 C -13.783,22.889 0.849,2.074 0.849,2.074 1.275,1.173 0.795,0 0,0" fill="#fff"/>
        <path d="m0 0h-52.414c-0.795 0-1.275 1.173-0.85 2.074 0 0 8.093 20.815 20.794 20.815 18.687 0 33.319-20.815 33.319-20.815 0.426-0.901-0.054-2.074-0.849-2.074z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m83.447 176.49h3.512v3.632h-3.512z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <path d="m86.959 176.49h3.512v3.632h-3.512z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(83.447 183.76)">
        <path d="m0 0h-2.882c-0.415 0-0.751-0.609-0.751-1.361v-2.272h3.633z" fill="#515ca2"/>
        <path d="m0 0h-2.882c-0.415 0-0.751-0.609-0.751-1.361v-2.272h3.633z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(79.814 180.13)">
        <path d="m0 0v-2.271c0-0.752 0.336-1.361 0.751-1.361h2.882v3.632z" fill="#fff"/>
        <path d="m0 0v-2.271c0-0.752 0.336-1.361 0.751-1.361h2.882v3.632z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m90.471 176.49h3.511v3.632h-3.511z" fill="#515ca2" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <path d="m86.959 180.13h3.512v3.633h-3.512z" fill="#515ca2" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
        <path d="m90.471 180.13h3.511v3.633h-3.511z"/>
        <path d="m83.447 180.13h3.512v3.633h-3.512z"/>
        <path d="m93.981 180.13h3.512v3.633h-3.512z"/>
      </g>
      <g transform="translate(97.493 176.49)">
        <path d="m0 0h2.761c0.415 0 0.751 0.609 0.751 1.361v2.271h-3.512z" fill="#515ca2"/>
        <path d="m0 0h2.761c0.415 0 0.751 0.609 0.751 1.361v2.271h-3.512z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(100.25 183.76)">
        <path d="m0 0h-2.761v-3.633h3.512v2.272c0 0.752-0.336 1.361-0.751 1.361" fill="#fff"/>
        <path d="m0 0h-2.761v-3.633h3.512v2.272c0 0.752-0.336 1.361-0.751 1.361z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m93.981 176.49h3.512v3.632h-3.512z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(61.063 183.76)">
        <path d="m0 0c-0.281 0-0.51-0.229-0.51-0.51v-12.472c0-0.282 0.229-0.51 0.51-0.51h2.936v13.492z" fill="#515ca2"/>
        <path d="m0 0c-0.281 0-0.51-0.229-0.51-0.51v-12.472c0-0.282 0.229-0.51 0.51-0.51h2.936v13.492z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(69.487 183.76)">
        <path d="m0 0h-5.488v-13.492h5.488c0.282 0 0.511 0.228 0.511 0.51v12.472c0 0.281-0.229 0.51-0.511 0.51" fill="#fff"/>
        <path d="m0 0h-5.488v-13.492h5.488c0.282 0 0.511 0.228 0.511 0.51v12.472c0 0.281-0.229 0.51-0.511 0.51z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(70.802 198.87)">
        <path d="m0 0s-1.9-1.962-2.613-2.945" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(70.224 202.49)">
        <path d="m0 0s-4.187-4.529-5.754-6.801" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(45.7 168.77)">
        <path d="m0 0h72.854" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(99.498 137.98)">
        <path d="m0 0v-33.422c0-1.317-0.847-2.389-1.902-2.389h-82.055c-1.049 0-1.897 1.072-1.897 2.389v33.422z" fill="#fff"/>
        <path d="m0 0v-33.422c0-1.317-0.847-2.389-1.902-2.389h-82.055c-1.049 0-1.897 1.072-1.897 2.389v33.422z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(105.99 137.98)">
        <path d="m 0,0 h -97.585 c -1.479,0 -2.376,2.184 -1.582,3.862 0,0 15.067,38.752 38.715,38.752 34.79,0 62.034,-38.752 62.034,-38.752 C 2.376,2.184 1.48,0 0,0" fill="#fff"/>
        <path d="m 0,0 h -97.585 c -1.479,0 -2.376,2.184 -1.582,3.862 0,0 15.067,38.752 38.715,38.752 34.79,0 62.034,-38.752 62.034,-38.752 C 2.376,2.184 1.48,0 0,0 Z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m62.514 116.56h6.538v6.763h-6.538z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <path d="m69.052 116.56h6.538v6.763h-6.538z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(62.514 130.08)">
        <path d="m0 0h-5.366c-0.772 0-1.397-1.135-1.397-2.535v-4.228h6.763z" fill="#515ca2"/>
        <path d="m0 0h-5.366c-0.772 0-1.397-1.135-1.397-2.535v-4.228h6.763z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(55.751 123.32)">
        <path d="m0 0v-4.229c0-1.399 0.625-2.534 1.396-2.534h5.367v6.763z" fill="#fff"/>
        <path d="m0 0v-4.229c0-1.399 0.625-2.534 1.396-2.534h5.367v6.763z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m75.59 116.56h6.537v6.763h-6.537z" fill="#515ca2" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <path d="m69.052 123.32h6.538v6.763h-6.538z" fill="#515ca2" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
        <path d="m75.59 123.32h6.537v6.763h-6.537z"/>
        <path d="m62.514 123.32h6.538v6.763h-6.538z"/>
        <path d="m82.127 123.32h6.538v6.763h-6.538z"/>
      </g>
      <g transform="translate(88.665 116.56)">
        <path d="m0 0h5.141c0.771 0 1.397 1.135 1.397 2.535v4.228h-6.538z" fill="#515ca2"/>
        <path d="m0 0h5.141c0.771 0 1.397 1.135 1.397 2.535v4.228h-6.538z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(93.806 130.08)">
        <path d="m0 0h-5.141v-6.763h6.538v4.228c0 1.4-0.626 2.535-1.397 2.535" fill="#fff"/>
        <path d="m0 0h-5.141v-6.763h6.538v4.228c0 1.4-0.626 2.535-1.397 2.535z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m82.127 116.56h6.538v6.763h-6.538z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(20.84 130.08)">
        <path d="m0 0c-0.524 0-0.95-0.426-0.95-0.95v-23.22c0-0.525 0.426-0.95 0.95-0.95h5.466v25.12z" fill="#515ca2"/>
        <path d="m0 0c-0.524 0-0.95-0.426-0.95-0.95v-23.22c0-0.525 0.426-0.95 0.95-0.95h5.466v25.12z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(36.523 130.08)">
        <path d="m0 0h-10.218v-25.12h10.218c0.524 0 0.95 0.425 0.95 0.95v23.22c0 0.524-0.426 0.95-0.95 0.95" fill="#fff"/>
        <path d="m0 0h-10.218v-25.12h10.218c0.524 0 0.95 0.425 0.95 0.95v23.22c0 0.524-0.426 0.95-0.95 0.95z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(38.97 158.21)">
        <path d="m0 0s-3.538-3.653-4.865-5.483" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(37.894 164.96)">
        <path d="m0 0s-7.796-8.432-10.713-12.663" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(-7.7658 102.17)">
        <path d="m0 0h135.64" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(347.49 77.656)">
        <path d="m0 0h-158.45" fill="#eaf2fb" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(306.61 77.656)">
        <path d="m0 0h-14.442v2.635c0 1.193 0.965 2.159 2.158 2.159h8.232c2.239 0 4.052-1.814 4.052-4.052z" fill="#fff"/>
        <path d="m0 0h-14.442v2.635c0 1.193 0.965 2.159 2.158 2.159h8.232c2.239 0 4.052-1.814 4.052-4.052z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(299.39 96.61)">
        <path d="m0 0h-4.682v-13.882c0-1.092 0.886-1.978 1.979-1.978h0.724c1.093 0 1.979 0.886 1.979 1.978z" fill="#515ca2"/>
        <path d="m0 0h-4.682v-13.882c0-1.092 0.886-1.978 1.979-1.978h0.724c1.093 0 1.979 0.886 1.979 1.978z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(274.81 77.656)">
        <path d="m0 0h14.442v2.635c0 1.193-0.965 2.159-2.158 2.159h-8.233c-2.238 0-4.051-1.814-4.051-4.052z" fill="#fff"/>
        <path d="m0 0h14.442v2.635c0 1.193-0.965 2.159-2.158 2.159h-8.233c-2.238 0-4.051-1.814-4.051-4.052z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(282.03 96.61)">
        <path d="m0 0h4.683v-13.882c0-1.092-0.886-1.978-1.979-1.978h-0.725c-1.093 0-1.979 0.886-1.979 1.978z" fill="#515ca2"/>
        <path d="m0 0h4.683v-13.882c0-1.092-0.886-1.978-1.979-1.978h-0.725c-1.093 0-1.979 0.886-1.979 1.978z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(303.48 138.61)">
        <path d="m0 0v-53.634h-25.526l2.758 30.551 0.064 0.59 0.189 2.654c0.042 0.547 0.084 1.074 0.106 1.621v0.38c0 1.073-0.084 2.127-0.211 3.18l-1.643 14.953c-0.273 0.147-0.568 0.295-0.905 0.442-4.149 2.022-11.879 5.771-14.448 14.111-1.958 6.381-0.358 14.111 4.739 22.957 0.884 1.516 2.821 2.022 4.317 1.158 1.517-0.863 2.043-2.801 1.159-4.317-4.192-7.267-5.603-13.311-4.17-17.944 1.748-5.708 7.644-8.572 11.162-10.278 0.315-0.148 0.59-0.295 0.863-0.422 0.127-0.105 0.317-0.189 0.526-0.273 0 0 0.022 0 0.042-0.021 0.632-0.169 1.517-0.211 2.001-0.211h13.458c3.054 0 5.519-2.464 5.519-5.497" fill="#e6e6e6"/>
        <path d="m0 0v-53.634h-25.526l2.758 30.551 0.064 0.59 0.189 2.654c0.042 0.547 0.084 1.074 0.106 1.621v0.38c0 1.073-0.084 2.127-0.211 3.18l-1.643 14.953c-0.273 0.147-0.568 0.295-0.905 0.442-4.149 2.022-11.879 5.771-14.448 14.111-1.958 6.381-0.358 14.111 4.739 22.957 0.884 1.516 2.821 2.022 4.317 1.158 1.517-0.863 2.043-2.801 1.159-4.317-4.192-7.267-5.603-13.311-4.17-17.944 1.748-5.708 7.644-8.572 11.162-10.278 0.315-0.148 0.59-0.295 0.863-0.422 0.127-0.105 0.317-0.189 0.526-0.273 0 0 0.022 0 0.042-0.021 0.632-0.169 1.517-0.211 2.001-0.211h13.458c3.054 0 5.519-2.464 5.519-5.497z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(282.6 156.01)">
        <path d="m0 0c0-1.12-0.908-2.028-2.027-2.028-1.12 0-2.029 0.908-2.029 2.028s0.909 2.028 2.029 2.028c1.119 0 2.027-0.908 2.027-2.028" fill="#515ca2"/>
        <path d="m0 0c0-1.12-0.908-2.028-2.027-2.028-1.12 0-2.029 0.908-2.029 2.028s0.909 2.028 2.029 2.028c1.119 0 2.027-0.908 2.027-2.028z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(302.87 156.01)">
        <path d="m0 0c0-1.12-0.908-2.028-2.028-2.028-1.119 0-2.028 0.908-2.028 2.028s0.909 2.028 2.028 2.028c1.12 0 2.028-0.908 2.028-2.028" fill="#515ca2"/>
        <path d="m0 0c0-1.12-0.908-2.028-2.028-2.028-1.119 0-2.028 0.908-2.028 2.028s0.909 2.028 2.028 2.028c1.12 0 2.028-0.908 2.028-2.028z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(299.61 154.92)">
        <path d="m0 0c0.095 0.51 0.151 1.04 0.151 1.588 0 0.699-0.075 1.36-0.226 2.003h-1.72l-0.321 0.756c-0.435 1.039-1.474 1.72-2.609 1.72h-8.372c-1.133 0-2.154-0.681-2.589-1.72l-0.321-0.756h-1.72c-0.151-0.643-0.226-1.304-0.226-2.003 0-0.548 0.057-1.078 0.151-1.588-1.626 1.984-2.59 4.498-2.59 7.257 0 6.35 5.141 11.491 11.492 11.491 6.349 0 11.49-5.141 11.49-11.491 0-2.759-0.964-5.273-2.59-7.257" fill="#fff"/>
        <path d="m0 0c0.095 0.51 0.151 1.04 0.151 1.588 0 0.699-0.075 1.36-0.226 2.003h-1.72l-0.321 0.756c-0.435 1.039-1.474 1.72-2.609 1.72h-8.372c-1.133 0-2.154-0.681-2.589-1.72l-0.321-0.756h-1.72c-0.151-0.643-0.226-1.304-0.226-2.003 0-0.548 0.057-1.078 0.151-1.588-1.626 1.984-2.59 4.498-2.59 7.257 0 6.35 5.141 11.491 11.492 11.491 6.349 0 11.49-5.141 11.49-11.491 0-2.759-0.964-5.273-2.59-7.257z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(299.76 156.51)">
        <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-2.098-2.589-5.311-4.233-8.901-4.233-3.591 0-6.803 1.644-8.901 4.233-0.095 0.51-0.151 1.04-0.151 1.588 0 0.699 0.075 1.36 0.226 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.372c1.135 0 2.174-0.681 2.608-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003" fill="#fff"/>
        <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-2.098-2.589-5.311-4.233-8.901-4.233-3.591 0-6.803 1.644-8.901 4.233-0.095 0.51-0.151 1.04-0.151 1.588 0 0.699 0.075 1.36 0.226 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.372c1.135 0 2.174-0.681 2.608-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(293.28 153.61)">
        <path d="m0 0v-8.778c0-1.422-1.154-2.576-2.575-2.576s-2.574 1.154-2.574 2.576v8.778c0 1.421 1.153 2.575 2.574 2.575s2.575-1.154 2.575-2.575" fill="#515ca2"/>
        <path d="m0 0v-8.778c0-1.422-1.154-2.576-2.575-2.576s-2.574 1.154-2.574 2.576v8.778c0 1.421 1.153 2.575 2.574 2.575s2.575-1.154 2.575-2.575z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(299.76 156.51)">
        <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-0.737-4.233-4.46-7.465-8.901-7.465-4.461 0-8.165 3.232-8.901 7.465-0.095 0.51-0.151 1.04-0.151 1.588 0 0.699 0.075 1.36 0.226 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.372c1.135 0 2.174-0.681 2.608-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003" fill="#515ca2"/>
        <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-0.737-4.233-4.46-7.465-8.901-7.465-4.461 0-8.165 3.232-8.901 7.465-0.095 0.51-0.151 1.04-0.151 1.588 0 0.699 0.075 1.36 0.226 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.372c1.135 0 2.174-0.681 2.608-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(297.62 103.27)">
        <path d="m0 0c-0.131 1.77 1.197 3.311 2.968 3.441 1.769 0.131 3.31-1.198 3.44-2.968 0.131-1.769-1.197-3.31-2.968-3.441-1.769-0.131-3.31 1.198-3.44 2.968" fill="#e6e6e6"/>
        <path d="m0 0c-0.131 1.77 1.197 3.311 2.968 3.441 1.769 0.131 3.31-1.198 3.44-2.968 0.131-1.769-1.197-3.31-2.968-3.441-1.769-0.131-3.31 1.198-3.44 2.968z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(314.88 85.934)">
        <path d="m0 0-25.383-1.874-1.367 18.514 25.383 1.875z" fill="#e6e6e6"/>
        <path d="m0 0-25.383-1.874-1.367 18.514 25.383 1.875z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(295.72 98.729)">
        <path d="m0 0 10.853 0.801-0.324 4.382-10.853-0.802z" fill="#e6e6e6"/>
        <path d="m0 0 10.853 0.801-0.324 4.382-10.853-0.802z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(289.5 84.06)">
        <path d="m0 0 25.383 1.874-0.276 3.731-25.383-1.875z" fill="#fff"/>
        <path d="m0 0 25.383 1.874-0.276 3.731-25.383-1.875z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(284.76 144.11)">
        <path d="m0 0c0.227-3.081 2.797-5.519 5.953-5.519 3.155 0 5.726 2.438 5.953 5.519" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(297 167.9)">
        <path d="m0 0c0-0.751-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(293.03 165.65)">
        <path d="m0 0c0-0.751-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(284.41 167.9)">
        <path d="m0 0c0-0.751-0.608-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(283.28 163.62)">
        <path d="m0 0c0-0.751-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(288.81 170.17)">
        <path d="m0 0c0-0.75-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(286.78 163.62)">
        <path d="m0 0c0 0.751 0.607 1.358 1.358 1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(292.6 168.58)">
        <path d="m0 0c0 0.75 0.607 1.358 1.358 1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(298.14 162.26)">
        <path d="m0 0c0 0.751 0.607 1.358 1.358 1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(281.16 189.26)">
        <path d="m0 0c-0.298 2.207 1.25 4.237 3.457 4.535s4.237-1.25 4.535-3.457-1.25-4.237-3.457-4.535-4.237 1.25-4.535 3.457" fill="#fff"/>
        <path d="m0 0c-0.298 2.207 1.25 4.237 3.457 4.535s4.237-1.25 4.535-3.457-1.25-4.237-3.457-4.535-4.237 1.25-4.535 3.457z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(304.1 168.84)">
        <path d="m0 0-31.653-4.271-3.116 23.088 31.654 4.27z" fill="#fff"/>
        <path d="m0 0-31.653-4.271-3.116 23.088 31.654 4.27z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(279.12 183.42)">
        <path d="m0 0 13.533 1.826-0.737 5.464-13.533-1.827z" fill="#fff"/>
        <path d="m0 0 13.533 1.826-0.737 5.464-13.533-1.827z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(303.48 120.39)">
        <path d="m0 0v-4.865h-22.768l0.064 0.59 0.189 2.653c0.042 0.548 0.084 1.075 0.106 1.622z" fill="#515ca2"/>
        <path d="m0 0v-4.865h-22.768l0.064 0.59 0.189 2.653c0.042 0.548 0.084 1.075 0.106 1.622z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(303.47 138.59)">
        <path d="m0 0v-30.163c0-1.771-1.265-3.207-2.825-3.207-1.561 0-2.825 1.436-2.825 3.207v23.565" fill="#e6e6e6" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(251.88 77.656)">
        <path d="m0 0h-9.18v0.888c0 1.193 0.967 2.159 2.159 2.159h4.446c1.422 0 2.575-1.153 2.575-2.575z" fill="#fff"/>
        <path d="m0 0h-9.18v0.888c0 1.193 0.967 2.159 2.159 2.159h4.446c1.422 0 2.575-1.153 2.575-2.575z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(247.29 89.549)">
        <path d="m0 0h-2.976v-8.823c0-0.694 0.564-1.257 1.258-1.257h0.461c0.695 0 1.257 0.563 1.257 1.257z" fill="#515ca2"/>
        <path d="m0 0h-2.976v-8.823c0-0.694 0.564-1.257 1.258-1.257h0.461c0.695 0 1.257 0.563 1.257 1.257z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(231.67 77.656)">
        <path d="m0 0h9.18v0.888c0 1.193-0.967 2.159-2.159 2.159h-4.446c-1.423 0-2.575-1.153-2.575-2.575z" fill="#fff"/>
        <path d="m0 0h9.18v0.888c0 1.193-0.967 2.159-2.159 2.159h-4.446c-1.423 0-2.575-1.153-2.575-2.575z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(236.26 89.549)">
        <path d="m0 0h2.976v-8.823c0-0.694-0.564-1.257-1.258-1.257h-0.461c-0.695 0-1.257 0.563-1.257 1.257z" fill="#515ca2"/>
        <path d="m0 0h2.976v-8.823c0-0.694-0.564-1.257-1.258-1.257h-0.461c-0.695 0-1.257 0.563-1.257 1.257z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(253.03 105.22)">
        <path d="m0 0h-22.518v19.83c0 2.091 1.696 3.787 3.788 3.787h14.943c2.092 0 3.787-1.696 3.787-3.787z" fill="#fff"/>
        <path d="m0 0h-22.518v19.83c0 2.091 1.696 3.787 3.788 3.787h14.943c2.092 0 3.787-1.696 3.787-3.787z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m249.47 84.03h-15.389v21.193h15.389z" fill="#e6e6e6" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(234.08 141.38)">
        <path d="m0 0c0-0.984-0.798-1.783-1.782-1.783-0.985 0-1.782 0.799-1.782 1.783s0.797 1.782 1.782 1.782c0.984 0 1.782-0.798 1.782-1.782" fill="#515ca2"/>
        <path d="m0 0c0-0.984-0.798-1.783-1.782-1.783-0.985 0-1.782 0.799-1.782 1.783s0.797 1.782 1.782 1.782c0.984 0 1.782-0.798 1.782-1.782z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(253.03 141.38)">
        <path d="m0 0c0-0.984-0.798-1.783-1.782-1.783-0.985 0-1.782 0.799-1.782 1.783s0.797 1.782 1.782 1.782c0.984 0 1.782-0.798 1.782-1.782" fill="#515ca2"/>
        <path d="m0 0c0-0.984-0.798-1.783-1.782-1.783-0.985 0-1.782 0.799-1.782 1.783s0.797 1.782 1.782 1.782c0.984 0 1.782-0.798 1.782-1.782z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(239.26 133.2)">
        <path d="m0 0v-2.88c0-1.392 1.125-2.517 2.517-2.517 1.386 0 2.517 1.125 2.517 2.517v2.88z" fill="#515ca2"/>
        <path d="m0 0v-2.88c0-1.392 1.125-2.517 2.517-2.517 1.386 0 2.517 1.125 2.517 2.517v2.88z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(250.27 143.69)">
        <path d="m0 0c-2.277 1.96-5.252 3.141-8.497 3.141-3.249 0-6.224-1.186-8.506-3.162 0.618 2.304 2.152 4.238 4.186 5.382 0.561 0.323 1.164 0.577 1.798 0.77 0.801 0.239 1.644 0.364 2.522 0.364 3.562 0 6.63-2.112 8.014-5.153 0.197-0.432 0.358-0.879 0.483-1.342" fill="#fff"/>
        <path d="m0 0c-2.277 1.96-5.252 3.141-8.497 3.141-3.249 0-6.224-1.186-8.506-3.162 0.618 2.304 2.152 4.238 4.186 5.382 0.561 0.323 1.164 0.577 1.798 0.77 0.801 0.239 1.644 0.364 2.522 0.364 3.562 0 6.63-2.112 8.014-5.153 0.197-0.432 0.358-0.879 0.483-1.342z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(250.58 141.38)">
        <path d="m0 0c0-4.867-3.941-8.808-8.809-8.808-4.866 0-8.807 3.941-8.807 8.808 0 0.25 0.01 0.499 0.031 0.744 0.047 0.53 0.135 1.045 0.271 1.544 2.282 1.976 5.256 3.161 8.505 3.161 3.246 0 6.22-1.18 8.497-3.14 0.203-0.739 0.312-1.513 0.312-2.309" fill="#515ca2"/>
        <path d="m0 0c0-4.867-3.941-8.808-8.809-8.808-4.866 0-8.807 3.941-8.807 8.808 0 0.25 0.01 0.499 0.031 0.744 0.047 0.53 0.135 1.045 0.271 1.544 2.282 1.976 5.256 3.161 8.505 3.161 3.246 0 6.22-1.18 8.497-3.14 0.203-0.739 0.312-1.513 0.312-2.309z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m249.47 82.45h-15.389v3.16h15.389z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(241.77 83.116)">
        <path d="m0 0v15.289" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m250.58 103.51h-16.502v1.711h16.502z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(244.33 82.289)">
        <path d="m0 0h14.884v22.249h-10.321c-2.52 0-4.563-2.044-4.563-4.564z" fill="#e6e6e6"/>
        <path d="m0 0h14.884v22.249h-10.321c-2.52 0-4.563-2.044-4.563-4.564z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m255.03 107.19h4.178v-2.649h-4.178z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(255.69 94.549)">
        <path d="m0 0h-7.833" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(255.69 86.566)">
        <path d="m0 0h-7.833" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(246.72 173.88)">
        <path d="m0 0h-9.896c-3.947 0-7.148-3.2-7.148-7.148v-10.745c0-3.947 3.201-7.148 7.148-7.148h9.896c3.948 0 7.148 3.201 7.148 7.148v10.745c0 3.948-3.2 7.148-7.148 7.148" fill="#e6e6e6"/>
        <path d="m0 0h-9.896c-3.947 0-7.148-3.2-7.148-7.148v-10.745c0-3.947 3.201-7.148 7.148-7.148h9.896c3.948 0 7.148 3.201 7.148 7.148v10.745c0 3.948-3.2 7.148-7.148 7.148z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m247.29 173.77h-11.031v3.866h11.031z" fill="#e6e6e6" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(247.58 152.84)">
        <path d="m0 0c1.825 0.906 3.079 2.793 3.079 4.965v0.174" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(233.36 165.77)">
        <path d="m0 0v-6.221" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(230.51 122.05)">
        <path d="m0 0v-18.65c0-1.429 1.159-2.588 2.588-2.588 1.43 0 2.589 1.159 2.589 2.588v18.5" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(247.85 122.05)">
        <path d="m0 0v-18.65c0-1.429 1.158-2.588 2.588-2.588s2.589 1.159 2.589 2.588v18.5" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(201.96 131.69)">
        <path d="m0 0v-50.432c0-1.987-1.278-3.604-2.871-3.604h-123.82c-1.583 0-2.861 1.617-2.861 3.604v50.432z" fill="#fff"/>
        <path d="m0 0v-50.432c0-1.987-1.278-3.604-2.871-3.604h-123.82c-1.583 0-2.861 1.617-2.861 3.604v50.432z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(211.77 131.69)">
        <path d="m0 0h-147.25c-2.232 0-3.584 3.296-2.386 5.829 0 0 22.735 58.474 58.417 58.474 52.498 0 93.607-58.474 93.607-58.474 1.198-2.533-0.154-5.829-2.386-5.829" fill="#fff"/>
        <path d="m0 0h-147.25c-2.232 0-3.584 3.296-2.386 5.829 0 0 22.735 58.474 58.417 58.474 52.498 0 93.607-58.474 93.607-58.474 1.198-2.533-0.154-5.829-2.386-5.829z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m146.16 99.368h9.865v10.206h-9.865z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <path d="m156.02 99.368h9.865v10.206h-9.865z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(146.16 119.78)">
        <path d="m0 0h-8.098c-1.164 0-2.107-1.712-2.107-3.825v-6.38h10.205z" fill="#515ca2"/>
        <path d="m0 0h-8.098c-1.164 0-2.107-1.712-2.107-3.825v-6.38h10.205z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(135.95 109.57)">
        <path d="m0 0v-6.381c0-2.112 0.943-3.825 2.107-3.825h8.098v10.206z" fill="#fff"/>
        <path d="m0 0v-6.381c0-2.112 0.943-3.825 2.107-3.825h8.098v10.206z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m165.89 99.368h9.864v10.206h-9.864z" fill="#515ca2" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <path d="m156.02 109.57h9.865v10.205h-9.865z" fill="#515ca2" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
        <path d="m165.89 109.57h9.864v10.205h-9.864z"/>
        <path d="m146.16 109.57h9.865v10.205h-9.865z"/>
        <path d="m175.75 109.57h9.865v10.205h-9.865z"/>
      </g>
      <g transform="translate(185.62 99.368)">
        <path d="m0 0h7.758c1.164 0 2.107 1.712 2.107 3.825v6.381h-9.865z" fill="#515ca2"/>
        <path d="m0 0h7.758c1.164 0 2.107 1.712 2.107 3.825v6.381h-9.865z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(193.37 119.78)">
        <path d="m0 0h-7.758v-10.205h9.865v6.38c0 2.113-0.943 3.825-2.107 3.825" fill="#fff"/>
        <path d="m0 0h-7.758v-10.205h9.865v6.38c0 2.113-0.943 3.825-2.107 3.825z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <path d="m175.75 99.368h9.865v10.206h-9.865z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      <g transform="translate(83.271 119.78)">
        <path d="m0 0c-0.791 0-1.434-0.642-1.434-1.434v-35.037c0-0.792 0.643-1.434 1.434-1.434h8.248v37.905z" fill="#515ca2"/>
        <path d="m0 0c-0.791 0-1.434-0.642-1.434-1.434v-35.037c0-0.792 0.643-1.434 1.434-1.434h8.248v37.905z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(106.94 119.78)">
        <path d="m0 0h-15.418v-37.905h15.418c0.792 0 1.434 0.642 1.434 1.434v35.037c0 0.792-0.642 1.434-1.434 1.434" fill="#fff"/>
        <path d="m0 0h-15.418v-37.905h15.418c0.792 0 1.434 0.642 1.434 1.434v35.037c0 0.792-0.642 1.434-1.434 1.434z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(110.63 162.22)">
        <path d="m0 0s-5.339-5.513-7.342-8.274" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(109.01 172.41)">
        <path d="m0 0s-11.764-12.723-16.165-19.107" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
      <g transform="translate(40.108 77.656)">
        <path d="m0 0h204.68" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
      </g>
    </g>
  </g>
</svg>
);

}
const ReturnRefugee = (props: IconProps) => {
  const { height, width, x, y } = props;

  return (
<svg x={x} y={y} width={width ? width : 45} height={height ? height : 33} version="1.1" viewBox="0 0 51.633 30" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="clipPath789">
      <path d="m0 247.5h247.5v-247.5h-247.5z"/>
    </clipPath>
    <clipPath id="clipPath1139">
      <path d="m0 247.5h247.5v-247.5h-247.5z"/>
    </clipPath>
  </defs>
  <g transform="matrix(1.3333 0 0 -1.3333 -9.2116 259.1)">
    <g transform="matrix(.19203 0 0 .19203 7.0047 171.92)">
      <path d="m0 0h158.45z" fill="#eaf2fb"/>
    </g>
    <g transform="matrix(.19203 0 0 .19203 37.431 171.92)">
      <path d="m0 0h-158.45" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
    </g>
    <g transform="matrix(.19203 0 0 .19203 5.582 157.01)">
      <g clip-path="url(#clipPath789)">
        <g transform="translate(124.98 77.656)">
          <path d="m0 0h-14.443v2.635c0 1.193 0.966 2.159 2.158 2.159h8.234c2.237 0 4.051-1.814 4.051-4.052z" fill="#fff"/>
          <path d="m0 0h-14.443v2.635c0 1.193 0.966 2.159 2.158 2.159h8.234c2.237 0 4.051-1.814 4.051-4.052z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(117.76 96.61)">
          <path d="m0 0h-4.682v-13.882c0-1.092 0.886-1.978 1.979-1.978h0.725c1.092 0 1.978 0.886 1.978 1.978z" fill="#515ca2"/>
          <path d="m0 0h-4.682v-13.882c0-1.092 0.886-1.978 1.979-1.978h0.725c1.092 0 1.978 0.886 1.978 1.978z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(93.18 77.656)">
          <path d="m0 0h14.443v2.635c0 1.193-0.966 2.159-2.158 2.159h-8.233c-2.238 0-4.052-1.814-4.052-4.052z" fill="#fff"/>
          <path d="m0 0h14.443v2.635c0 1.193-0.966 2.159-2.158 2.159h-8.233c-2.238 0-4.052-1.814-4.052-4.052z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(100.4 96.61)">
          <path d="m0 0h4.682v-13.882c0-1.092-0.886-1.978-1.978-1.978h-0.725c-1.093 0-1.979 0.886-1.979 1.978z" fill="#515ca2"/>
          <path d="m0 0h4.682v-13.882c0-1.092-0.886-1.978-1.978-1.978h-0.725c-1.093 0-1.979 0.886-1.979 1.978z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(121.85 138.61)">
          <path d="m0 0v-53.634h-25.526l2.759 30.551 0.063 0.59 0.19 2.654c0.042 0.547 0.084 1.074 0.105 1.621v0.38c0 1.073-0.084 2.127-0.211 3.18l-1.642 14.953c-0.274 0.147-0.569 0.295-0.906 0.442-4.149 2.022-11.878 5.771-14.448 14.111-1.958 6.381-0.358 14.111 4.739 22.957 0.885 1.516 2.822 2.022 4.317 1.158 1.517-0.863 2.043-2.801 1.159-4.317-4.191-7.267-5.602-13.311-4.17-17.944 1.748-5.708 7.645-8.572 11.162-10.278 0.316-0.148 0.59-0.295 0.864-0.422 0.126-0.105 0.316-0.189 0.526-0.273 0 0 0.021 0 0.042-0.021 0.632-0.169 1.517-0.211 2.001-0.211h13.458c3.054 0 5.518-2.464 5.518-5.497" fill="#e6e6e6"/>
          <path d="m0 0v-53.634h-25.526l2.759 30.551 0.063 0.59 0.19 2.654c0.042 0.547 0.084 1.074 0.105 1.621v0.38c0 1.073-0.084 2.127-0.211 3.18l-1.642 14.953c-0.274 0.147-0.569 0.295-0.906 0.442-4.149 2.022-11.878 5.771-14.448 14.111-1.958 6.381-0.358 14.111 4.739 22.957 0.885 1.516 2.822 2.022 4.317 1.158 1.517-0.863 2.043-2.801 1.159-4.317-4.191-7.267-5.602-13.311-4.17-17.944 1.748-5.708 7.645-8.572 11.162-10.278 0.316-0.148 0.59-0.295 0.864-0.422 0.126-0.105 0.316-0.189 0.526-0.273 0 0 0.021 0 0.042-0.021 0.632-0.169 1.517-0.211 2.001-0.211h13.458c3.054 0 5.518-2.464 5.518-5.497z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(100.98 156.01)">
          <path d="m0 0c0-1.12-0.908-2.028-2.028-2.028s-2.028 0.908-2.028 2.028 0.908 2.028 2.028 2.028 2.028-0.908 2.028-2.028" fill="#515ca2"/>
          <path d="m0 0c0-1.12-0.908-2.028-2.028-2.028s-2.028 0.908-2.028 2.028 0.908 2.028 2.028 2.028 2.028-0.908 2.028-2.028z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(121.25 156.01)">
          <path d="m0 0c0-1.12-0.908-2.028-2.028-2.028s-2.028 0.908-2.028 2.028 0.908 2.028 2.028 2.028 2.028-0.908 2.028-2.028" fill="#515ca2"/>
          <path d="m0 0c0-1.12-0.908-2.028-2.028-2.028s-2.028 0.908-2.028 2.028 0.908 2.028 2.028 2.028 2.028-0.908 2.028-2.028z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(117.98 154.92)">
          <path d="m0 0c0.094 0.51 0.151 1.04 0.151 1.588 0 0.699-0.075 1.36-0.227 2.003h-1.719l-0.322 0.756c-0.434 1.039-1.474 1.72-2.608 1.72h-8.372c-1.134 0-2.154-0.681-2.589-1.72l-0.321-0.756h-1.72c-0.151-0.643-0.227-1.304-0.227-2.003 0-0.548 0.057-1.078 0.151-1.588-1.625 1.984-2.589 4.498-2.589 7.257 0 6.35 5.141 11.491 11.491 11.491s11.49-5.141 11.49-11.491c0-2.759-0.964-5.273-2.589-7.257" fill="#fff"/>
          <path d="m0 0c0.094 0.51 0.151 1.04 0.151 1.588 0 0.699-0.075 1.36-0.227 2.003h-1.719l-0.322 0.756c-0.434 1.039-1.474 1.72-2.608 1.72h-8.372c-1.134 0-2.154-0.681-2.589-1.72l-0.321-0.756h-1.72c-0.151-0.643-0.227-1.304-0.227-2.003 0-0.548 0.057-1.078 0.151-1.588-1.625 1.984-2.589 4.498-2.589 7.257 0 6.35 5.141 11.491 11.491 11.491s11.49-5.141 11.49-11.491c0-2.759-0.964-5.273-2.589-7.257z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(118.14 156.51)">
          <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-2.098-2.589-5.31-4.233-8.901-4.233s-6.804 1.644-8.902 4.233c-0.094 0.51-0.151 1.04-0.151 1.588 0 0.699 0.076 1.36 0.227 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.373c1.133 0 2.173-0.681 2.607-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003" fill="#fff"/>
          <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-2.098-2.589-5.31-4.233-8.901-4.233s-6.804 1.644-8.902 4.233c-0.094 0.51-0.151 1.04-0.151 1.588 0 0.699 0.076 1.36 0.227 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.373c1.133 0 2.173-0.681 2.607-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(111.66 153.61)">
          <path d="m0 0v-8.778c0-1.422-1.154-2.576-2.575-2.576s-2.575 1.154-2.575 2.576v8.778c0 1.421 1.154 2.575 2.575 2.575s2.575-1.154 2.575-2.575" fill="#515ca2"/>
          <path d="m0 0v-8.778c0-1.422-1.154-2.576-2.575-2.576s-2.575 1.154-2.575 2.576v8.778c0 1.421 1.154 2.575 2.575 2.575s2.575-1.154 2.575-2.575z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(118.14 156.51)">
          <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-0.737-4.233-4.46-7.465-8.901-7.465-4.461 0-8.165 3.232-8.902 7.465-0.094 0.51-0.151 1.04-0.151 1.588 0 0.699 0.076 1.36 0.227 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.373c1.133 0 2.173-0.681 2.607-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003" fill="#515ca2"/>
          <path d="m0 0c0-0.548-0.057-1.078-0.151-1.588-0.737-4.233-4.46-7.465-8.901-7.465-4.461 0-8.165 3.232-8.902 7.465-0.094 0.51-0.151 1.04-0.151 1.588 0 0.699 0.076 1.36 0.227 2.003h1.72l0.321 0.756c0.435 1.039 1.455 1.72 2.589 1.72h8.373c1.133 0 2.173-0.681 2.607-1.72l0.322-0.756h1.719c0.152-0.643 0.227-1.304 0.227-2.003z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(115.99 103.27)">
          <path d="m0 0c-0.131 1.77 1.198 3.311 2.968 3.441 1.77 0.131 3.31-1.198 3.441-2.968 0.131-1.769-1.198-3.31-2.968-3.441s-3.31 1.198-3.441 2.968" fill="#e6e6e6"/>
          <path d="m0 0c-0.131 1.77 1.198 3.311 2.968 3.441 1.77 0.131 3.31-1.198 3.441-2.968 0.131-1.769-1.198-3.31-2.968-3.441s-3.31 1.198-3.441 2.968z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(133.26 85.934)">
          <path d="m0 0-25.384-1.874-1.367 18.514 25.384 1.875z" fill="#e6e6e6"/>
          <path d="m0 0-25.384-1.874-1.367 18.514 25.384 1.875z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(114.09 98.729)">
          <path d="m0 0 10.853 0.801-0.324 4.382-10.853-0.802z" fill="#e6e6e6"/>
          <path d="m0 0 10.853 0.801-0.324 4.382-10.853-0.802z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(107.87 84.06)">
          <path d="m0 0 25.384 1.874-0.276 3.731-25.383-1.875z" fill="#fff"/>
          <path d="m0 0 25.384 1.874-0.276 3.731-25.383-1.875z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(103.13 144.11)">
          <path d="m0 0c0.227-3.081 2.797-5.519 5.953-5.519s5.726 2.438 5.953 5.519" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(115.37 167.9)">
          <path d="m0 0c0-0.751-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(111.4 165.65)">
          <path d="m0 0c0-0.751-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(102.78 167.9)">
          <path d="m0 0c0-0.751-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(101.65 163.62)">
          <path d="m0 0c0-0.751-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(107.18 170.17)">
          <path d="m0 0c0-0.75-0.607-1.358-1.358-1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(105.15 163.62)">
          <path d="m0 0c0 0.751 0.607 1.358 1.358 1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(110.98 168.58)">
          <path d="m0 0c0 0.75 0.608 1.358 1.358 1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(116.51 162.26)">
          <path d="m0 0c0 0.751 0.608 1.358 1.358 1.358" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(99.53 189.26)">
          <path d="m0 0c-0.298 2.207 1.25 4.237 3.457 4.535s4.237-1.25 4.535-3.457-1.25-4.237-3.457-4.535-4.237 1.25-4.535 3.457" fill="#fff"/>
          <path d="m0 0c-0.298 2.207 1.25 4.237 3.457 4.535s4.237-1.25 4.535-3.457-1.25-4.237-3.457-4.535-4.237 1.25-4.535 3.457z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(122.47 168.84)">
          <path d="m0 0-31.653-4.271-3.115 23.088 31.653 4.27z" fill="#fff"/>
          <path d="m0 0-31.653-4.271-3.115 23.088 31.653 4.27z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(97.496 183.42)">
          <path d="m0 0 13.534 1.826-0.738 5.464-13.533-1.827z" fill="#fff"/>
          <path d="m0 0 13.534 1.826-0.738 5.464-13.533-1.827z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(121.85 120.39)">
          <path d="m0 0v-4.865h-22.767l0.063 0.59 0.19 2.653c0.042 0.548 0.084 1.075 0.105 1.622z" fill="#515ca2"/>
          <path d="m0 0v-4.865h-22.767l0.063 0.59 0.19 2.653c0.042 0.548 0.084 1.075 0.105 1.622z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(121.84 138.59)">
          <path d="m0 0v-30.163c0-1.771-1.265-3.207-2.826-3.207-1.56 0-2.825 1.436-2.825 3.207v23.565" fill="#e6e6e6" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(70.249 77.656)">
          <path d="m0 0h-9.18v0.888c0 1.193 0.967 2.159 2.159 2.159h4.446c1.422 0 2.575-1.153 2.575-2.575z" fill="#fff"/>
          <path d="m0 0h-9.18v0.888c0 1.193 0.967 2.159 2.159 2.159h4.446c1.422 0 2.575-1.153 2.575-2.575z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(65.659 89.549)">
          <path d="m0 0h-2.976v-8.823c0-0.694 0.563-1.257 1.258-1.257h0.461c0.694 0 1.257 0.563 1.257 1.257z" fill="#515ca2"/>
          <path d="m0 0h-2.976v-8.823c0-0.694 0.563-1.257 1.258-1.257h0.461c0.694 0 1.257 0.563 1.257 1.257z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(50.037 77.656)">
          <path d="m0 0h9.18v0.888c0 1.193-0.967 2.159-2.159 2.159h-4.446c-1.422 0-2.575-1.153-2.575-2.575z" fill="#fff"/>
          <path d="m0 0h9.18v0.888c0 1.193-0.967 2.159-2.159 2.159h-4.446c-1.422 0-2.575-1.153-2.575-2.575z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(54.627 89.549)">
          <path d="m0 0h2.976v-8.823c0-0.694-0.563-1.257-1.258-1.257h-0.461c-0.694 0-1.257 0.563-1.257 1.257z" fill="#515ca2"/>
          <path d="m0 0h2.976v-8.823c0-0.694-0.563-1.257-1.258-1.257h-0.461c-0.694 0-1.257 0.563-1.257 1.257z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(71.402 105.22)">
          <path d="m0 0h-22.518v19.83c0 2.091 1.696 3.787 3.787 3.787h14.944c2.091 0 3.787-1.696 3.787-3.787z" fill="#fff"/>
          <path d="m0 0h-22.518v19.83c0 2.091 1.696 3.787 3.787 3.787h14.944c2.091 0 3.787-1.696 3.787-3.787z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <path d="m67.837 84.03h-15.388v21.193h15.388z" fill="#e6e6e6" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        <g transform="translate(52.449 141.38)">
          <path d="m0 0c0-0.984-0.798-1.783-1.782-1.783-0.985 0-1.783 0.799-1.783 1.783s0.798 1.782 1.783 1.782c0.984 0 1.782-0.798 1.782-1.782" fill="#515ca2"/>
          <path d="m0 0c0-0.984-0.798-1.783-1.782-1.783-0.985 0-1.783 0.799-1.783 1.783s0.798 1.782 1.783 1.782c0.984 0 1.782-0.798 1.782-1.782z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(71.402 141.38)">
          <path d="m0 0c0-0.984-0.798-1.783-1.783-1.783-0.984 0-1.782 0.799-1.782 1.783s0.798 1.782 1.782 1.782c0.985 0 1.783-0.798 1.783-1.782" fill="#515ca2"/>
          <path d="m0 0c0-0.984-0.798-1.783-1.783-1.783-0.984 0-1.782 0.799-1.782 1.783s0.798 1.782 1.782 1.782c0.985 0 1.783-0.798 1.783-1.782z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(57.629 133.2)">
          <path d="m0 0v-2.88c0-1.392 1.125-2.517 2.517-2.517 1.386 0 2.517 1.125 2.517 2.517v2.88z" fill="#515ca2"/>
          <path d="m0 0v-2.88c0-1.392 1.125-2.517 2.517-2.517 1.386 0 2.517 1.125 2.517 2.517v2.88z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(68.641 143.69)">
          <path d="m0 0c-2.277 1.96-5.251 3.141-8.496 3.141-3.25 0-6.224-1.186-8.507-3.162 0.619 2.304 2.153 4.238 4.186 5.382 0.561 0.323 1.165 0.577 1.799 0.77 0.801 0.239 1.643 0.364 2.522 0.364 3.561 0 6.629-2.112 8.013-5.153 0.197-0.432 0.358-0.879 0.483-1.342" fill="#fff"/>
          <path d="m0 0c-2.277 1.96-5.251 3.141-8.496 3.141-3.25 0-6.224-1.186-8.507-3.162 0.619 2.304 2.153 4.238 4.186 5.382 0.561 0.323 1.165 0.577 1.799 0.77 0.801 0.239 1.643 0.364 2.522 0.364 3.561 0 6.629-2.112 8.013-5.153 0.197-0.432 0.358-0.879 0.483-1.342z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(68.953 141.38)">
          <path d="m0 0c0-4.867-3.941-8.808-8.808-8.808s-8.809 3.941-8.809 8.808c0 0.25 0.011 0.499 0.032 0.744 0.046 0.53 0.135 1.045 0.27 1.544 2.283 1.976 5.257 3.161 8.507 3.161 3.245 0 6.219-1.18 8.496-3.14 0.203-0.739 0.312-1.513 0.312-2.309" fill="#515ca2"/>
          <path d="m0 0c0-4.867-3.941-8.808-8.808-8.808s-8.809 3.941-8.809 8.808c0 0.25 0.011 0.499 0.032 0.744 0.046 0.53 0.135 1.045 0.27 1.544 2.283 1.976 5.257 3.161 8.507 3.161 3.245 0 6.219-1.18 8.496-3.14 0.203-0.739 0.312-1.513 0.312-2.309z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <path d="m67.837 82.45h-15.388v3.16h15.388z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        <g transform="translate(60.143 83.116)">
          <path d="m0 0v15.289" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <path d="m68.95 103.51h-16.501v1.711h16.501z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        <g transform="translate(62.7 82.289)">
          <path d="m0 0h14.884v22.249h-10.321c-2.52 0-4.563-2.044-4.563-4.564z" fill="#e6e6e6"/>
          <path d="m0 0h14.884v22.249h-10.321c-2.52 0-4.563-2.044-4.563-4.564z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <path d="m73.406 107.19h4.178v-2.649h-4.178z" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        <g transform="translate(74.059 94.549)">
          <path d="m0 0h-7.834" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(74.059 86.566)">
          <path d="m0 0h-7.834" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(65.091 173.88)">
          <path d="m0 0h-9.896c-3.948 0-7.148-3.2-7.148-7.148v-10.745c0-3.947 3.2-7.148 7.148-7.148h9.896c3.948 0 7.148 3.201 7.148 7.148v10.745c0 3.948-3.2 7.148-7.148 7.148" fill="#e6e6e6"/>
          <path d="m0 0h-9.896c-3.948 0-7.148-3.2-7.148-7.148v-10.745c0-3.947 3.2-7.148 7.148-7.148h9.896c3.948 0 7.148 3.201 7.148 7.148v10.745c0 3.948-3.2 7.148-7.148 7.148z" fill="none" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <path d="m65.659 173.77h-11.032v3.866h11.032z" fill="#e6e6e6" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        <g transform="translate(65.953 152.84)">
          <path d="m0 0c1.825 0.906 3.079 2.793 3.079 4.965v0.174" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(51.727 165.77)">
          <path d="m0 0v-6.221" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(48.884 122.05)">
          <path d="m0 0v-18.65c0-1.429 1.159-2.588 2.589-2.588s2.588 1.159 2.588 2.588v18.5" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(66.225 122.05)">
          <path d="m0 0v-18.65c0-1.429 1.159-2.588 2.589-2.588 1.429 0 2.588 1.159 2.588 2.588v18.5" fill="#fff" stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
        </g>
        <g transform="translate(139.9 134.26)">
          <path d="m0 0h0.05" fill="none" stroke="#808285" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"/>
        </g>
        <g transform="translate(141.9 134.26)">
          <path d="m0 0h27.722" fill="none" stroke="#808285" stroke-dasharray="0.098, 1.952" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"/>
        </g>
        <g transform="translate(170.6 134.26)">
          <path d="m0 0h0.05" fill="none" stroke="#808285" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"/>
        </g>
      </g>
    </g>
    <text transform="scale(1,-1)" x="38.875862" y="-182.64967" fill="#6d6f71" font-family="'Overpass Light'" font-size=".96014px" font-weight="300" stroke-width=".19203"><tspan x="38.875862 39.337685 39.863842 40.40152 40.939194 41.293484 41.659294 42.159527" y="-182.64967" stroke-width=".19203">country border</tspan></text>
    <g transform="matrix(.19203 0 0 .19203 5.582 157.01)">
      <g clip-path="url(#clipPath1139)">
        <g transform="translate(156.95 167.82)">
          <path d="m0 0h17.87c6.31 0 11.43-5.12 11.43-11.44 0-6.31-5.12-11.43-11.43-11.43h-13.1c-5.27 0-9.71-3.56-11.03-8.4" fill="none" stroke="#515ca2" stroke-dasharray="5, 5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
        </g>
        <g transform="translate(150.33 132.52)">
          <path d="m0 0c0.5-5.85 5.4-10.43 11.38-10.44h13.1c6.32 0 11.44-5.12 11.44-11.43 0-6.32-5.12-11.44-11.44-11.44h-7.359" fill="none" stroke="#515ca2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </g>
        <g transform="translate(168.62 103.2)">
          <path d="m0 0-6.908-3.989 6.908-3.989z" fill="#515ca2"/>
        </g>
      </g>
    </g>
  </g>
</svg>
 );

}

const UnicefIcon = (props: IconProps) => {
  const { height, width, x, y } = props;

  return (
    <svg x={x} y={y} width={width ? width : 45} height={height ? height : 33} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.44 177.52"><defs>
    <clipPath id="clip-path" transform="translate(-4.74 -12.35)"><rect className="cls-1" width="213.93" height="202.23"/></clipPath></defs><title>unicef</title><g id="Layer_2" data-name="Layer 2"><g id="svg2"><g className="cls-2"><path className="cls-3" d="M90,120.61l-.87-.83L91.69,117a45.42,45.42,0,0,1,8.74-7.4c1.94-1.22,1.85-1.13,1.43-1.41a27.22,27.22,0,0,0-5.23-1.7l-1.28-.23-1.18,1.1c-2.46,2.28-4.68,2.93-9.92,2.94a35.31,35.31,0,0,1-13.67-2.62c-2.15-.81-2.15-.82-1.44-1.12a72.35,72.35,0,0,1,8.68-2,81.39,81.39,0,0,1,15-.35,44.75,44.75,0,0,1,9.49,2.14l2.5.87,2.33-.85a44.35,44.35,0,0,1,9.61-2.17,81.88,81.88,0,0,1,15,.38,70,70,0,0,1,8.63,2c.72.3.71.31-1.44,1.12a35.22,35.22,0,0,1-13.66,2.61c-5.23,0-7.24-.58-10-2.92L114,106.2l-1.19.25a26.1,26.1,0,0,0-5.16,1.74c-.23.17-.26.3-.09.38a73,73,0,0,1,6.62,4.77c2,1.72,5.94,6,5.94,6.46s-1.56,1.69-2.1,1.59a11.94,11.94,0,0,1-2.32-2.28,50.67,50.67,0,0,0-10-8.92l-.91-.57-1.25.81a50.83,50.83,0,0,0-10.37,9.47c-1.41,1.8-1.9,1.91-3.15.71M69,103.39a13,13,0,0,1-5.52-1.76c-3.32-1.79-5.49-4-8.44-8.61-1.54-2.4-1.59-2.51-1-2.58.93-.13,4.65,1.3,8.09,3.1,5.79,3,10.21,6,12.21,8.29l1,1.18-.83.17a20.29,20.29,0,0,1-5.51.21m68.46.1-2-.23-1.27-.14.42-.73c.56-1,2.83-2.89,5.85-4.88a94.67,94.67,0,0,1,12.18-6.44c1.72-.58,3.14-.81,3.14-.51a40.51,40.51,0,0,1-4.12,6.27c-2.57,3.13-6.45,5.68-9.55,6.28a19,19,0,0,1-4.67.38m-56.35-1.36c-3.54-.53-6.63-3.06-8.4-6.86-1.39-3-2.78-8.89-2.1-8.89a10.87,10.87,0,0,1,1.89,1.3c5.3,4.16,11.81,10.72,12.88,13l.66,1.38-.55.16a13.13,13.13,0,0,1-4.38-.06m42.85.1c-.65-.13-.57-.62.37-2.2,1.68-2.83,14-14.25,14.59-13.57.24.24-.4,3.68-1.12,6.06q-1.9,6.26-6.34,8.52a13.09,13.09,0,0,1-7.5,1.19M98.26,97.78C81.52,95,68.27,82,64.48,64.85a41.62,41.62,0,0,1-.9-11.24,39.59,39.59,0,0,1,4.25-17.42,52,52,0,0,1,3.29-5.88,51.4,51.4,0,0,1,8.93-9.5,39.89,39.89,0,0,1,33.8-7.37,33.33,33.33,0,0,1,9.24,3.49c11.33,5.86,19.22,16.59,22,29.9.48,2.31.55,3.32.55,8.51,0,6.46-.29,8.56-1.81,13.39a56.66,56.66,0,0,1-5.67,11.64,50.71,50.71,0,0,1-9.41,9.82A43.38,43.38,0,0,1,113,97.41a58.24,58.24,0,0,1-14.76.37M90,88.58c.92-.35,2.81-1.1,4.2-1.65a37,37,0,0,1,8.65-2.54c2.34-.3,3-.62,3.75-1.74s.69-2.06.17-3.68a27.76,27.76,0,0,1-.69-4.09,19.24,19.24,0,0,0-.72-3.84c-.45-1-1.83-2.39-4.16-4.25-2-1.61-2.5-2.45-2.38-4.13a2.81,2.81,0,0,1,.79-2.08,3.09,3.09,0,0,0,.82-2.06c.11-1.16.19-1.31.72-1.39,1-.14,1.2-.51,1.2-2,0-1.25,0-1.34.57-1.34.91,0,1.26-.63.89-1.59-.86-2.16-.56-2.92,1.15-2.92a14.55,14.55,0,0,0,5.22-1.21A26,26,0,0,0,113.62,45c3.66-3.76,6.17-5,10.44-5a12.5,12.5,0,0,1,6.4,1.53,20.53,20.53,0,0,1,10.75,13.18,24.47,24.47,0,0,1,0,9.72,15.19,15.19,0,0,1-4.53,8.11C133,76.38,130.05,77.87,126,78c-2.67.08-2.87.27-2.72,2.63a9.28,9.28,0,0,0,4.2,6.81c1.26.91,1.2.94,4.33-2.17A42.08,42.08,0,0,0,144.11,52a44.14,44.14,0,0,0-5-16.93A14.42,14.42,0,0,0,137.86,33a3.16,3.16,0,0,0-1.37.65c-.64.43-2.14,1.34-3.33,2s-2.18,1.28-2.22,1.31a8,8,0,0,0,.53,1.45l.59,1.4-1-.47a3.55,3.55,0,0,1-1.37-1.08c-.29-.48-.46-.57-.78-.39a3.72,3.72,0,0,1-2-.1c-1.35-.28-1.52-.37-1-.51a13.66,13.66,0,0,0,1.75-.67l1.12-.5L128,34.62a50.65,50.65,0,0,0-4-6.09c-.29-.25-.75-.11-2.45.72-1.15.57-2.73,1.28-3.52,1.58s-1.48.58-1.53.62a35.93,35.93,0,0,0,1,3.61,27.28,27.28,0,0,1,1,3.64,2.63,2.63,0,0,1-.8.26l-.7.14L116,35.64c-1.27-4-.78-3.7-4.9-3-1.32.22-3.12.47-4,.56l-1.61.16v8.24l1.86-.15c1-.09,2.85-.26,4.06-.39s2.45-.23,2.74-.23h.53l-.58.65c-1,1.06-1.39,1.19-5,1.46l-3.47.27-.08,1.44-.07,1.43h-1.65V33.38l-1.26-.16a19.81,19.81,0,0,0-2-.16c-.6,0-.85-.17-1.24-.88l-.5-.87,2.51.16,2.51.16V28.08c0-2.63-.08-3.57-.3-3.64s-1.06-.21-2-.37-2-.35-2.32-.43c-.59-.14-.71,0-1.85,2.19-.67,1.29-1.25,2.45-1.3,2.58s-1.34-.6-1.36-.89a25.33,25.33,0,0,1,1.18-2.38c.85-1.59,1.11-2.28.9-2.42s-1-.65-1.92-1.2l-1.63-1L91,22.42c-2.24,1.9-2.26,1.91-3.26,1.7l-1-.21,2.56-2.25a20.16,20.16,0,0,0,2.5-2.4,10.84,10.84,0,0,0-1-1.22L89.84,17l-1.24.55A41.55,41.55,0,0,0,75,28a42.79,42.79,0,0,0-9.64,22.6c-.08.9-.2,2.05-.26,2.57s0,.94.13.94a11.38,11.38,0,0,0,2-1.4,38.4,38.4,0,0,1,3.42-2.41c3.63-2.18,3.92-2.9,3-7.46a21,21,0,0,1-.22-7.56A11.72,11.72,0,0,1,81,26.54a8.62,8.62,0,0,1,4-.44,10.26,10.26,0,0,1,4.35.86c3.73,1.55,7.3,4.62,8.84,7.6a6.05,6.05,0,0,1,.84,3.88c0,2.51-.43,3.8-2.15,6.4-.89,1.35-.9,1.38-.74,3.16l.15,1.81-.73.39a1.08,1.08,0,0,0-.72,1.13,1.24,1.24,0,0,1-.34.93,1.26,1.26,0,0,0-.42.83.71.71,0,0,1-.62.7,2.41,2.41,0,0,0-1.16.92c-1.1,1.5-2.37,1.69-5.79.83-2.11-.52-2.26-.53-3-.13-1.14.56-1.23,1.2-.65,4.24.61,3.19,1.48,9.62,1.48,10.95,0,2.47,1.08,3.16,5.75,3.65l3.36.35,1.37-1c1.19-.87,1.52-1,2.46-.94s1.07.14,1,.65,0,.56,1.2.41c1-.13,1.35-.08,1.61.24.49.62.21,2.87-.55,4.49-1.08,2.32-2.76,3-5.5,2.3a5.61,5.61,0,0,0-3.45,0,35,35,0,0,1-7.77,1c-2,0-2.48-.09-3.56-.64l-1.24-.64-.37.59a7.38,7.38,0,0,0-1,3.52c0,1,0,1.1,2,2.76a17.88,17.88,0,0,0,2.58,1.88,18.74,18.74,0,0,0,3.28.1A11.24,11.24,0,0,0,90,88.58m45.51-56.36,1.39-.93-1.08-1.43c-.6-.79-2.11-2.5-3.37-3.81-1.73-1.79-2.37-2.32-2.62-2.13-1.9,1.45-3.93,2.95-4.19,3.11s0,.76,1.23,2.55c.85,1.29,1.95,3.11,2.44,4.05l.9,1.69,2-1.08c1.07-.6,2.58-1.51,3.34-2m-24-1.31a16.39,16.39,0,0,0,2.32-.58c.23-.14-.06-.93-1.15-3.16-1.79-3.64-1.83-3.71-2.62-3.49-.34.1-1.48.31-2.54.47l-1.91.29-.07,3.6-.07,3.59,2-.16c1.1-.09,2.91-.34,4-.56m6.14-1.74c2.59-1,4.86-2.17,4.86-2.47s-3.32-3.69-5.1-5.12L116,20.49l-.66.49A17.41,17.41,0,0,1,113.62,22c-.59.31-1.12.6-1.18.65a58.9,58.9,0,0,0,3.39,7.09,12.2,12.2,0,0,0,1.8-.61m8.8-4.82a11.54,11.54,0,0,0,2-1.74c.12-.41-4.19-3.34-6.8-4.62l-2.09-1-1.05,1.21-1.06,1.2.79.64a45.68,45.68,0,0,1,5.09,4.89c.35.49.77.88.93.88a11.9,11.9,0,0,0,2.19-1.44m-22.64-4.81a13.56,13.56,0,0,0-.2-3.26c-.1,0-.45.37-.77.82a44.78,44.78,0,0,0-3.11,4.7c0,.18.57.34,3,.83,1.1.23,1.08.31,1.08-3.09m4.61,2.71c.63-.14,1.14-.37,1.14-.51a30.47,30.47,0,0,0-3.24-4.87l-.81-1v6.9l.9-.15c.49-.08,1.41-.27,2-.41M99.05,19.6c.6-.93,1.44-2.17,1.86-2.75s.64-1.07.49-1.07c-.81,0-6.56,3.42-6.35,3.78a13.63,13.63,0,0,0,2.77,1.73,9.86,9.86,0,0,0,1.23-1.69m13.88.9a4.58,4.58,0,0,0,1.41-1c0-.5-6.09-4-6.39-3.64a12.41,12.41,0,0,0,1.48,2.47c.88,1.28,1.66,2.47,1.73,2.65.15.42.16.42,1.77-.48M94.51,17.57c.55-.4,1.87-1.19,2.92-1.77,2.34-1.29,2.67-1.58,1.55-1.38a52.53,52.53,0,0,0-6,1.41l-1.53.49.92,1a8,8,0,0,0,1,1,9.09,9.09,0,0,0,1.09-.71m22.7-.46c.42-.56.45-.7.16-.87-.9-.53-7.83-2.13-7.83-1.82,0,0,1,.65,2.32,1.36s2.69,1.56,3.15,1.88c.95.67,1.35.57,2.2-.55M68.12,94a15.7,15.7,0,0,1-4.81-5.6c-1.38-2.81-1.6-3.91-1.6-7.91a20.51,20.51,0,0,1,.56-5.82A10.4,10.4,0,0,1,63,72.36a5.13,5.13,0,0,1,.95,1.25c2.37,3.79,5.58,14.81,5.6,19.22a11.68,11.68,0,0,1-.09,2A4.41,4.41,0,0,1,68.12,94m71.78-.1c-.55-3.63,3.31-17.18,5.93-20.77l.62-.85.27.72a26.21,26.21,0,0,1,.86,11.37A14.28,14.28,0,0,1,143.49,92a22.07,22.07,0,0,1-2.69,2.43l-.74.44ZM60.05,90.77a19.48,19.48,0,0,1-6.32-4.48,28.8,28.8,0,0,1-6.45-9.77c-.82-2-1.65-5.1-1.43-5.34s3.24,2.13,5.27,4.18c4.77,4.79,9.59,11.45,11,15.22.5,1.32.4,1.33-2.09.19m87.36-.4c1.21-3.33,5.49-9.27,10.18-14.14,2.89-3,5.75-5.37,6.07-5s-1.13,4.7-2.11,6.73a29.51,29.51,0,0,1-8.29,10.62,23.1,23.1,0,0,1-5.65,2.94l-.66.16ZM57.61,79.74A20,20,0,0,1,56.1,76.5a11.81,11.81,0,0,1-.61-4.89,13.15,13.15,0,0,1,.79-5.51,28.82,28.82,0,0,1,3.36-6.84c.37-.45.4-.42.71.62,1.11,3.79.23,17.17-1.35,20.38l-.47,1Zm92.76.23c-1.15-2.83-1.85-9-1.69-14.93a35.86,35.86,0,0,1,.44-5.25l.32-1.18.69,1.06c3.16,4.86,4.57,10.58,3.68,14.94a18.86,18.86,0,0,1-2.47,6l-.47.59ZM51.64,73.24a17.88,17.88,0,0,1-5-6.51C45,63.39,44.54,61,44.39,56a20.54,20.54,0,0,1,.08-4.19c.84,0,5.16,8.36,6.91,13.35,1.54,4.39,2.52,9.18,1.87,9.17a9.8,9.8,0,0,1-1.61-1.12m104.42.16a36.94,36.94,0,0,1,2-8.17C160,59.92,164.33,51.57,165,52c.33.22,0,7.47-.42,9.52a21.5,21.5,0,0,1-4.38,9.41,22.71,22.71,0,0,1-4,3.43c-.1,0-.19-.44-.19-1M53.37,66.21a16.67,16.67,0,0,1-.51-1.77,18.33,18.33,0,0,1,0-7.23,22.94,22.94,0,0,1,5.65-9.76L60,46l-.15,2.25a43.33,43.33,0,0,1-4.23,14.65c-1.23,2.56-2,3.72-2.22,3.36M155,65c-2.68-4.35-5.42-13.24-5.39-17.46V46l1.85,2a23.49,23.49,0,0,1,4.77,7.88,16,16,0,0,1,0,9.86l-.31.75Zm3.47-9a39.61,39.61,0,0,1-.17-6.85q.27-9.51,2.05-13.88l.45-1.09.73,2.38c1.6,5.27,1.84,11.12.62,15.15a21.1,21.1,0,0,1-2.69,5.35l-.67.85ZM49.6,56.53c-2.44-3.46-3.46-8.29-2.9-13.73a34,34,0,0,1,1.79-7.93c.33-.66.34-.64.95,1.36A53.11,53.11,0,0,1,51.27,51c0,3.26-.37,6.57-.73,6.57a4.1,4.1,0,0,1-.94-1.06m3.73-7.6c-.34-1.86.35-5.14,1.62-7.72a19.59,19.59,0,0,1,6.47-7,10.19,10.19,0,0,1,2.22-1.34c.25.26-1.42,4.5-2.81,7.09-2.21,4.17-4.83,7.85-6.55,9.22l-.8.64Zm101.1-.57a44.23,44.23,0,0,1-7.82-13.78,11.35,11.35,0,0,1-.5-2c.16-.17,3.66,2.44,5,3.73a18.36,18.36,0,0,1,4.11,6c.72,1.85,1.22,5.58.91,6.79l-.22.86ZM52.11,39.48a14.12,14.12,0,0,1,.66-6.37c1-2.67,2.12-4.28,4.81-7.17l2.6-2.77L60,24.42a38.38,38.38,0,0,1-2.15,8,20.36,20.36,0,0,1-4,6.53l-1.59,1.78Zm104.28.38c-2.78-2.48-5.41-7.81-6.58-13.31-.78-3.66-.76-3.67,1.59-1.25a27.11,27.11,0,0,1,5.39,7.92,15.58,15.58,0,0,1,.55,6.52l-.2.79Z" transform="translate(-4.74 -12.35)"/><path className="cls-3" d="M15.23,189.67a12.88,12.88,0,0,1-9.33-8.6c-1.08-3.09-1-2.22-1.1-19.78l-.06-15.94h7.9l0,15.1.05,15.09.43,1.64C14.42,182,17,184,21.67,184a9.88,9.88,0,0,0,7.44-3,10.79,10.79,0,0,0,2.63-5.26c.85-3.47.89-4.34.89-17.86V145.35h7.89v43.4H33v-3.2a20.13,20.13,0,0,0-.13-3.2,3.68,3.68,0,0,0-.77,1,15.09,15.09,0,0,1-12.95,6.55,16.62,16.62,0,0,1-3.87-.19m106.08,0c-6.44-1-10.5-4-13.07-9.57A26.47,26.47,0,0,1,106,169.76c-.57-11.44,3-19.75,10.12-23.48a17.34,17.34,0,0,1,8.78-2,15.28,15.28,0,0,1,9.88,3A14.94,14.94,0,0,1,140.51,158l.1,1.3h-7.78v-.51a11.5,11.5,0,0,0-2.43-6.3c-2.36-2.61-6.83-3.18-10.4-1.35a10.12,10.12,0,0,0-3.64,3.68c-1.69,3.14-2.54,8.15-2.33,13.73.23,6.13,1.47,10.18,3.89,12.7a8.24,8.24,0,0,0,6.45,2.65c4.41,0,7.4-2.53,8.46-7.15a13.35,13.35,0,0,0,.32-1.93v-.55H141l-.13,1.13a15.73,15.73,0,0,1-9.51,13.06,15.32,15.32,0,0,1-6.66,1.2c-1.59,0-3.11,0-3.38,0m37.53-.22c-7.68-1.44-12.37-6.9-13.86-16.16a51,51,0,0,1-.25-9.43c.62-6.15,2.58-11,5.88-14.38a15.21,15.21,0,0,1,4.72-3.47,20.61,20.61,0,0,1,18.87,1.15,16.93,16.93,0,0,1,4.67,4.93c2.12,3.61,2.93,7.22,2.93,13.17v3.32l-14.54,0-14.54.05-.05,1.26a20.91,20.91,0,0,0,.14,2.86c.91,7.67,5.28,11.76,11.87,11.1,4.52-.46,7-2.49,8.09-6.74a10.78,10.78,0,0,0,.33-1.63v-.38h8.22v.39a14.38,14.38,0,0,1-.34,1.78,15.27,15.27,0,0,1-10.83,11.52,27.3,27.3,0,0,1-11.31.62m14.78-28.1a12.62,12.62,0,0,0-3-8.31,10.32,10.32,0,0,0-13.61-.73,13,13,0,0,0-4.14,9.08l-.09,1.64,10.45,0,10.45,0Zm-125,5.72v-21.7h7.57v3.2a18.09,18.09,0,0,0,.14,3.19,3.61,3.61,0,0,0,.72-1,13.94,13.94,0,0,1,7.95-6c1.31-.42,1.64-.46,4.24-.46a17.19,17.19,0,0,1,4.18.3c6.29,1.43,10.07,5.2,11,11,.2,1.21.24,4,.24,17.31v15.88H76.93V174.49c0-15.43,0-16.3-.87-18.6-1.3-3.6-4.25-5.49-8.56-5.49a9.94,9.94,0,0,0-7.9,3.43,6.94,6.94,0,0,0-2,2.79c-1.19,3-1.32,5-1.33,20.06v12.07H48.58ZM92.07,167V145.35H100v43.23H92.07Zm98.71,2.91,0-18.72-3.5,0-3.51-.05v-5.54l3.51,0,3.5,0,.09-5.88c.1-6.52.15-6.86,1.22-9.15a11.28,11.28,0,0,1,3.77-4.19,16.57,16.57,0,0,1,2.33-1c3.14-1.1,6.45-1.13,10.67-.11.36.09.37.11.37,3.46v3.37l-.77-.12a29,29,0,0,0-3.1-.13c-2.91,0-4.28.35-5.4,1.44-1.28,1.22-1.37,1.7-1.37,7.46v5h9.51v5.55h-9.51v37.51h-7.73ZM91.43,130.8v-4.46h9.18v8.92H91.43Z" transform="translate(-4.74 -12.35)"/></g></g></g></svg>
  );
}

const FAOIcon = (props: IconProps) => {
  const { height, width, x, y } = props;
  return (
<svg version="1.1" x={x} y={y} width={width ? width : 45} height={height ? height : 43}
	 id="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
<g>
	<g>
		<path className="st1" d="M46,165c0-39.5,0-79-0.1-118.5c0-3,0.6-3.6,3.6-3.6c78,0.1,156,0.1,234,0c3,0,3.6,0.6,3.6,3.6
			c-0.1,79.3-0.1,158.7,0,238c0,3-0.6,3.6-3.6,3.6c-78-0.1-156-0.1-234,0c-3,0-3.6-0.6-3.6-3.6C46,244.7,46,204.8,46,165z"/>
		<path className="st2" d="M49.4,165.3c1.9-68.7,55.1-120.7,121.8-118c64.4,2.6,114,58.2,111.8,124c-2.2,63.5-56.7,115.5-120.5,113.4
			C99,282.6,49.4,229.8,49.4,165.3z"/>
		<path className="st1" d="M138.8,201.6c-0.3,6.1,0.6,11.9,3.2,17.5c2.4,5.3,6.2,9.1,11.7,10.9c5.9,1.9,8.6,5.9,8.5,12
			c-0.1,8.2-0.3,16.3-0.3,24.5c0,3.8-1.5,5.2-5.5,4.7c-32.5-3.7-57.8-19.2-76.1-46.1C51.7,182.8,57.8,125.7,94.2,90
			c2.9-2.8,3.9-3,5.4,1.1c12.6,33,25.3,65.9,38.2,98.8C139.4,193.8,138.9,197.6,138.8,201.6z"/>
		<path className="st1" d="M169.9,253.9c0.3-6.4-0.1-10.8,0.7-15.3c0.7-3.6,2.6-6,5.8-7.6c13.8-6.8,19.1-16.3,17.2-31.7
			c-0.4-3.7,0.1-6.8,1.4-10.2c12.7-32.6,25.3-65.1,37.8-97.8c1.5-4,2.6-4.5,5.6-1.2c28.9,30.4,39,66.1,27,106.3
			c-11.7,39.4-38.9,63.8-79,73.3c-3.9,0.9-7.9,1-11.9,1.6c-2.5,0.3-3.6-0.6-3.7-3.3C170.6,262.6,170.1,257.3,169.9,253.9z"/>
		<path className="st1" d="M166.2,161.4c-0.8-5.9-4.3-9.6-8.6-12.7c-3-2.2-4.9-5.3-6.5-8.7c-9.7-21.4-19.3-42.8-29.3-64
			c-1.8-3.9-0.9-5.3,2.8-6.9c28.2-12,56.2-11.8,84.2,0.5c2.7,1.2,3.4,2.3,2.1,5.2c-10.2,22.1-20.2,44.2-30.2,66.3
			c-1.4,3.1-3.5,5.7-6.2,7.7C170.3,152,166.9,155.6,166.2,161.4z"/>
		<path className="st3" d="M166,218c-0.3-9.1-6.6-12.8-13.1-16.4c-3.9-2.2-6.6-5.6-8.3-9.7c-10.7-25.8-21.3-51.7-32-77.6
			c-3.6-8.6-7.2-17.2-10.7-25.8c-1.6-3.8-0.1-6.9,3.7-8.1c3-1,2.7,1.8,3.3,3.2c8.1,20.1,16.2,40.2,24.3,60.3c2,4.9,4,9.9,6,14.8
			c2.5,6.1,4.6,12.3,5.2,19.1c0.9,9.9,6.1,17.7,15.1,22.8c4.9,2.8,9.4,2.5,14.1-0.3c8.5-5,13.4-12.5,14.4-22.2
			c0.7-5.9,2-11.4,4.3-16.8c10.3-25.3,20.4-50.7,30.7-76c0.7-1.8,0.1-6.1,4-4.6c3.2,1.2,5.6,3.2,3.6,8
			c-13.8,32.5-27.4,65.1-40.6,97.8c-3.2,8-7.5,14.3-15.3,18.1C169.3,207.1,167.5,212.1,166,218z"/>
		<path className="st3" d="M166.2,187.9c-1.1-6.5-5.2-9.9-10-12.9c-3.8-2.3-6.4-5.7-8.2-9.8c-12.3-28.2-24.5-56.5-37-84.7
			c-2.1-4.7,2-4.8,4-6.3c2.9-2.2,3.2,0.8,3.9,2.4c9.7,22.5,19.4,45,29.2,67.4c1.4,3.3,0.7,6.6,0.8,9.9c0.3,9.5,5.2,15.9,13.3,20.2
			c2.7,1.4,5.3,1.4,8.1,0c8.1-4.1,13.5-10.5,13.3-19.6c-0.2-8.3,2.9-15.3,6-22.4c7.8-18.4,15.9-36.7,23.9-55c0.7-1.6,0.6-5.1,4.1-3
			c2.5,1.5,5.9,2.2,3.7,6.9c-9.5,20.9-18.6,42-27.8,63.1c-2.9,6.7-5.8,13.5-8.6,20.2c-1.8,4.5-4.7,8.1-8.7,10.7
			C171.4,178.1,167.2,181.5,166.2,187.9z"/>
		<path className="st4" d="M77.9,149c0-6.8,0.1-13.7-0.1-20.5c-0.1-2.8,0.7-3.8,3.6-3.8c7.3,0.2,14.7,0.2,22,0c3.5-0.1,3.6,1.8,3.6,4.4
			c0,2.5-0.3,4.2-3.4,4c-3.8-0.2-7.7,0.1-11.5-0.1c-2.7-0.1-3.3,0.9-3.4,3.5c-0.3,7.6-0.4,7.6,7.2,7.6c1.8,0,3.7,0.2,5.5,0
			c4-0.5,4.9,1.1,5.1,5c0.2,4.8-2.8,3.6-5.2,3.6c-12.6,0.2-12.5,0.1-12.6,12.8c0,3.2,1.9,7.4-4.7,7.4c-5.1,0-6.6-1.4-6.2-6.4
			C78.3,160.7,77.9,154.8,77.9,149z"/>
		<path className="st5" d="M116.5,247.7c0.1-3.5-6.6-8.3-9.8-6.8c-1.9,0.9-3.4,1-4.1-0.8c-0.7-1.7,1.4-1.9,2.3-2.5
			c4.3-2.6,8.6-5,12.9-7.5c1.1-0.6,2.2-1.3,3.7-0.5c1.6,1,1.7,2.4,1.4,3.9c-0.9,4.9-1.8,9.8-2.8,14.7c-0.3,1.1,0.7,3.5-1.8,3.2
			C116.2,251.2,115.7,249.6,116.5,247.7z"/>
		<path className="st5" d="M81,209c-1.6,0.6-2-0.1-2.5-0.8c-0.6-1-0.5-1.9,0.6-2.5c4.8-2.5,9.7-5.1,14.5-7.6c1.4-0.7,2.1,0.2,2.7,1.3
			c1.1,2.2,2.4,4.4,3.5,6.6c0.6,1.1,1.2,2.1-0.4,2.8c-1.2,0.6-1.8-0.3-2.3-1.2c-0.1-0.1-0.1-0.3-0.2-0.4c-1.6-1.4-1.2-5.9-4.9-3.7
			c-3.7,2.1,0.5,4,0.8,6.1c0.1,1,0.6,1.9-0.5,2.6c-1.1,0.8-2,0.2-2.3-0.8c-1.7-5.1-4.5-5.7-8.6-2.5C81.1,209.1,80.8,209.1,81,209z"
			/>
		<path className="st6" d="M134.6,259c-1.6-0.1-1.9-1.2-1.3-3c1.1-3.1,2.1-6.3,3.3-9.4c1-2.6,1.4-4.7-2.2-5.6c-1.2-0.3-2.9-0.8-2.3-2.6
			c0.8-2.3,2.4-0.9,3.7-0.4c3.3,1.2,6.6,2.3,9.8,3.6c1.1,0.4,3,0.4,2.3,2.5c-0.5,1.5-2,1.3-3,0.8c-3.2-1.6-4,0.4-4.8,2.9
			c-0.9,3-2,6-3.1,9C136.8,257.7,136.7,259,134.6,259z"/>
		<path className="st6" d="M107.9,217.8c0,1.3-0.9,1.8-1.6,2.4c-3.5,3-7.1,6-10.6,9.1c-1.2,1-2.3,2-3.7,0.2c-1.3-1.7,0.2-2.4,1.1-3.2
			c3.6-3.2,7.3-6.3,10.9-9.4C105.8,215.5,107.1,215.8,107.9,217.8z"/>
		<path className="st7" d="M220.1,148.6c-0.2-4.2,0.5-8.3,2-12.2c3-8.1,9.3-12.4,18-12.4c8.6,0,15.1,4.4,18,12.5
			c2.9,8.1,2.9,16.4,0,24.5c-3,8.2-9.1,12.4-18,12.4c-8.8,0-14.9-4.1-17.9-12.4C220.6,156.9,219.9,152.8,220.1,148.6z"/>
		<path className="st8" d="M222.8,226.7c3.3,3.5,5.7,6,8,8.6c0.9,0.9,2.1,1.9,0.7,3.4c-1.5,1.5-2.3,0.1-3.2-0.8
			c-3.2-3.2-6.4-6.3-9.4-9.6c-0.9-1-3.4-1.6-1.7-3.8c1.3-1.7,3-1.9,4.9-1.3c3.4,1,6.9,2,11,3.2c-1.9-3.4-4.5-4.9-6.6-7
			c-1-1-2.9-1.6-1-3.4c1.5-1.5,2.4-0.2,3.3,0.7c3.4,3.1,6.9,6.3,10.2,9.5c0.9,0.8,2.6,1.4,1.5,3.1c-1,1.5-2.3,2.2-4.2,1.6
			C232.2,229.4,228.1,228.3,222.8,226.7z"/>
		<path className="st9" d="M204.1,236.1c-0.2-1.2,0.1-2.3,1.2-3c1.4-0.9,2.5-0.2,3.6,0.6c4.1,3.1,8.3,6.1,12.4,9.3
			c0.8,0.6,2.4,1.2,1.4,2.7c-0.9,1.4-2,1.1-3.4,0.4c-4.1-1.9-9.1,1.3-9.4,5.9c-0.1,1.3-0.4,2.4-1.7,2.7c-1.7,0.4-1.8-1-2-2.1
			C205.5,247,204.8,241.6,204.1,236.1z"/>
		<path className="st10" d="M191.9,240c3.1-0.1,4.9,1.6,5.9,4.4c1,3.1,0,5.9-2.9,7.1c-3.3,1.4-4.9,3-3,6.6c0.5,0.9,0.9,2.4-0.7,2.9
			c-1.7,0.6-2.4-0.6-2.8-1.9c-1-3.5-1.9-7-2.9-10.5C183.5,242.3,185.2,240,191.9,240z"/>
		<path className="st5" d="M238,193.8c0.2-0.7,0.5-2.1,1.1-3.5c0.5-1.2,1-2.7,2.8-2.1c2,0.8,0.8,2,0.3,3.2c-0.6,1.5-1.7,3.2,0.3,4.4
			c1.6,0.9,2.7-0.4,3.9-1.4c1.1-1,2.2-2.1,3.5-2.7c3.2-1.5,5.9-0.5,7.7,2.3c1.6,2.5,0.5,8.4-1.7,9.6c-0.5,0.3-1.3,0.3-1.8,0.1
			c-0.8-0.3-1.2-1.1-0.6-2c0.4-0.7,0.9-1.4,1.2-2.2c0.6-1.5,0.7-3-0.7-4c-1.5-1.1-2.8-0.3-4,0.8c-1.3,1.2-2.6,2.7-4.2,3.4
			C242,201.4,238.2,198.7,238,193.8z"/>
		<path className="st11" d="M250.1,215.3c-0.5,1.6-1.2,2.6-3.2,1.4c-4.4-2.7-8.9-5.2-13.3-7.9c-1-0.6-2.1-1.2-1.3-2.7
			c0.8-1.4,1.8-1.2,2.9-0.5c4.4,2.6,8.9,5.2,13.3,7.8C249.3,213.9,250,214.3,250.1,215.3z"/>
		<path className="st12" d="M166.2,72.9c6.1-1.6,8.2,1.4,9.6,6.8c3,12.3,6.4,24.5,10,36.6c1.1,3.8,0,4.3-3.5,4.5c-5.1,0.4-8-1-8.3-6.4
			c-0.2-3.8-2.4-5.1-6-4.6c-1.1,0.2-2.4,0.2-3.5,0c-4-0.6-6,0.9-6.8,5c-1.2,5.7-3.9,7-9.7,5.8c-2-0.4-1.9-1.4-1.5-2.8
			c4-14.3,8-28.5,12.1-42.8C159.8,70.8,163.8,73.7,166.2,72.9z"/>
		<path className="st12" d="M175.2,135.7c0,8.1-3.8,12.4-9.4,12.5c-5.5,0-9.7-4.4-9.5-10.6c0.2-6.7,3.9-11.8,8-16.7
			c0.9-1.1,2-1.2,2.9-0.1C171.2,125.8,175,130.8,175.2,135.7z"/>
		<path className="st13" d="M118.6,234.2c1,2.7-0.8,4.9-0.8,7.6c-2.5-0.9-5.6-2-5.2-4C113,235.9,116,234.6,118.6,234.2z"/>
		<path className="st14" d="M248.8,148.4c-0.2,4-0.5,7.8-1.9,11.4c-1.3,3.1-3.3,5.4-7.1,5.3c-3.5-0.1-5.6-2-6.7-5
			c-2.8-7.6-2.6-15.4,0-23c1-3,3.2-5,6.7-5.1c3.5-0.1,5.5,2,6.9,4.9C248.4,140.6,248.5,144.6,248.8,148.4z"/>
		<path className="st15" d="M208.1,237.8c2.5,1.4,5.2,2.2,5.3,4.8c0.1,1.1-2.7,2.8-3.9,2.2C207.1,243.4,208.1,240.7,208.1,237.8z"/>
		<path className="st16" d="M194.2,246.3c-0.1,2.2-1.7,3.4-3.5,3.4c-2.3,0.1-2-2.3-2.4-3.7c-0.6-1.9,1.1-2.1,2.4-2.2
			C192.4,243.6,194,244,194.2,246.3z"/>
		<path className="st17" d="M166.6,81.7c1.2,5.7,2.4,11.3,3.6,17c0.2,1,1.1,2.7-0.6,2.9c-2.4,0.4-5,0.3-7.4,0c-1.6-0.2-0.9-1.8-0.7-2.9
			c1.3-5.7,2.6-11.5,3.8-17.2C165.8,81.6,166.2,81.7,166.6,81.7z"/>
	</g>
</g>
</svg>
  );
}

export {
  IDPsInCamps,
  NonDisplaced,
  IDPsReturnees,
  Nomade,
  IDPsOutOfCamp,
  ReturnRefugee,
  UnicefIcon,
  FAOIcon,
  UNHabitIcon,
  UNHCRIcon,
  UNDPIcon,
  IOMIcon
}
