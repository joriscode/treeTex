/** @constructor */
ScalaJS.c.scala_sys_process_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_sys_process_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_package$.prototype.constructor = ScalaJS.c.scala_sys_process_package$;
ScalaJS.c.scala_sys_process_package$.prototype.buildersToProcess__Lscala_collection_Seq__Lscala_Function1__Lscala_collection_Seq = (function(builders, convert) {
  return ScalaJS.impls.scala_sys_process_ProcessImplicits$class__buildersToProcess__Lscala_sys_process_ProcessImplicits__Lscala_collection_Seq__Lscala_Function1__Lscala_collection_Seq(this, builders, convert)
});
ScalaJS.c.scala_sys_process_package$.prototype.builderToProcess__Ljava_lang_ProcessBuilder__Lscala_sys_process_ProcessBuilder = (function(builder) {
  return ScalaJS.impls.scala_sys_process_ProcessImplicits$class__builderToProcess__Lscala_sys_process_ProcessImplicits__Ljava_lang_ProcessBuilder__Lscala_sys_process_ProcessBuilder(this, builder)
});
ScalaJS.c.scala_sys_process_package$.prototype.fileToProcess__Ljava_io_File__Lscala_sys_process_ProcessBuilder$FileBuilder = (function(file) {
  return ScalaJS.impls.scala_sys_process_ProcessImplicits$class__fileToProcess__Lscala_sys_process_ProcessImplicits__Ljava_io_File__Lscala_sys_process_ProcessBuilder$FileBuilder(this, file)
});
ScalaJS.c.scala_sys_process_package$.prototype.urlToProcess__Ljava_net_URL__Lscala_sys_process_ProcessBuilder$URLBuilder = (function(url) {
  return ScalaJS.impls.scala_sys_process_ProcessImplicits$class__urlToProcess__Lscala_sys_process_ProcessImplicits__Ljava_net_URL__Lscala_sys_process_ProcessBuilder$URLBuilder(this, url)
});
ScalaJS.c.scala_sys_process_package$.prototype.xmlToProcess__Lscala_xml_Elem__Lscala_sys_process_ProcessBuilder = (function(command) {
  return ScalaJS.impls.scala_sys_process_ProcessImplicits$class__xmlToProcess__Lscala_sys_process_ProcessImplicits__Lscala_xml_Elem__Lscala_sys_process_ProcessBuilder(this, command)
});
ScalaJS.c.scala_sys_process_package$.prototype.stringToProcess__T__Lscala_sys_process_ProcessBuilder = (function(command) {
  return ScalaJS.impls.scala_sys_process_ProcessImplicits$class__stringToProcess__Lscala_sys_process_ProcessImplicits__T__Lscala_sys_process_ProcessBuilder(this, command)
});
ScalaJS.c.scala_sys_process_package$.prototype.stringSeqToProcess__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder = (function(command) {
  return ScalaJS.impls.scala_sys_process_ProcessImplicits$class__stringSeqToProcess__Lscala_sys_process_ProcessImplicits__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder(this, command)
});
ScalaJS.c.scala_sys_process_package$.prototype.javaVmArguments__Lscala_collection_immutable_List = (function() {
  return ScalaJS.modules.scala_collection_JavaConversions().asScalaBuffer__Ljava_util_List__Lscala_collection_mutable_Buffer(ScalaJS.modules.java_lang_management_ManagementFactory().getRuntimeMXBean__Ljava_lang_management_RuntimeMXBean().getInputArguments__Ljava_util_List()).toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_sys_process_package$.prototype.stdin__Ljava_io_InputStream = (function() {
  return ScalaJS.modules.java_lang_System().$in__Ljava_io_InputStream()
});
ScalaJS.c.scala_sys_process_package$.prototype.stdout__Ljava_io_PrintStream = (function() {
  return ScalaJS.modules.java_lang_System().out__Ljava_io_PrintStream()
});
ScalaJS.c.scala_sys_process_package$.prototype.stderr__Ljava_io_PrintStream = (function() {
  return ScalaJS.modules.java_lang_System().err__Ljava_io_PrintStream()
});
ScalaJS.c.scala_sys_process_package$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_sys_process_package = this;
  ScalaJS.impls.scala_sys_process_ProcessImplicits$class__$init$__Lscala_sys_process_ProcessImplicits__V(this);
  return this
});
ScalaJS.c.scala_sys_process_package$.prototype.stringSeqToProcess__Lscala_collection_Seq__ = (function(command) {
  return this.stringSeqToProcess__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder(command)
});
ScalaJS.c.scala_sys_process_package$.prototype.stringToProcess__T__ = (function(command$2) {
  return this.stringToProcess__T__Lscala_sys_process_ProcessBuilder(command$2)
});
ScalaJS.c.scala_sys_process_package$.prototype.xmlToProcess__Lscala_xml_Elem__ = (function(command$3) {
  return this.xmlToProcess__Lscala_xml_Elem__Lscala_sys_process_ProcessBuilder(command$3)
});
ScalaJS.c.scala_sys_process_package$.prototype.urlToProcess__Ljava_net_URL__ = (function(url) {
  return this.urlToProcess__Ljava_net_URL__Lscala_sys_process_ProcessBuilder$URLBuilder(url)
});
ScalaJS.c.scala_sys_process_package$.prototype.fileToProcess__Ljava_io_File__ = (function(file) {
  return this.fileToProcess__Ljava_io_File__Lscala_sys_process_ProcessBuilder$FileBuilder(file)
});
ScalaJS.c.scala_sys_process_package$.prototype.builderToProcess__Ljava_lang_ProcessBuilder__ = (function(builder) {
  return this.builderToProcess__Ljava_lang_ProcessBuilder__Lscala_sys_process_ProcessBuilder(builder)
});
ScalaJS.c.scala_sys_process_package$.prototype.buildersToProcess__Lscala_collection_Seq__Lscala_Function1__ = (function(builders, convert) {
  return this.buildersToProcess__Lscala_collection_Seq__Lscala_Function1__Lscala_collection_Seq(builders, convert)
});
ScalaJS.c.scala_sys_process_package$.prototype.stderr__ = (function() {
  return this.stderr__Ljava_io_PrintStream()
});
ScalaJS.c.scala_sys_process_package$.prototype.stdout__ = (function() {
  return this.stdout__Ljava_io_PrintStream()
});
ScalaJS.c.scala_sys_process_package$.prototype.stdin__ = (function() {
  return this.stdin__Ljava_io_InputStream()
});
ScalaJS.c.scala_sys_process_package$.prototype.javaVmArguments__ = (function() {
  return this.javaVmArguments__Lscala_collection_immutable_List()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_package$.prototype = ScalaJS.c.scala_sys_process_package$.prototype;
ScalaJS.is.scala_sys_process_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_package$)))
});
ScalaJS.as.scala_sys_process_package$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.package")
  }
});
ScalaJS.isArrayOf.scala_sys_process_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_package$)))
});
ScalaJS.asArrayOf.scala_sys_process_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.package;", depth)
  }
});
ScalaJS.data.scala_sys_process_package$ = new ScalaJS.ClassTypeData({
  scala_sys_process_package$: 0
}, false, "scala.sys.process.package$", ScalaJS.data.java_lang_Object, {
  scala_sys_process_package$: 1,
  scala_sys_process_ProcessImplicits: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_package$.prototype.$classData = ScalaJS.data.scala_sys_process_package$;
ScalaJS.moduleInstances.scala_sys_process_package = undefined;
ScalaJS.modules.scala_sys_process_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_process_package)) {
    ScalaJS.moduleInstances.scala_sys_process_package = new ScalaJS.c.scala_sys_process_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_process_package
});
//@ sourceMappingURL=package$.js.map
