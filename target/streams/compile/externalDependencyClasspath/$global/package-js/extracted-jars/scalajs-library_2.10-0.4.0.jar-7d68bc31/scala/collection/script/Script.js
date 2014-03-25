/** @constructor */
ScalaJS.c.scala_collection_script_Script = (function() {
  ScalaJS.c.scala_collection_mutable_ArrayBuffer.call(this)
});
ScalaJS.c.scala_collection_script_Script.prototype = new ScalaJS.inheritable.scala_collection_mutable_ArrayBuffer();
ScalaJS.c.scala_collection_script_Script.prototype.constructor = ScalaJS.c.scala_collection_script_Script;
ScalaJS.c.scala_collection_script_Script.prototype.toString__T = (function() {
  var res = "Script(";
  var it = this.iterator__Lscala_collection_Iterator();
  var i = 1;
  while (it.hasNext__Z()) {
    if ((i > 1)) {
      res = (("" + res) + ", ")
    };
    res = ((((("" + res) + "[") + ScalaJS.bI(i)) + "] ") + it.next__O());
    i = (i + 1)
  };
  return (("" + res) + ")")
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Script = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Script.prototype = ScalaJS.c.scala_collection_script_Script.prototype;
ScalaJS.is.scala_collection_script_Script = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Script)))
});
ScalaJS.as.scala_collection_script_Script = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Script(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Script")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Script = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Script)))
});
ScalaJS.asArrayOf.scala_collection_script_Script = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Script(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Script;", depth)
  }
});
ScalaJS.data.scala_collection_script_Script = new ScalaJS.ClassTypeData({
  scala_collection_script_Script: 0
}, false, "scala.collection.script.Script", ScalaJS.data.scala_collection_mutable_ArrayBuffer, {
  scala_collection_script_Script: 1,
  scala_collection_script_Message: 1,
  scala_collection_mutable_ArrayBuffer: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_mutable_ResizableArray: 1,
  scala_collection_mutable_IndexedSeq: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_mutable_IndexedSeqOptimized: 1,
  scala_collection_IndexedSeqOptimized: 1,
  scala_collection_mutable_IndexedSeqLike: 1,
  scala_collection_IndexedSeqLike: 1,
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
ScalaJS.c.scala_collection_script_Script.prototype.$classData = ScalaJS.data.scala_collection_script_Script;
//@ sourceMappingURL=Script.js.map
