/** @constructor */
ScalaJS.c.scala_runtime_ArrayRuntime$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.constructor = ScalaJS.c.scala_runtime_ArrayRuntime$;
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AZ__AZ = (function(array) {
  return ScalaJS.asArrayOf.scala_Boolean(array.clone__O(), 1)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AC__AC = (function(array) {
  return ScalaJS.asArrayOf.scala_Char(array.clone__O(), 1)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AB__AB = (function(array) {
  return ScalaJS.asArrayOf.scala_Byte(array.clone__O(), 1)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AS__AS = (function(array) {
  return ScalaJS.asArrayOf.scala_Short(array.clone__O(), 1)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AI__AI = (function(array) {
  return ScalaJS.asArrayOf.scala_Int(array.clone__O(), 1)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AJ__AJ = (function(array) {
  return ScalaJS.asArrayOf.scala_Long(array.clone__O(), 1)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AF__AF = (function(array) {
  return ScalaJS.asArrayOf.scala_Float(array.clone__O(), 1)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AD__AD = (function(array) {
  return ScalaJS.asArrayOf.scala_Double(array.clone__O(), 1)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AO__AO = (function(array) {
  return ScalaJS.asArrayOf.java_lang_Object(array.clone__O(), 1)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AO__ = (function(array) {
  return this.cloneArray__AO__AO(array)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AD__ = (function(array$2) {
  return this.cloneArray__AD__AD(array$2)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AF__ = (function(array$3) {
  return this.cloneArray__AF__AF(array$3)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AJ__ = (function(array$4) {
  return this.cloneArray__AJ__AJ(array$4)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AI__ = (function(array$5) {
  return this.cloneArray__AI__AI(array$5)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AS__ = (function(array$6) {
  return this.cloneArray__AS__AS(array$6)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AB__ = (function(array$7) {
  return this.cloneArray__AB__AB(array$7)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AC__ = (function(array$8) {
  return this.cloneArray__AC__AC(array$8)
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.cloneArray__AZ__ = (function(array$9) {
  return this.cloneArray__AZ__AZ(array$9)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ArrayRuntime$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ArrayRuntime$.prototype = ScalaJS.c.scala_runtime_ArrayRuntime$.prototype;
ScalaJS.is.scala_runtime_ArrayRuntime$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ArrayRuntime$)))
});
ScalaJS.as.scala_runtime_ArrayRuntime$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ArrayRuntime$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ArrayRuntime")
  }
});
ScalaJS.isArrayOf.scala_runtime_ArrayRuntime$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ArrayRuntime$)))
});
ScalaJS.asArrayOf.scala_runtime_ArrayRuntime$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ArrayRuntime$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ArrayRuntime;", depth)
  }
});
ScalaJS.data.scala_runtime_ArrayRuntime$ = new ScalaJS.ClassTypeData({
  scala_runtime_ArrayRuntime$: 0
}, false, "scala.runtime.ArrayRuntime$", ScalaJS.data.java_lang_Object, {
  scala_runtime_ArrayRuntime$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ArrayRuntime$.prototype.$classData = ScalaJS.data.scala_runtime_ArrayRuntime$;
ScalaJS.moduleInstances.scala_runtime_ArrayRuntime = undefined;
ScalaJS.modules.scala_runtime_ArrayRuntime = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_ArrayRuntime)) {
    ScalaJS.moduleInstances.scala_runtime_ArrayRuntime = new ScalaJS.c.scala_runtime_ArrayRuntime$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_ArrayRuntime
});
//@ sourceMappingURL=ArrayRuntime$.js.map
