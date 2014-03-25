/** @constructor */
ScalaJS.c.scala_util_Properties$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ScalaCompilerVersion$1 = null;
  this.propFilename$1 = null;
  this.scalaProps$1 = null;
  this.releaseVersion$1 = null;
  this.developmentVersion$1 = null;
  this.versionString$1 = null;
  this.copyrightString$1 = null;
  this.bitmap$0$1 = false
});
ScalaJS.c.scala_util_Properties$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Properties$.prototype.constructor = ScalaJS.c.scala_util_Properties$;
ScalaJS.c.scala_util_Properties$.prototype.propFilename__T = (function() {
  return this.propFilename$1
});
ScalaJS.c.scala_util_Properties$.prototype.scalaProps$lzycompute__p1__Ljava_util_Properties = (function() {
  if ((!this.bitmap$0$1)) {
    this.scalaProps$1 = ScalaJS.impls.scala_util_PropertiesTrait$class__scalaProps__Lscala_util_PropertiesTrait__Ljava_util_Properties(this);
    this.bitmap$0$1 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scalaProps$1
});
ScalaJS.c.scala_util_Properties$.prototype.scalaProps__Ljava_util_Properties = (function() {
  if ((!this.bitmap$0$1)) {
    return this.scalaProps$lzycompute__p1__Ljava_util_Properties()
  } else {
    return this.scalaProps$1
  }
});
ScalaJS.c.scala_util_Properties$.prototype.releaseVersion__Lscala_Option = (function() {
  return this.releaseVersion$1
});
ScalaJS.c.scala_util_Properties$.prototype.developmentVersion__Lscala_Option = (function() {
  return this.developmentVersion$1
});
ScalaJS.c.scala_util_Properties$.prototype.versionString__T = (function() {
  return this.versionString$1
});
ScalaJS.c.scala_util_Properties$.prototype.copyrightString__T = (function() {
  return this.copyrightString$1
});
ScalaJS.c.scala_util_Properties$.prototype.scala$util$PropertiesTrait$$undsetter$und$propFilename$und$eq__T__V = (function(x$1) {
  this.propFilename$1 = x$1
});
ScalaJS.c.scala_util_Properties$.prototype.scala$util$PropertiesTrait$$undsetter$und$releaseVersion$und$eq__Lscala_Option__V = (function(x$1) {
  this.releaseVersion$1 = x$1
});
ScalaJS.c.scala_util_Properties$.prototype.scala$util$PropertiesTrait$$undsetter$und$developmentVersion$und$eq__Lscala_Option__V = (function(x$1) {
  this.developmentVersion$1 = x$1
});
ScalaJS.c.scala_util_Properties$.prototype.scala$util$PropertiesTrait$$undsetter$und$versionString$und$eq__T__V = (function(x$1) {
  this.versionString$1 = x$1
});
ScalaJS.c.scala_util_Properties$.prototype.scala$util$PropertiesTrait$$undsetter$und$copyrightString$und$eq__T__V = (function(x$1) {
  this.copyrightString$1 = x$1
});
ScalaJS.c.scala_util_Properties$.prototype.propIsSet__T__Z = (function(name) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__propIsSet__Lscala_util_PropertiesTrait__T__Z(this, name)
});
ScalaJS.c.scala_util_Properties$.prototype.propIsSetTo__T__T__Z = (function(name, value) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__propIsSetTo__Lscala_util_PropertiesTrait__T__T__Z(this, name, value)
});
ScalaJS.c.scala_util_Properties$.prototype.propOrElse__T__T__T = (function(name, alt) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__propOrElse__Lscala_util_PropertiesTrait__T__T__T(this, name, alt)
});
ScalaJS.c.scala_util_Properties$.prototype.propOrEmpty__T__T = (function(name) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__propOrEmpty__Lscala_util_PropertiesTrait__T__T(this, name)
});
ScalaJS.c.scala_util_Properties$.prototype.propOrNull__T__T = (function(name) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__propOrNull__Lscala_util_PropertiesTrait__T__T(this, name)
});
ScalaJS.c.scala_util_Properties$.prototype.propOrNone__T__Lscala_Option = (function(name) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__propOrNone__Lscala_util_PropertiesTrait__T__Lscala_Option(this, name)
});
ScalaJS.c.scala_util_Properties$.prototype.propOrFalse__T__Z = (function(name) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__propOrFalse__Lscala_util_PropertiesTrait__T__Z(this, name)
});
ScalaJS.c.scala_util_Properties$.prototype.setProp__T__T__T = (function(name, value) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__setProp__Lscala_util_PropertiesTrait__T__T__T(this, name, value)
});
ScalaJS.c.scala_util_Properties$.prototype.clearProp__T__T = (function(name) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__clearProp__Lscala_util_PropertiesTrait__T__T(this, name)
});
ScalaJS.c.scala_util_Properties$.prototype.envOrElse__T__T__T = (function(name, alt) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__envOrElse__Lscala_util_PropertiesTrait__T__T__T(this, name, alt)
});
ScalaJS.c.scala_util_Properties$.prototype.envOrNone__T__Lscala_Option = (function(name) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__envOrNone__Lscala_util_PropertiesTrait__T__Lscala_Option(this, name)
});
ScalaJS.c.scala_util_Properties$.prototype.scalaPropOrElse__T__T__T = (function(name, alt) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__scalaPropOrElse__Lscala_util_PropertiesTrait__T__T__T(this, name, alt)
});
ScalaJS.c.scala_util_Properties$.prototype.scalaPropOrEmpty__T__T = (function(name) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__scalaPropOrEmpty__Lscala_util_PropertiesTrait__T__T(this, name)
});
ScalaJS.c.scala_util_Properties$.prototype.scalaPropOrNone__T__Lscala_Option = (function(name) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__scalaPropOrNone__Lscala_util_PropertiesTrait__T__Lscala_Option(this, name)
});
ScalaJS.c.scala_util_Properties$.prototype.versionNumberString__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__versionNumberString__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.sourceEncoding__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__sourceEncoding__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.sourceReader__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__sourceReader__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.encodingString__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__encodingString__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.lineSeparator__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__lineSeparator__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.javaClassPath__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__javaClassPath__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.javaHome__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__javaHome__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.javaVendor__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__javaVendor__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.javaVersion__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__javaVersion__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.javaVmInfo__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__javaVmInfo__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.javaVmName__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__javaVmName__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.javaVmVendor__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__javaVmVendor__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.javaVmVersion__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__javaVmVersion__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.osName__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__osName__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.scalaHome__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__scalaHome__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.tmpDir__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__tmpDir__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.userDir__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__userDir__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.userHome__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__userHome__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.userName__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__userName__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.isWin__Z = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__isWin__Lscala_util_PropertiesTrait__Z(this)
});
ScalaJS.c.scala_util_Properties$.prototype.isMac__Z = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__isMac__Lscala_util_PropertiesTrait__Z(this)
});
ScalaJS.c.scala_util_Properties$.prototype.jdkHome__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__jdkHome__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.versionMsg__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__versionMsg__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.scalaCmd__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__scalaCmd__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.scalacCmd__T = (function() {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__scalacCmd__Lscala_util_PropertiesTrait__T(this)
});
ScalaJS.c.scala_util_Properties$.prototype.isJavaAtLeast__T__Z = (function(version) {
  return ScalaJS.impls.scala_util_PropertiesTrait$class__isJavaAtLeast__Lscala_util_PropertiesTrait__T__Z(this, version)
});
ScalaJS.c.scala_util_Properties$.prototype.main__AT__V = (function(args) {
  ScalaJS.impls.scala_util_PropertiesTrait$class__main__Lscala_util_PropertiesTrait__AT__V(this, args)
});
ScalaJS.c.scala_util_Properties$.prototype.propCategory__T = (function() {
  return "library"
});
ScalaJS.c.scala_util_Properties$.prototype.pickJarBasedOn__Ljava_lang_Class = (function() {
  return ScalaJS.data.scala_Option.getClassOf()
});
ScalaJS.c.scala_util_Properties$.prototype.ScalaCompilerVersion__Ljava_util_jar_Attributes$Name = (function() {
  return this.ScalaCompilerVersion$1
});
ScalaJS.c.scala_util_Properties$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_util_Properties = this;
  ScalaJS.impls.scala_util_PropertiesTrait$class__$init$__Lscala_util_PropertiesTrait__V(this);
  this.ScalaCompilerVersion$1 = new ScalaJS.c.java_util_jar_Attributes$Name().init___T("Scala-Compiler-Version");
  return this
});
ScalaJS.c.scala_util_Properties$.prototype.main__AT__ = (function(args) {
  return ScalaJS.bV(this.main__AT__V(args))
});
ScalaJS.c.scala_util_Properties$.prototype.isJavaAtLeast__T__ = (function(version) {
  return ScalaJS.bZ(this.isJavaAtLeast__T__Z(version))
});
ScalaJS.c.scala_util_Properties$.prototype.scalacCmd__ = (function() {
  return this.scalacCmd__T()
});
ScalaJS.c.scala_util_Properties$.prototype.scalaCmd__ = (function() {
  return this.scalaCmd__T()
});
ScalaJS.c.scala_util_Properties$.prototype.versionMsg__ = (function() {
  return this.versionMsg__T()
});
ScalaJS.c.scala_util_Properties$.prototype.jdkHome__ = (function() {
  return this.jdkHome__T()
});
ScalaJS.c.scala_util_Properties$.prototype.isMac__ = (function() {
  return ScalaJS.bZ(this.isMac__Z())
});
ScalaJS.c.scala_util_Properties$.prototype.isWin__ = (function() {
  return ScalaJS.bZ(this.isWin__Z())
});
ScalaJS.c.scala_util_Properties$.prototype.userName__ = (function() {
  return this.userName__T()
});
ScalaJS.c.scala_util_Properties$.prototype.userHome__ = (function() {
  return this.userHome__T()
});
ScalaJS.c.scala_util_Properties$.prototype.userDir__ = (function() {
  return this.userDir__T()
});
ScalaJS.c.scala_util_Properties$.prototype.tmpDir__ = (function() {
  return this.tmpDir__T()
});
ScalaJS.c.scala_util_Properties$.prototype.scalaHome__ = (function() {
  return this.scalaHome__T()
});
ScalaJS.c.scala_util_Properties$.prototype.osName__ = (function() {
  return this.osName__T()
});
ScalaJS.c.scala_util_Properties$.prototype.javaVmVersion__ = (function() {
  return this.javaVmVersion__T()
});
ScalaJS.c.scala_util_Properties$.prototype.javaVmVendor__ = (function() {
  return this.javaVmVendor__T()
});
ScalaJS.c.scala_util_Properties$.prototype.javaVmName__ = (function() {
  return this.javaVmName__T()
});
ScalaJS.c.scala_util_Properties$.prototype.javaVmInfo__ = (function() {
  return this.javaVmInfo__T()
});
ScalaJS.c.scala_util_Properties$.prototype.javaVersion__ = (function() {
  return this.javaVersion__T()
});
ScalaJS.c.scala_util_Properties$.prototype.javaVendor__ = (function() {
  return this.javaVendor__T()
});
ScalaJS.c.scala_util_Properties$.prototype.javaHome__ = (function() {
  return this.javaHome__T()
});
ScalaJS.c.scala_util_Properties$.prototype.javaClassPath__ = (function() {
  return this.javaClassPath__T()
});
ScalaJS.c.scala_util_Properties$.prototype.lineSeparator__ = (function() {
  return this.lineSeparator__T()
});
ScalaJS.c.scala_util_Properties$.prototype.encodingString__ = (function() {
  return this.encodingString__T()
});
ScalaJS.c.scala_util_Properties$.prototype.sourceReader__ = (function() {
  return this.sourceReader__T()
});
ScalaJS.c.scala_util_Properties$.prototype.sourceEncoding__ = (function() {
  return this.sourceEncoding__T()
});
ScalaJS.c.scala_util_Properties$.prototype.versionNumberString__ = (function() {
  return this.versionNumberString__T()
});
ScalaJS.c.scala_util_Properties$.prototype.scalaPropOrNone__T__ = (function(name) {
  return this.scalaPropOrNone__T__Lscala_Option(name)
});
ScalaJS.c.scala_util_Properties$.prototype.scalaPropOrEmpty__T__ = (function(name$2) {
  return this.scalaPropOrEmpty__T__T(name$2)
});
ScalaJS.c.scala_util_Properties$.prototype.scalaPropOrElse__T__T__ = (function(name$3, alt) {
  return this.scalaPropOrElse__T__T__T(name$3, alt)
});
ScalaJS.c.scala_util_Properties$.prototype.envOrNone__T__ = (function(name$4) {
  return this.envOrNone__T__Lscala_Option(name$4)
});
ScalaJS.c.scala_util_Properties$.prototype.envOrElse__T__T__ = (function(name$5, alt$2) {
  return this.envOrElse__T__T__T(name$5, alt$2)
});
ScalaJS.c.scala_util_Properties$.prototype.clearProp__T__ = (function(name$6) {
  return this.clearProp__T__T(name$6)
});
ScalaJS.c.scala_util_Properties$.prototype.setProp__T__T__ = (function(name$7, value) {
  return this.setProp__T__T__T(name$7, value)
});
ScalaJS.c.scala_util_Properties$.prototype.propOrFalse__T__ = (function(name$8) {
  return ScalaJS.bZ(this.propOrFalse__T__Z(name$8))
});
ScalaJS.c.scala_util_Properties$.prototype.propOrNone__T__ = (function(name$9) {
  return this.propOrNone__T__Lscala_Option(name$9)
});
ScalaJS.c.scala_util_Properties$.prototype.propOrNull__T__ = (function(name$10) {
  return this.propOrNull__T__T(name$10)
});
ScalaJS.c.scala_util_Properties$.prototype.propOrEmpty__T__ = (function(name$11) {
  return this.propOrEmpty__T__T(name$11)
});
ScalaJS.c.scala_util_Properties$.prototype.propOrElse__T__T__ = (function(name$12, alt$3) {
  return this.propOrElse__T__T__T(name$12, alt$3)
});
ScalaJS.c.scala_util_Properties$.prototype.propIsSetTo__T__T__ = (function(name$13, value$2) {
  return ScalaJS.bZ(this.propIsSetTo__T__T__Z(name$13, value$2))
});
ScalaJS.c.scala_util_Properties$.prototype.propIsSet__T__ = (function(name$14) {
  return ScalaJS.bZ(this.propIsSet__T__Z(name$14))
});
ScalaJS.c.scala_util_Properties$.prototype.scala$util$PropertiesTrait$$undsetter$und$copyrightString$und$eq__T__ = (function(x$1) {
  return ScalaJS.bV(this.scala$util$PropertiesTrait$$undsetter$und$copyrightString$und$eq__T__V(x$1))
});
ScalaJS.c.scala_util_Properties$.prototype.scala$util$PropertiesTrait$$undsetter$und$versionString$und$eq__T__ = (function(x$1$2) {
  return ScalaJS.bV(this.scala$util$PropertiesTrait$$undsetter$und$versionString$und$eq__T__V(x$1$2))
});
ScalaJS.c.scala_util_Properties$.prototype.scala$util$PropertiesTrait$$undsetter$und$developmentVersion$und$eq__Lscala_Option__ = (function(x$1$3) {
  return ScalaJS.bV(this.scala$util$PropertiesTrait$$undsetter$und$developmentVersion$und$eq__Lscala_Option__V(x$1$3))
});
ScalaJS.c.scala_util_Properties$.prototype.scala$util$PropertiesTrait$$undsetter$und$releaseVersion$und$eq__Lscala_Option__ = (function(x$1$4) {
  return ScalaJS.bV(this.scala$util$PropertiesTrait$$undsetter$und$releaseVersion$und$eq__Lscala_Option__V(x$1$4))
});
ScalaJS.c.scala_util_Properties$.prototype.scala$util$PropertiesTrait$$undsetter$und$propFilename$und$eq__T__ = (function(x$1$5) {
  return ScalaJS.bV(this.scala$util$PropertiesTrait$$undsetter$und$propFilename$und$eq__T__V(x$1$5))
});
ScalaJS.c.scala_util_Properties$.prototype.copyrightString__ = (function() {
  return this.copyrightString__T()
});
ScalaJS.c.scala_util_Properties$.prototype.versionString__ = (function() {
  return this.versionString__T()
});
ScalaJS.c.scala_util_Properties$.prototype.developmentVersion__ = (function() {
  return this.developmentVersion__Lscala_Option()
});
ScalaJS.c.scala_util_Properties$.prototype.releaseVersion__ = (function() {
  return this.releaseVersion__Lscala_Option()
});
ScalaJS.c.scala_util_Properties$.prototype.scalaProps__ = (function() {
  return this.scalaProps__Ljava_util_Properties()
});
ScalaJS.c.scala_util_Properties$.prototype.propFilename__ = (function() {
  return this.propFilename__T()
});
ScalaJS.c.scala_util_Properties$.prototype.ScalaCompilerVersion__ = (function() {
  return this.ScalaCompilerVersion__Ljava_util_jar_Attributes$Name()
});
ScalaJS.c.scala_util_Properties$.prototype.pickJarBasedOn__ = (function() {
  return this.pickJarBasedOn__Ljava_lang_Class()
});
ScalaJS.c.scala_util_Properties$.prototype.propCategory__ = (function() {
  return this.propCategory__T()
});
/** @constructor */
ScalaJS.inheritable.scala_util_Properties$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Properties$.prototype = ScalaJS.c.scala_util_Properties$.prototype;
ScalaJS.is.scala_util_Properties$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Properties$)))
});
ScalaJS.as.scala_util_Properties$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Properties$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Properties")
  }
});
ScalaJS.isArrayOf.scala_util_Properties$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Properties$)))
});
ScalaJS.asArrayOf.scala_util_Properties$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Properties$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Properties;", depth)
  }
});
ScalaJS.data.scala_util_Properties$ = new ScalaJS.ClassTypeData({
  scala_util_Properties$: 0
}, false, "scala.util.Properties$", ScalaJS.data.java_lang_Object, {
  scala_util_Properties$: 1,
  scala_util_PropertiesTrait: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Properties$.prototype.$classData = ScalaJS.data.scala_util_Properties$;
ScalaJS.moduleInstances.scala_util_Properties = undefined;
ScalaJS.modules.scala_util_Properties = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Properties)) {
    ScalaJS.moduleInstances.scala_util_Properties = new ScalaJS.c.scala_util_Properties$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Properties
});
//@ sourceMappingURL=Properties$.js.map
