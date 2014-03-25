/** @constructor */
ScalaJS.c.scala_xml_dtd_MakeValidationException$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.constructor = ScalaJS.c.scala_xml_dtd_MakeValidationException$;
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromFixedAttribute__T__T__T__Lscala_xml_dtd_ValidationException = (function(k, value, actual) {
  return new ScalaJS.c.scala_xml_dtd_ValidationException().init___T((((((("value of attribute " + k) + " FIXED to \"") + value) + "\", but document tries \"") + actual) + "\""))
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromNonEmptyElement__Lscala_xml_dtd_ValidationException = (function() {
  return new ScalaJS.c.scala_xml_dtd_ValidationException().init___T("element should be *empty*")
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromUndefinedElement__T__Lscala_xml_dtd_ValidationException = (function(label) {
  return new ScalaJS.c.scala_xml_dtd_ValidationException().init___T((("element \"" + label) + "\" not allowed here"))
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromUndefinedAttribute__T__Lscala_xml_dtd_ValidationException = (function(key) {
  return new ScalaJS.c.scala_xml_dtd_ValidationException().init___T((("attribute " + key) + " not allowed here"))
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromMissingAttribute__Lscala_collection_immutable_Set__Lscala_xml_dtd_ValidationException = (function(allKeys) {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___T("missing value for REQUIRED attribute");
  if ((allKeys.size__I() > 1)) {
    sb.append__C__Lscala_collection_mutable_StringBuilder(115)
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  allKeys.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(sb$1) {
    return (function(k) {
      return sb$1.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("'%s'")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [k]))))
    })
  })(sb)));
  return new ScalaJS.c.scala_xml_dtd_ValidationException().init___T(sb.toString__T())
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromMissingAttribute__T__T__Lscala_xml_dtd_ValidationException = (function(key, tpe) {
  return new ScalaJS.c.scala_xml_dtd_ValidationException().init___T(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("missing value for REQUIRED attribute %s of type %s")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [key, tpe]))))
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromMissingAttribute__T__T__ = (function(key, tpe) {
  return this.fromMissingAttribute__T__T__Lscala_xml_dtd_ValidationException(key, tpe)
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromMissingAttribute__Lscala_collection_immutable_Set__ = (function(allKeys) {
  return this.fromMissingAttribute__Lscala_collection_immutable_Set__Lscala_xml_dtd_ValidationException(allKeys)
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromUndefinedAttribute__T__ = (function(key$2) {
  return this.fromUndefinedAttribute__T__Lscala_xml_dtd_ValidationException(key$2)
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromUndefinedElement__T__ = (function(label) {
  return this.fromUndefinedElement__T__Lscala_xml_dtd_ValidationException(label)
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromNonEmptyElement__ = (function() {
  return this.fromNonEmptyElement__Lscala_xml_dtd_ValidationException()
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.fromFixedAttribute__T__T__T__ = (function(k, value, actual) {
  return this.fromFixedAttribute__T__T__T__Lscala_xml_dtd_ValidationException(k, value, actual)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_MakeValidationException$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_MakeValidationException$.prototype = ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype;
ScalaJS.is.scala_xml_dtd_MakeValidationException$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_MakeValidationException$)))
});
ScalaJS.as.scala_xml_dtd_MakeValidationException$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_MakeValidationException$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.MakeValidationException")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_MakeValidationException$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_MakeValidationException$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_MakeValidationException$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_MakeValidationException$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.MakeValidationException;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_MakeValidationException$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_MakeValidationException$: 0
}, false, "scala.xml.dtd.MakeValidationException$", ScalaJS.data.java_lang_Object, {
  scala_xml_dtd_MakeValidationException$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_MakeValidationException$.prototype.$classData = ScalaJS.data.scala_xml_dtd_MakeValidationException$;
ScalaJS.moduleInstances.scala_xml_dtd_MakeValidationException = undefined;
ScalaJS.modules.scala_xml_dtd_MakeValidationException = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_MakeValidationException)) {
    ScalaJS.moduleInstances.scala_xml_dtd_MakeValidationException = new ScalaJS.c.scala_xml_dtd_MakeValidationException$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_MakeValidationException
});
//@ sourceMappingURL=MakeValidationException$.js.map
