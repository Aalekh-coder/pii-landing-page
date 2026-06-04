 <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu color="white" />
            </SheetTrigger>
            <SheetContent
              className="bg-black text-white border-l border-white/20 "
            >
              <SheetHeader className="mb-6 hidden">
                <SheetTitle className="text-white text-2xl ">
                  Navigation
                </SheetTitle>
                <SheetDescription className="text-gray-400">
                  Explore our services.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 py-4 px-5 md:px-14">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="text-xl font-semibold hover:text-gray-300 transition-colors"
                  >
                    Home
                  </Link>
                </SheetClose>

                {/* Training Collapsible */}
                <div>
                  <button
                    onClick={() => toggleMobileSection("training")}
                    className="w-full flex items-center justify-between text-xl font-semibold mb-3 hover:text-blue-400 transition-colors"
                  >
                    Training
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${openMobileSection === "training" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "training" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-6 flex flex-col gap-4 pb-4">
                          <SheetClose asChild>
                            <Link
                              href="/training/osint"
                              className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors"
                            >
                              <Search size={20} className="text-blue-500" />{" "}
                              Osint training
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/training/cyber-crime"
                              className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors"
                            >
                              <ShieldAlert
                                size={20}
                                className="text-blur-500"
                              />{" "}
                              Cyber Crime Training
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/training/cyber-awareness"
                              className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors"
                            >
                              <BookOpen size={20} className="text-blue-500" />{" "}
                              Cyber Awareness
                            </Link>
                          </SheetClose>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Vertical Collapsible */}
                <div>
                  <button
                    onClick={() => toggleMobileSection("vertical")}
                    className="w-full flex items-center justify-between text-xl font-semibold mb-3 hover:text-blue-400 transition-colors"
                  >
                    Vertical
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${openMobileSection === "vertical" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "vertical" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-6 flex flex-col gap-4 pb-4 overflow-scroll">
                          {serviceSectors.map((sector) => (
                            <SheetClose key={sector.label} asChild>
                              <Link
                                href={`/vertical/${sector.label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                                className="flex gap-3 text-lg hover:text-blue-400 transition-colors items-start"
                              >
                                <div className="w-8 h-8 flex items-center justify-center text-blue-400">
                                  {renderIcon(sector.icon)}
                                </div>
                                <div className="flex flex-col">
                                  <p>{sector.label}</p>
                                  <p className="text-sm text-gray-500">
                                    {sector.description}
                                  </p>
                                </div>
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="text-xl font-semibold hover:text-gray-300 transition-colors"
                  >
                    Contact
                  </Link>
                </SheetClose>
              </div>
              <SheetFooter>{/* Optional footer content */}</SheetFooter>
            </SheetContent>
          </Sheet>
        </div>