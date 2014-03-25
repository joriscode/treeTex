/** @constructor */
ScalaJS.c.scala_collection_mutable_Stack = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSeq.call(this);
  this.elems$5 = null
});
ScalaJS.c.scala_collection_mutable_Stack.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSeq();
ScalaJS.c.scala_collection_mutable_Stack.prototype.constructor = ScalaJS.c.scala_collection_mutable_Stack;
ScalaJS.c.scala_collection_mutable_Stack.prototype.elems__Lscala_collection_immutable_List = (function() {
  return this.elems$5
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.elems$und$eq__Lscala_collection_immutable_List__V = (function(x$1) {
  this.elems$5 = x$1
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.companion__Lscala_collection_mutable_Stack$ = (function() {
  return ScalaJS.modules.scala_collection_mutable_Stack()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.isEmpty__Z = (function() {
  return this.elems__Lscala_collection_immutable_List().isEmpty__Z()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.length__I = (function() {
  return this.elems__Lscala_collection_immutable_List().length__I()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.apply__I__O = (function(index) {
  return this.elems__Lscala_collection_immutable_List().apply__I__O(index)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.update__I__O__V = (function(n, newelem) {
  if (((n < 0) || (n >= this.length__I()))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(n)))
  } else {
    var jsx$4 = this.elems__Lscala_collection_immutable_List().take__I__Lscala_collection_immutable_List(n);
    var x$1 = newelem;
    var jsx$3 = this.elems__Lscala_collection_immutable_List().drop__I__Lscala_collection_immutable_List((n + 1)).$$colon$colon__O__Lscala_collection_immutable_List(x$1);
    var jsx$2 = jsx$4.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(jsx$3, ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom());
    var jsx$1 = ScalaJS.as.scala_collection_immutable_List(jsx$2);
    this.elems$und$eq__Lscala_collection_immutable_List__V(jsx$1)
  }
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.push__O__Lscala_collection_mutable_Stack = (function(elem) {
  var x$2 = elem;
  var jsx$5 = this.elems__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$2);
  this.elems$und$eq__Lscala_collection_immutable_List__V(jsx$5);
  return this
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.push__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Stack = (function(elem1, elem2, elems) {
  return this.push__O__Lscala_collection_mutable_Stack(elem1).push__O__Lscala_collection_mutable_Stack(elem2).pushAll__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Stack(elems)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.pushAll__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Stack = (function(xs) {
  xs.seq__Lscala_collection_TraversableOnce().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(elem) {
      return arg$outer.push__O__Lscala_collection_mutable_Stack(elem)
    })
  })(this)));
  return this
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.top__O = (function() {
  return this.elems__Lscala_collection_immutable_List().head__O()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.pop__O = (function() {
  var res = this.elems__Lscala_collection_immutable_List().head__O();
  this.elems$und$eq__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(this.elems__Lscala_collection_immutable_List().tail__O()));
  return res
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.clear__V = (function() {
  this.elems$und$eq__Lscala_collection_immutable_List__V(ScalaJS.modules.scala_collection_immutable_Nil())
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.elems__Lscala_collection_immutable_List().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.toList__Lscala_collection_immutable_List = (function() {
  return this.elems__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_IterableLike$class__foreach__Lscala_collection_IterableLike__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.clone__Lscala_collection_mutable_Stack = (function() {
  return new ScalaJS.c.scala_collection_mutable_Stack().init___Lscala_collection_immutable_List(this.elems__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Stack()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return this.companion__Lscala_collection_mutable_Stack$()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.init___Lscala_collection_immutable_List = (function(elems) {
  this.elems$5 = elems;
  ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_Stack.prototype.init___Lscala_collection_immutable_List.call(this, ScalaJS.modules.scala_collection_immutable_Nil());
  return this
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.pop__ = (function() {
  return this.pop__O()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.top__ = (function() {
  return this.top__O()
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.pushAll__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.pushAll__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Stack(xs)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.push__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.push__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Stack(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.push__O__ = (function(elem) {
  return this.push__O__Lscala_collection_mutable_Stack(elem)
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.elems$und$eq__Lscala_collection_immutable_List__ = (function(x$1) {
  return ScalaJS.bV(this.elems$und$eq__Lscala_collection_immutable_List__V(x$1))
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.elems__ = (function() {
  return this.elems__Lscala_collection_immutable_List()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Stack = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Stack.prototype = ScalaJS.c.scala_collection_mutable_Stack.prototype;
ScalaJS.is.scala_collection_mutable_Stack = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Stack)))
});
ScalaJS.as.scala_collection_mutable_Stack = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Stack(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Stack")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Stack = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Stack)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Stack = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Stack(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Stack;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Stack = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Stack: 0
}, false, "scala.collection.mutable.Stack", ScalaJS.data.scala_collection_mutable_AbstractSeq, {
  scala_collection_mutable_Stack: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_AbstractSeq: 1,
  scala_collection_mutable_Seq: 1,
  scala_collection_mutable_SeqLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractSeq: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Stack.prototype.$classData = ScalaJS.data.scala_collection_mutable_Stack;
//@ sourceMappingURL=Stack.js.map
