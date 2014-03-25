/** @constructor */
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.lbuff$1 = null
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.constructor = ScalaJS.c.scala_collection_mutable_Stack$StackBuilder;
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.lbuff__Lscala_collection_mutable_ListBuffer = (function() {
  return this.lbuff$1
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.$$plus$eq__O__Lscala_collection_mutable_Stack$StackBuilder = (function(elem) {
  this.lbuff__Lscala_collection_mutable_ListBuffer().$$plus$eq__O__Lscala_collection_mutable_ListBuffer(elem);
  return this
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.clear__V = (function() {
  this.lbuff__Lscala_collection_mutable_ListBuffer().clear__V()
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.result__Lscala_collection_mutable_Stack = (function() {
  return new ScalaJS.c.scala_collection_mutable_Stack().init___Lscala_collection_immutable_List(this.lbuff__Lscala_collection_mutable_ListBuffer().result__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Stack()
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_Stack$StackBuilder(elem)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_Stack$StackBuilder(elem)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  this.lbuff$1 = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  return this
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.result__ = (function() {
  return this.result__Lscala_collection_mutable_Stack()
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.$$plus$eq__O__ = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_Stack$StackBuilder(elem)
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.lbuff__ = (function() {
  return this.lbuff__Lscala_collection_mutable_ListBuffer()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Stack$StackBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Stack$StackBuilder.prototype = ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype;
ScalaJS.is.scala_collection_mutable_Stack$StackBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Stack$StackBuilder)))
});
ScalaJS.as.scala_collection_mutable_Stack$StackBuilder = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Stack$StackBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Stack$StackBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Stack$StackBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Stack$StackBuilder)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Stack$StackBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Stack$StackBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Stack$StackBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Stack$StackBuilder = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Stack$StackBuilder: 0
}, false, "scala.collection.mutable.Stack$StackBuilder", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_Stack$StackBuilder: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Stack$StackBuilder.prototype.$classData = ScalaJS.data.scala_collection_mutable_Stack$StackBuilder;
//@ sourceMappingURL=Stack$StackBuilder.js.map
