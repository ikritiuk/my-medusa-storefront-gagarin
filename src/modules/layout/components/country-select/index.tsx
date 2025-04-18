"use client"

import { translateCountryToRussian } from "../../../common/utils/utils"
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react"
import { Fragment, useEffect, useMemo, useState } from "react"
import ReactCountryFlag from "react-country-flag"
import { StateType } from "@lib/hooks/use-toggle-state"
import { usePathname } from "next/navigation"
import { updateRegion } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"

type CountryOption = {
  country: string
  region: string
  label: string
}

type CountrySelectProps = {
  toggleState: StateType
  regions: HttpTypes.StoreRegion[]
}

const DEFAULT_COUNTRY_CODE = "ru" // fallback

const CountrySelect = ({ toggleState, regions }: CountrySelectProps) => {
  const [current, setCurrent] = useState<CountryOption | undefined>(undefined)
  const pathname = usePathname()

  const { state, close } = toggleState

  const options = useMemo(() => {
    return regions
      ?.flatMap((r) =>
        r.countries?.map((c) => ({
          country: c.iso_2,
          region: r.id,
          label: c.display_name,
        }))
      )
      .sort((a, b) => (a?.label ?? "").localeCompare(b?.label ?? ""))
  }, [regions])

  useEffect(() => {
    // Optionally: read default region from cookie/localStorage
    const defaultCode = DEFAULT_COUNTRY_CODE
    const option = options?.find((o) => o.country === defaultCode)
    setCurrent(option)
  }, [options])

  const handleChange = (option: CountryOption) => {
    // ⛔ Do NOT redirect based on URL anymore
    updateRegion(option.country, pathname) // still updates region in cart/session
    setCurrent(option)
    close()
  }

  return (
    <div>
      <Listbox as="span" onChange={handleChange} value={current}>
        <ListboxButton className="py-1 w-full">
          <div className="txt-compact-small flex items-start gap-x-2">
            <span>Доставка в:</span>
            {current && (
              <span className="txt-compact-small flex items-center gap-x-2">
                <ReactCountryFlag
                  svg
                  style={{ width: "16px", height: "16px" }}
                  countryCode="ru"
                />
                {translateCountryToRussian(current.label)}
              </span>
            )}
          </div>
        </ListboxButton>
        <div className="flex relative w-full min-w-[320px]">
          <Transition
            show={state}
            as={Fragment}
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions
              className="absolute -bottom-[calc(100%-36px)] left-0 xsmall:left-auto xsmall:right-0 max-h-[442px] overflow-y-scroll z-[900] bg-white drop-shadow-md text-small-regular uppercase text-black no-scrollbar rounded-rounded w-full"
              static
            >
              {options?.map((o, index) => (
                <ListboxOption
                  key={index}
                  value={o}
                  className="py-2 hover:bg-gray-200 px-3 cursor-pointer flex items-center gap-x-2"
                >
                  <ReactCountryFlag
                    svg
                    style={{ width: "16px", height: "16px" }}
                    countryCode={o?.country ?? ""}
                  />
                  {translateCountryToRussian(o?.label)}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CountrySelect
