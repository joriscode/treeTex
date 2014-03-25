/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractBuffer.call(this);
  this.underlying$6 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractBuffer();
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.underlying__Ljava_util_List = (function() {
  return this.underlying$6
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.length__I = (function() {
  return this.underlying__Ljava_util_List().size__I()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.isEmpty__Z = (function() {
  return this.underlying__Ljava_util_List().isEmpty__Z()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_convert_WrapAsScala().asScalaIterator__Ljava_util_Iterator__Lscala_collection_Iterator(this.underlying__Ljava_util_List().iterator__Ljava_util_Iterator())
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.apply__I__O = (function(i) {
  return this.underlying__Ljava_util_List().get__I__O(i)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.update__I__O__V = (function(i, elem) {
  this.underlying__Ljava_util_List().set__I__O__O(i, elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.$$plus$eq$colon__O__Lscala_collection_convert_Wrappers$JListWrapper = (function(elem) {
  this.underlying__Ljava_util_List().subList__I__I__Ljava_util_List(0, 0).add__O__Z(elem);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.$$plus$eq__O__Lscala_collection_convert_Wrappers$JListWrapper = (function(elem) {
  this.underlying__Ljava_util_List().add__O__Z(elem);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.insertAll__I__Lscala_collection_Traversable__V = (function(i, elems) {
  var ins = this.underlying__Ljava_util_List().subList__I__I__Ljava_util_List(0, i);
  elems.seq__Lscala_collection_Traversable().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(ins$1) {
    return (function(x$1) {
      return ScalaJS.bZ(ins$1.add__O__Z(x$1))
    })
  })(ins)))
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.remove__I__O = (function(i) {
  return this.underlying__Ljava_util_List().remove__I__O(i)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.clear__V = (function() {
  this.underlying__Ljava_util_List().clear__V()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.result__Lscala_collection_convert_Wrappers$JListWrapper = (function() {
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.clone__Lscala_collection_convert_Wrappers$JListWrapper = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_List(this.scala$collection$convert$Wrappers$JListWrapper$$$outer__Lscala_collection_convert_Wrappers(), new ScalaJS.c.java_util_ArrayList().init___Ljava_util_Collection(this.underlying__Ljava_util_List()))
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.copy__Ljava_util_List__Lscala_collection_convert_Wrappers$JListWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_List(this.scala$collection$convert$Wrappers$JListWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.copy$default$1__Ljava_util_List = (function() {
  return this.underlying__Ljava_util_List()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.productPrefix__T = (function() {
  return "JListWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Ljava_util_List();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.scala$collection$convert$Wrappers$JListWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_convert_Wrappers$JListWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.clone__Lscala_collection_mutable_Buffer = (function() {
  return this.clone__Lscala_collection_convert_Wrappers$JListWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_convert_Wrappers$JListWrapper(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.$$plus$eq__O__Lscala_collection_mutable_Buffer = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_convert_Wrappers$JListWrapper(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.$$plus$eq$colon__O__Lscala_collection_mutable_Buffer = (function(elem) {
  return this.$$plus$eq$colon__O__Lscala_collection_convert_Wrappers$JListWrapper(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.init___Lscala_collection_convert_Wrappers__Ljava_util_List = (function($$outer, underlying) {
  this.underlying$6 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_mutable_AbstractBuffer.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.scala$collection$convert$Wrappers$JListWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JListWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.copy__Ljava_util_List__ = (function(underlying) {
  return this.copy__Ljava_util_List__Lscala_collection_convert_Wrappers$JListWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.result__ = (function() {
  return this.result__Lscala_collection_convert_Wrappers$JListWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.underlying__ = (function() {
  return this.underlying__Ljava_util_List()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JListWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JListWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JListWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JListWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JListWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JListWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JListWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JListWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JListWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JListWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JListWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JListWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JListWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JListWrapper: 0
}, false, "scala.collection.convert.Wrappers$JListWrapper", ScalaJS.data.scala_collection_mutable_AbstractBuffer, {
  scala_collection_convert_Wrappers$JListWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_collection_mutable_AbstractBuffer: 1,
  scala_collection_mutable_Buffer: 1,
  scala_collection_mutable_BufferLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_script_Scriptable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
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
ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JListWrapper;
//@ sourceMappingURL=Wrappers$JListWrapper.js.map
