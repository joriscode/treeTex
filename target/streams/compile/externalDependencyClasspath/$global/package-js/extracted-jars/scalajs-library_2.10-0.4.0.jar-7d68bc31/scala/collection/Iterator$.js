/** @constructor */
ScalaJS.c.scala_collection_Iterator$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.empty$1 = null
});
ScalaJS.c.scala_collection_Iterator$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_Iterator$.prototype.constructor = ScalaJS.c.scala_collection_Iterator$;
ScalaJS.c.scala_collection_Iterator$.prototype.IteratorCanBuildFrom__Lscala_collection_TraversableOnce$BufferedCanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_Iterator$$anon$25().init___()
});
ScalaJS.c.scala_collection_Iterator$.prototype.empty__Lscala_collection_Iterator = (function() {
  return this.empty$1
});
ScalaJS.c.scala_collection_Iterator$.prototype.single__O__Lscala_collection_Iterator = (function(elem) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$3().init___O(elem)
});
ScalaJS.c.scala_collection_Iterator$.prototype.apply__Lscala_collection_Seq__Lscala_collection_Iterator = (function(elems) {
  return elems.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_Iterator$.prototype.fill__I__Lscala_Function0__Lscala_collection_Iterator = (function(len, elem) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$4().init___I__Lscala_Function0(len, elem)
});
ScalaJS.c.scala_collection_Iterator$.prototype.tabulate__I__Lscala_Function1__Lscala_collection_Iterator = (function(end, f) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$5().init___I__Lscala_Function1(end, f)
});
ScalaJS.c.scala_collection_Iterator$.prototype.range__I__I__Lscala_collection_Iterator = (function(start, end) {
  return this.range__I__I__I__Lscala_collection_Iterator(start, end, 1)
});
ScalaJS.c.scala_collection_Iterator$.prototype.range__I__I__I__Lscala_collection_Iterator = (function(start, end, step) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$6().init___I__I__I(start, end, step)
});
ScalaJS.c.scala_collection_Iterator$.prototype.iterate__O__Lscala_Function1__Lscala_collection_Iterator = (function(start, f) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$7().init___O__Lscala_Function1(start, f)
});
ScalaJS.c.scala_collection_Iterator$.prototype.from__I__Lscala_collection_Iterator = (function(start) {
  return this.from__I__I__Lscala_collection_Iterator(start, 1)
});
ScalaJS.c.scala_collection_Iterator$.prototype.from__I__I__Lscala_collection_Iterator = (function(start, step) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$8().init___I__I(start, step)
});
ScalaJS.c.scala_collection_Iterator$.prototype.continually__Lscala_Function0__Lscala_collection_Iterator = (function(elem) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$9().init___Lscala_Function0(elem)
});
ScalaJS.c.scala_collection_Iterator$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_Iterator = this;
  this.empty$1 = new ScalaJS.c.scala_collection_Iterator$$anon$2().init___();
  return this
});
ScalaJS.c.scala_collection_Iterator$.prototype.continually__Lscala_Function0__ = (function(elem) {
  return this.continually__Lscala_Function0__Lscala_collection_Iterator(elem)
});
ScalaJS.c.scala_collection_Iterator$.prototype.from__I__I__ = (function(start, step) {
  return this.from__I__I__Lscala_collection_Iterator(start, step)
});
ScalaJS.c.scala_collection_Iterator$.prototype.from__I__ = (function(start$2) {
  return this.from__I__Lscala_collection_Iterator(start$2)
});
ScalaJS.c.scala_collection_Iterator$.prototype.iterate__O__Lscala_Function1__ = (function(start$3, f) {
  return this.iterate__O__Lscala_Function1__Lscala_collection_Iterator(start$3, f)
});
ScalaJS.c.scala_collection_Iterator$.prototype.range__I__I__I__ = (function(start$4, end, step$2) {
  return this.range__I__I__I__Lscala_collection_Iterator(start$4, end, step$2)
});
ScalaJS.c.scala_collection_Iterator$.prototype.range__I__I__ = (function(start$5, end$2) {
  return this.range__I__I__Lscala_collection_Iterator(start$5, end$2)
});
ScalaJS.c.scala_collection_Iterator$.prototype.tabulate__I__Lscala_Function1__ = (function(end$3, f$2) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_Iterator(end$3, f$2)
});
ScalaJS.c.scala_collection_Iterator$.prototype.fill__I__Lscala_Function0__ = (function(len, elem$2) {
  return this.fill__I__Lscala_Function0__Lscala_collection_Iterator(len, elem$2)
});
ScalaJS.c.scala_collection_Iterator$.prototype.apply__Lscala_collection_Seq__ = (function(elems) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_Iterator(elems)
});
ScalaJS.c.scala_collection_Iterator$.prototype.single__O__ = (function(elem$3) {
  return this.single__O__Lscala_collection_Iterator(elem$3)
});
ScalaJS.c.scala_collection_Iterator$.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_Iterator$.prototype.IteratorCanBuildFrom__ = (function() {
  return this.IteratorCanBuildFrom__Lscala_collection_TraversableOnce$BufferedCanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$.prototype = ScalaJS.c.scala_collection_Iterator$.prototype;
ScalaJS.is.scala_collection_Iterator$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$)))
});
ScalaJS.as.scala_collection_Iterator$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$ = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$: 0
}, false, "scala.collection.Iterator$", ScalaJS.data.java_lang_Object, {
  scala_collection_Iterator$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$.prototype.$classData = ScalaJS.data.scala_collection_Iterator$;
ScalaJS.moduleInstances.scala_collection_Iterator = undefined;
ScalaJS.modules.scala_collection_Iterator = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_Iterator)) {
    ScalaJS.moduleInstances.scala_collection_Iterator = new ScalaJS.c.scala_collection_Iterator$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_Iterator
});
//@ sourceMappingURL=Iterator$.js.map
